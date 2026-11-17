import { clip } from './trace-db.ts'

export function shortTitle(text: string): string {
  return clip(
    text
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/^职责[：:][^。]*。\s*/, '')
      .replace(/^任务[：:]\s*/, '')
      .split(/[。；\n]/)[0] || '任务未命名',
    32
  )
}

export function goalTitle(title: string): string {
  return shortTitle(title)
}

export function deliveryOf(
  output: string,
  status: string
): { status: string; summary: string; links: { url: string; label: string }[] } {
  const clauses = output
    .split(/\n|[。；]/)
    .map((s) => s.trim())
    .filter(Boolean)
  const links: { url: string; label: string }[] = []
  const seen = new Set<string>()
  for (const clause of clauses) {
    if (
      /未(?:部署|发布|开通|获批)|尚未|待(?:审批|部署|发布|开通)|候选|申请中|不能.*(?:访问|使用)/.test(
        clause
      )
    ) {
      continue
    }
    for (const found of clause.matchAll(/https?:\/\/[^\s<>\x22]+/g)) {
      const value = found[0].replace(/[）)\]，,；;。]+$/, '')
      try {
        const parsed = new URL(value)
        if (
          parsed.username ||
          parsed.password ||
          seen.has(value) ||
          /token|authCode|secret|access_key/i.test(parsed.search)
        ) {
          continue
        }
        if (
          /\/codereview\/|\/merge_requests\/|\/openapi\/|\/api\/|\/auth\/|\/console\/|\/tags\//.test(
            parsed.pathname
          )
        ) {
          continue
        }
        if (!/页面|工作台|访问|预览|打开|可用|服务|发布|域名|http:/.test(clause)) {
          continue
        }
        seen.add(value)
        links.push({
          url: value,
          label: /localhost|127\.0\.0\.1/.test(parsed.hostname)
            ? '打开本机页面（回报入口）'
            : '打开页面（回报入口）'
        })
      } catch {
        /* Only complete recorded HTTP(S) links are accepted. */
      }
    }
  }
  const remaining = clauses.find((s) =>
    /尚未|未完成|未验证|未核实|未部署|未发布|未验收|未提交|审批中|仍缺|仍需|仍待|等待|阻塞|缺少|不等于.*验收|not_connected|configuration_required/.test(
      s
    )
  )
  if (remaining) {
    const summary = /真实登录|登录.*未|换票.*未/.test(output)
      ? '真实登录尚未验收'
      : /数据|not_connected|reads503/.test(remaining)
        ? '真实数据尚未接通'
        : /域名|HTTPS/.test(remaining)
          ? '域名访问尚未开通'
          : /部署|上线|镜像|ASI/.test(remaining)
            ? '上线部署尚未验收'
            : /审批|授权|权限/.test(remaining)
              ? '授权条件仍待确认'
              : '仍有交付条件未完成'
    return { status: '待交付', summary, links }
  }
  if (['failed', 'blocked', 'abandoned'].includes(status)) {
    return { status: '需处理', summary: '任务遇到阻塞，尚无交付结果', links }
  }
  if (!output.trim()) {
    return {
      status: 'completed' === status ? '待核验' : '进行中',
      summary: 'completed' === status ? '执行已结束，但没有成果回报' : '尚未收到本任务的结果',
      links
    }
  }
  return {
    status: '已回报',
    summary: /评审通过|复审通过|无阻断|无.*P1.*P2/.test(output)
      ? '代码评审通过，业务交付另行验收'
      : /推送|提交|MR|PR/.test(output)
        ? '代码已提交，尚需交付验收'
        : /可用|页面.*验证通过|访问.*成功/.test(output)
          ? '已提供页面入口与验证回报'
          : '已有结果回报，可点开核对',
    links
  }
}
