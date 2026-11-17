(function(){var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,ee=1031,M=1033,N=33776,P=33777,F=33778,te=33779,I=35840,L=35841,R=35842,z=35843,ne=36196,B=37492,re=37496,ie=37808,ae=37809,oe=37810,se=37811,ce=37812,le=37813,V=37814,ue=37815,de=37816,fe=37817,H=37818,pe=37819,U=37820,W=37821,me=36492,he=36494,ge=36495,_e=36283,ve=36284,ye=36285,be=36286,xe=2300,Se=2301,Ce=2302,we=2400,Te=2401,Ee=2402,De=3200,Oe=3201,ke=`srgb`,Ae=`srgb-linear`,je=`linear`,Me=`srgb`,Ne=7680,Pe=35044,Fe=2e3,Ie=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Le=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Re=1234567,ze=Math.PI/180,Be=180/Math.PI;function Ve(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Le[e&255]+Le[e>>8&255]+Le[e>>16&255]+Le[e>>24&255]+`-`+Le[t&255]+Le[t>>8&255]+`-`+Le[t>>16&15|64]+Le[t>>24&255]+`-`+Le[n&63|128]+Le[n>>8&255]+`-`+Le[n>>16&255]+Le[n>>24&255]+Le[r&255]+Le[r>>8&255]+Le[r>>16&255]+Le[r>>24&255]).toLowerCase()}function G(e,t,n){return Math.max(t,Math.min(n,e))}function He(e,t){return(e%t+t)%t}function Ue(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function We(e,t,n){return e===t?0:(n-e)/(t-e)}function Ge(e,t,n){return(1-n)*e+n*t}function Ke(e,t,n,r){return Ge(e,t,1-Math.exp(-n*r))}function qe(e,t=1){return t-Math.abs(He(e,t*2)-t)}function Je(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Ye(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Xe(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ze(e,t){return e+Math.random()*(t-e)}function Qe(e){return e*(.5-Math.random())}function $e(e){e!==void 0&&(Re=e);let t=Re+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function et(e){return e*ze}function tt(e){return e*Be}function nt(e){return!(e&e-1)&&e!==0}function rt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function it(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function at(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function st(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var ct={DEG2RAD:ze,RAD2DEG:Be,generateUUID:Ve,clamp:G,euclideanModulo:He,mapLinear:Ue,inverseLerp:We,lerp:Ge,damp:Ke,pingpong:qe,smoothstep:Je,smootherstep:Ye,randInt:Xe,randFloat:Ze,randFloatSpread:Qe,seededRandom:$e,degToRad:et,radToDeg:tt,isPowerOfTwo:nt,ceilPowerOfTwo:rt,floorPowerOfTwo:it,setQuaternionFromProperEuler:at,normalize:st,denormalize:ot},K=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(G(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ut.copy(this).projectOnVector(e),this.sub(ut)}reflect(e){return this.sub(ut.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(G(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ut=new q,dt=new lt,J=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ft.makeScale(e,t)),this}rotate(e){return this.premultiply(ft.makeRotation(-e)),this}translate(e,t){return this.premultiply(ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ft=new J;function pt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ht(){let e=mt(`canvas`);return e.style.display=`block`,e}var gt={};function _t(e){e in gt||(gt[e]=!0,console.warn(e))}function vt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var yt=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xt(){let e={enabled:!0,workingColorSpace:Ae,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=wt(e.r),e.g=wt(e.g),e.b=wt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?je:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return _t(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return _t(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ae]:{primaries:t,whitePoint:r,transfer:je,toXYZ:yt,fromXYZ:bt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:r,transfer:Me,toXYZ:yt,fromXYZ:bt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),e}var St=xt();function Ct(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function wt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Tt,Et=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tt===void 0&&(Tt=mt(`canvas`)),Tt.width=e.width,Tt.height=e.height;let t=Tt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Tt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=mt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ct(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ct(t[e]/255)*255):t[e]=Ct(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Dt=0,Ot=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=Ve(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(kt(r[t].image)):e.push(kt(r[t]))}else e=kt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function kt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Et.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var At=0,jt=new q,Mt=class e extends Ie{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:At++}),this.uuid=Ve(),this.name=``,this.source=new Ot(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new J,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jt).x}get height(){return this.source.getSize(jt).y}get depth(){return this.source.getSize(jt).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=300,Mt.DEFAULT_ANISOTROPY=1;var Nt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=G(this.x,e.x,t.x),this.y=G(this.y,e.y,t.y),this.z=G(this.z,e.z,t.z),this.w=G(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=G(this.x,e,t),this.y=G(this.y,e,t),this.z=G(this.z,e,t),this.w=G(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(G(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pt=class extends Ie{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);let r=new Mt({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ot(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ft=class extends Pt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},It=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Lt=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rt=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Bt):Bt.fromBufferAttribute(r,t),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Vt.copy(e.boundingBox)),Vt.applyMatrix4(e.matrixWorld),this.union(Vt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jt),Yt.subVectors(this.max,Jt),Ht.subVectors(e.a,Jt),Ut.subVectors(e.b,Jt),Wt.subVectors(e.c,Jt),Gt.subVectors(Ut,Ht),Kt.subVectors(Wt,Ut),qt.subVectors(Ht,Wt);let t=[0,-Gt.z,Gt.y,0,-Kt.z,Kt.y,0,-qt.z,qt.y,Gt.z,0,-Gt.x,Kt.z,0,-Kt.x,qt.z,0,-qt.x,-Gt.y,Gt.x,0,-Kt.y,Kt.x,0,-qt.y,qt.x,0];return!Qt(t,Ht,Ut,Wt,Yt)||(t=[1,0,0,0,1,0,0,0,1],!Qt(t,Ht,Ut,Wt,Yt))?!1:(Xt.crossVectors(Gt,Kt),t=[Xt.x,Xt.y,Xt.z],Qt(t,Ht,Ut,Wt,Yt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zt=[new q,new q,new q,new q,new q,new q,new q,new q],Bt=new q,Vt=new Rt,Ht=new q,Ut=new q,Wt=new q,Gt=new q,Kt=new q,qt=new q,Jt=new q,Yt=new q,Xt=new q,Zt=new q;function Qt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Zt.fromArray(e,a);let o=i.x*Math.abs(Zt.x)+i.y*Math.abs(Zt.y)+i.z*Math.abs(Zt.z),s=t.dot(Zt),c=n.dot(Zt),l=r.dot(Zt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var $t=new Rt,en=new q,tn=new q,nn=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?$t.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;en.subVectors(e,this.center);let t=en.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(en,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(en.copy(e.center).add(tn)),this.expandByPoint(en.copy(e.center).sub(tn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rn=new q,an=new q,on=new q,sn=new q,cn=new q,ln=new q,un=new q,dn=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){an.copy(e).add(t).multiplyScalar(.5),on.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(an);let i=e.distanceTo(t)*.5,a=-this.direction.dot(on),o=sn.dot(this.direction),s=-sn.dot(on),c=sn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(an).addScaledVector(on,d),f}intersectSphere(e,t){rn.subVectors(e.center,this.origin);let n=rn.dot(this.direction),r=rn.dot(rn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,i){cn.subVectors(t,e),ln.subVectors(n,e),un.crossVectors(cn,ln);let a=this.direction.dot(un),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sn.subVectors(this.origin,e);let s=o*this.direction.dot(ln.crossVectors(sn,ln));if(s<0)return null;let c=o*this.direction.dot(cn.cross(sn));if(c<0||s+c>a)return null;let l=-o*sn.dot(un);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/pn.setFromMatrixColumn(e,0).length(),i=1/pn.setFromMatrixColumn(e,1).length(),a=1/pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hn,e,gn)}lookAt(e,t,n){let r=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),_n.crossVectors(n,yn),_n.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),_n.crossVectors(n,yn)),_n.normalize(),vn.crossVectors(yn,_n),r[0]=_n.x,r[4]=vn.x,r[8]=yn.x,r[1]=_n.y,r[5]=vn.y,r[9]=yn.y,r[2]=_n.z,r[6]=vn.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*ee+c*F,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*ee+f*F,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*ee+g*F,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*ee+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=pn.set(r[0],r[1],r[2]).length(),a=pn.set(r[4],r[5],r[6]).length(),o=pn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);let s=1/i,c=1/a,l=1/o;return mn.elements[0]*=s,mn.elements[1]*=s,mn.elements[2]*=s,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=l,mn.elements[9]*=l,mn.elements[10]*=l,t.setFromRotationMatrix(mn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Fe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Fe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},pn=new q,mn=new fn,hn=new q(0,0,0),gn=new q(1,1,1),_n=new q,vn=new q,yn=new q,bn=new fn,xn=new lt,Sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(G(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-G(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(G(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-G(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(G(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-G(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xn.setFromEuler(this),this.setFromQuaternion(xn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER=`XYZ`;var Cn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},wn=0,Tn=new q,En=new lt,Dn=new fn,On=new q,kn=new q,An=new q,jn=new lt,Mn=new q(1,0,0),Nn=new q(0,1,0),Pn=new q(0,0,1),Fn={type:`added`},In={type:`removed`},Ln={type:`childadded`,child:null},Rn={type:`childremoved`,child:null},zn=class e extends Ie{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wn++}),this.uuid=Ve(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Sn,r=new lt,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fn},normalMatrix:{value:new J}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.multiply(En),this}rotateOnWorldAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.premultiply(En),this}rotateX(e){return this.rotateOnAxis(Mn,e)}rotateY(e){return this.rotateOnAxis(Nn,e)}rotateZ(e){return this.rotateOnAxis(Pn,e)}translateOnAxis(e,t){return Tn.copy(e).applyQuaternion(this.quaternion),this.position.add(Tn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mn,e)}translateY(e){return this.translateOnAxis(Nn,e)}translateZ(e){return this.translateOnAxis(Pn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?On.copy(e):On.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(kn,On,this.up):Dn.lookAt(On,kn,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),En.setFromRotationMatrix(Dn),this.quaternion.premultiply(En.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(In),Rn.child=e,this.dispatchEvent(Rn),Rn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,e,An),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,jn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};zn.DEFAULT_UP=new q(0,1,0),zn.DEFAULT_MATRIX_AUTO_UPDATE=!0,zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bn=new q,Vn=new q,Hn=new q,Un=new q,Wn=new q,Gn=new q,Kn=new q,qn=new q,Jn=new q,Yn=new q,Xn=new Nt,Zn=new Nt,Qn=new Nt,$n=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},nr={h:0,s:0,l:0};function rr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var ir=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=St.workingColorSpace){if(e=He(e,1),t=G(t,0,1),n=G(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=rr(i,r,e+1/3),this.g=rr(i,r,e),this.b=rr(i,r,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,t=ke){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){let n=er[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}copyLinearToSRGB(e){return this.r=wt(e.r),this.g=wt(e.g),this.b=wt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return St.workingToColorSpace(ar.copy(this),e),Math.round(G(ar.r*255,0,255))*65536+Math.round(G(ar.g*255,0,255))*256+Math.round(G(ar.b*255,0,255))}getHexString(e=ke){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.workingToColorSpace(ar.copy(this),t);let n=ar.r,r=ar.g,i=ar.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=St.workingColorSpace){return St.workingToColorSpace(ar.copy(this),t),e.r=ar.r,e.g=ar.g,e.b=ar.b,e}getStyle(e=ke){St.workingToColorSpace(ar.copy(this),e);let t=ar.r,n=ar.g,r=ar.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(nr);let n=Ge(tr.h,nr.h,t),r=Ge(tr.s,nr.s,t),i=Ge(tr.l,nr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ar=new ir;ir.NAMES=er;var or=0,sr=class extends Ie{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:or++}),this.uuid=Ve(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ir(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ne,this.stencilZFail=Ne,this.stencilZPass=Ne,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},cr=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new ir(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lr=new q,ur=new K,dr=0,fr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Pe,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ot(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ot(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ot(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ot(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=0,_r=new fn,vr=new zn,yr=new q,br=new Rt,xr=new Rt,Sr=new q,Cr=class e extends Ie{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=Ve(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(pt(e)?mr:pr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new J().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _r.makeRotationFromQuaternion(e),this.applyMatrix4(_r),this}rotateX(e){return _r.makeRotationX(e),this.applyMatrix4(_r),this}rotateY(e){return _r.makeRotationY(e),this.applyMatrix4(_r),this}rotateZ(e){return _r.makeRotationZ(e),this.applyMatrix4(_r),this}translate(e,t,n){return _r.makeTranslation(e,t,n),this.applyMatrix4(_r),this}scale(e,t,n){return _r.makeScale(e,t,n),this.applyMatrix4(_r),this}lookAt(e){return vr.lookAt(e),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];br.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(this.boundingBox.min,br.min),this.boundingBox.expandByPoint(Sr),Sr.addVectors(this.boundingBox.max,br.max),this.boundingBox.expandByPoint(Sr)):(this.boundingBox.expandByPoint(br.min),this.boundingBox.expandByPoint(br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Sr.addVectors(br.min,xr.min),br.expandByPoint(Sr),Sr.addVectors(br.max,xr.max),br.expandByPoint(Sr)):(br.expandByPoint(xr.min),br.expandByPoint(xr.max))}br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Sr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Sr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Sr.fromBufferAttribute(a,t),o&&(yr.fromBufferAttribute(e,t),Sr.add(yr)),r=Math.max(r,n.distanceToSquared(Sr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new fr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let c=new q,l=new q,u=new q,d=new K,f=new K,p=new K,m=new q,h=new q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new q,y=new q,b=new q,x=new q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sr.fromBufferAttribute(e,t),Sr.normalize(),e.setXYZ(t,Sr.x,Sr.y,Sr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},wr=new fn,Tr=new dn,Er=new nn,Dr=new q,Or=new q,kr=new q,Ar=new q,jr=new q,Mr=new q,Nr=new q,Pr=new q,Fr=class extends zn{constructor(e=new Cr,t=new cr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Mr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(jr.fromBufferAttribute(s,e),a?Mr.addScaledVector(jr,r):Mr.addScaledVector(jr.sub(t),r))}t.add(Mr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Tr.copy(e.ray).recast(e.near),Er.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Er,Dr)===null||Tr.origin.distanceToSquared(Dr)>(e.far-e.near)**2)||(wr.copy(i).invert(),Tr.copy(e.ray).applyMatrix4(wr),(n.boundingBox===null||Tr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Lr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Lr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Lr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Lr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ir(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Pr.copy(s),Pr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Pr);return l<n.near||l>n.far?null:{distance:l,point:Pr.clone(),object:e}}function Lr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Or),e.getVertexPosition(c,kr),e.getVertexPosition(l,Ar);let u=Ir(e,t,n,r,Or,kr,Ar,Nr);if(u){let e=new q;$n.getBarycoord(Nr,Or,kr,Ar,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};$n.getNormal(Or,kr,Ar,t.normal),u.face=t,u.barycoord=e}return u}var Rr=class e extends Cr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Br(e){let t={};for(let n=0;n<e.length;n++){let r=zr(e[n]);for(let e in r)t[e]=r[e]}return t}function Vr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Hr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:St.workingColorSpace}var Ur={clone:zr,merge:Br},Wr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kr=class extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wr,this.fragmentShader=Gr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Vr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qr=class extends zn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Fe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jr=new q,Yr=new K,Xr=new K,Zr=class extends qr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Be*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ze*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Be*2*Math.atan(Math.tan(ze*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Yr,Xr),t.subVectors(Xr,Yr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ze*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qr=-90,$r=1,ei=class extends zn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zr(Qr,$r,e,t);r.layers=this.layers,this.add(r);let i=new Zr(Qr,$r,e,t);i.layers=this.layers,this.add(i);let a=new Zr(Qr,$r,e,t);a.layers=this.layers,this.add(a);let o=new Zr(Qr,$r,e,t);o.layers=this.layers,this.add(o);let s=new Zr(Qr,$r,e,t);s.layers=this.layers,this.add(s);let c=new Zr(Qr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ti=class extends Mt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),i=new Kr({name:`CubemapFromEquirect`,uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Fr(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new ei(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ri=class extends zn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ii={type:`move`},ai=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ii)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oi=class extends zn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},si=class extends Mt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ci=class extends fr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},li=new fn,ui=new fn,di=[],fi=new Rt,pi=new fn,mi=new Fr,hi=new nn,gi=class extends Fr{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,pi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),fi.copy(e.boundingBox).applyMatrix4(li),this.boundingBox.union(fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),hi.copy(e.boundingSphere).applyMatrix4(li),this.boundingSphere.union(hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(mi.geometry=this.geometry,mi.material=this.material,mi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hi.copy(this.boundingSphere),hi.applyMatrix4(n),e.ray.intersectsSphere(hi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,li),ui.multiplyMatrices(n,li),mi.matrixWorld=ui,mi.raycast(e,di);for(let e=0,n=di.length;e<n;e++){let n=di[e];n.instanceId=i,n.object=this,t.push(n)}di.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_i=new q,vi=new q,yi=new J,bi=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_i.subVectors(n,t).cross(vi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_i),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yi.getNormalMatrix(e),r=this.coplanarPoint(_i).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xi=new nn,Si=new K(.5,.5),Ci=new q,wi=class{constructor(e=new bi,t=new bi,n=new bi,r=new bi,i=new bi,a=new bi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476+Si.distanceTo(e.center),xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ci.x=r.normal.x>0?e.max.x:e.min.x,Ci.y=r.normal.y>0?e.max.y:e.min.y,Ci.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ti=class extends Mt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ei=class extends Mt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ot(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Di=class extends Mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class e extends Cr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ki=class e extends Cr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new hr(s,3)),this.setAttribute(`normal`,new hr(c,3)),this.setAttribute(`uv`,new hr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ai=class extends sr{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new ir(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},ji=class extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new ir(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ir(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mi=class extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=De,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ni=class extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Fi(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ii=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Li=class extends Ii{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:we,endingEnd:we}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Te:i=e,o=2*t-n;break;case Ee:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Te:a=e,s=2*n-t;break;case Ee:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ri=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zi=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Pi(t,this.TimeBufferType),this.values=Pi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pi(e.times,Array),values:Pi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ri(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Li(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xe:t=this.InterpolantFactoryMethodDiscrete;break;case Se:t=this.InterpolantFactoryMethodLinear;break;case Ce:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xe;case this.InterpolantFactoryMethodLinear:return Se;case this.InterpolantFactoryMethodSmooth:return Ce}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Fi(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ce,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Bi.prototype.ValueTypeName=``,Bi.prototype.TimeBufferType=Float32Array,Bi.prototype.ValueBufferType=Float32Array,Bi.prototype.DefaultInterpolation=Se;var Vi=class extends Bi{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName=`bool`,Vi.prototype.ValueBufferType=Array,Vi.prototype.DefaultInterpolation=xe,Vi.prototype.InterpolantFactoryMethodLinear=void 0,Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}};Hi.prototype.ValueTypeName=`color`;var Ui=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}};Ui.prototype.ValueTypeName=`number`;var Wi=class extends Ii{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Gi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Wi(this.times,this.values,this.getValueSize(),e)}};Gi.prototype.ValueTypeName=`quaternion`,Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Bi{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName=`string`,Ki.prototype.ValueBufferType=Array,Ki.prototype.DefaultInterpolation=xe,Ki.prototype.InterpolantFactoryMethodLinear=void 0,Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Bi{constructor(e,t,n,r){super(e,t,n,r)}};qi.prototype.ValueTypeName=`vector`;var Ji=class extends zn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new ir(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yi=class extends Ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ir(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xi=new fn,Zi=new q,Qi=new q,$i=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zi.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zi),Qi.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qi),t.updateMatrixWorld(),Xi.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xi,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xi)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ea=class extends qr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ta=class extends $i{constructor(){super(new ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends Ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new ta}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ra=class extends Zr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ia=`\\[\\]\\.:\\/`,aa=RegExp(`[\\[\\]\\.:\\/]`,`g`),oa=`[^\\[\\]\\.:\\/]`,sa=`[^`+ia.replace(`\\.`,``)+`]`,ca=`((?:WC+[\\/:])*)`.replace(`WC`,oa),la=`(WCOD+)?`.replace(`WCOD`,sa),ua=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,oa),da=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,oa),fa=RegExp(`^`+ca+la+ua+da+`$`),pa=[`material`,`materials`,`bones`,`map`],ma=class{constructor(e,t,n){let r=n||ha.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ha=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(aa,``)}static parseTrackName(e){let t=fa.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);pa.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ha.Composite=ma,ha.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ha.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ha.prototype.GetterByBindingType=[ha.prototype._getValue_direct,ha.prototype._getValue_array,ha.prototype._getValue_arrayElement,ha.prototype._getValue_toArray],ha.prototype.SetterByBindingTypeAndVersioning=[[ha.prototype._setValue_direct,ha.prototype._setValue_direct_setNeedsUpdate,ha.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ha.prototype._setValue_array,ha.prototype._setValue_array_setNeedsUpdate,ha.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ha.prototype._setValue_arrayElement,ha.prototype._setValue_arrayElement_setNeedsUpdate,ha.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ha.prototype._setValue_fromArray,ha.prototype._setValue_fromArray_setNeedsUpdate,ha.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ga=new fn,_a=class{constructor(e,t,n=0,r=1/0){this.ray=new dn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ga.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ga),this}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort(va),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ya(e[r],this,n,t);return n.sort(va),n}};function va(e,t){return e.distance-t.distance}function ya(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ya(r[e],t,n,!0)}}var ba=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=G(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(G(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},xa=class extends Ie{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e===void 0?console.warn(`THREE.Controls: connect() now requires an element.`):(this.domElement!==null&&this.disconnect(),this.domElement=e)}disconnect(){}dispose(){}update(){}};function Sa(e,t,n,r){let i=Ca(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case L:case z:return Math.max(e,16)*Math.max(t,8)/4;case I:case R:return Math.max(e,8)*Math.max(t,8)/2;case ne:case B:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case oe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case se:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ce:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case le:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case V:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ue:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case de:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case H:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case pe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case U:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case W:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case me:case he:case ge:return Math.ceil(e/4)*Math.ceil(t/4)*16;case _e:case ve:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ye:case be:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ca(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`180`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`180`);function wa(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ta(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new ir(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ir(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ir(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new ir(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},Ea={basic:{uniforms:Br([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Br([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new ir(0)}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Br([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new ir(0)},specular:{value:new ir(1118481)},shininess:{value:30}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Br([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new ir(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Br([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new ir(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Br([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Br([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Br([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Br([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Br([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Br([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new J},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new J}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distanceRGBA:{uniforms:Br([X.common,X.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distanceRGBA_vert,fragmentShader:Y.distanceRGBA_frag},shadow:{uniforms:Br([X.lights,X.fog,{color:{value:new ir(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Ea.physical={uniforms:Br([Ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new J},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new J},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new J},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new J},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new J},sheen:{value:0},sheenColor:{value:new ir(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new J},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new J},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new J},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new J},attenuationDistance:{value:0},attenuationColor:{value:new ir(0)},specularColor:{value:new ir(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new J},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new J},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new J}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Da={r:0,b:0,g:0},Oa=new Sn,ka=new fn;function Aa(e,t,n,r,i,a,o){let s=new ir(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Fr(new Rr(1,1,1),new Kr({name:`BackgroundCubeMaterial`,uniforms:zr(Ea.backgroundCube.uniforms),vertexShader:Ea.backgroundCube.vertexShader,fragmentShader:Ea.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Oa.copy(n.backgroundRotation),Oa.x*=-1,Oa.y*=-1,Oa.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Oa.y*=-1,Oa.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ka.makeRotationFromEuler(Oa)),u.material.toneMapped=St.getTransfer(r.colorSpace)!==Me,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Fr(new Oi(2,2),new Kr({name:`BackgroundMaterial`,uniforms:zr(Ea.background.uniforms),vertexShader:Ea.background.vertexShader,fragmentShader:Ea.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=St.getTransfer(r.colorSpace)!==Me,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Da,Hr(e)),r.buffers.color.setClear(Da.r,Da.g,Da.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function ja(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ma(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Na(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Pa(e){let t=this,n=null,r=0,i=!1,a=!1,o=new bi,s=new J,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Fa(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ni(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ia=4,La=[.125,.215,.35,.446,.526,.582],Ra=20,za=new ea,Ba=new ir,Va=null,Ha=0,Ua=0,Wa=!1,Ga=(1+Math.sqrt(5))/2,Ka=1/Ga,qa=[new q(-Ga,Ka,0),new q(Ga,Ka,0),new q(-Ka,0,Ga),new q(Ka,0,Ga),new q(0,Ga,-Ka),new q(0,Ga,Ka),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],Ja=new q,Ya=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ja}=i;Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=to(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Va,Ha,Ua),this._renderer.xr.enabled=Wa,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Va=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ae,depthBuffer:!1},r=Za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xa(r)),this._blurMaterial=$a(r,e,t)}return r}_compileMaterial(e){let t=new Fr(this._lodPlanes[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,r,i){let a=new Zr(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ba),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));let d=new cr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new Fr(new Rr,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ba),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Qa(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=to()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Fr(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Qa(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=qa[(r-t-1)%qa.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Fr(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ra;m>Ra&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ra}`);let h=[],g=0;for(let e=0;e<Ra;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Qa(t,3*v*(r>_-Ia?r-_+Ia:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,za)}};function Xa(e){let t=[],n=[],r=[],i=e,a=e-Ia+1+La.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ia?s=La[o-e+Ia-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Cr;h.setAttribute(`position`,new fr(f,3)),h.setAttribute(`uv`,new fr(p,2)),h.setAttribute(`faceIndex`,new fr(m,1)),t.push(h),i>Ia&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Za(e,t,n){let r=new Ft(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Qa(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function $a(e,t,n){let r=new Float32Array(Ra),i=new q(0,1,0);return new Kr({name:`SphericalGaussianBlur`,defines:{n:Ra,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function eo(){return new Kr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function to(){return new Kr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ro(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Ya(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Ya(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function io(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&_t(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function ao(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(pt(n)?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function oo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function so(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function co(e,t,n){let r=new WeakMap,i=new Nt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),v=new It(g,m,h,u);v.type=_,v.needsUpdate=!0;let y=p*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*y;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:v,size:new K(m,h)},r.set(o,d);function f(){v.dispose(),r.delete(o),o.removeEventListener(`dispose`,f)}o.addEventListener(`dispose`,f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function lo(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var uo=new Mt,fo=new Ei(1,1),po=new It,mo=new Lt,ho=new ti,go=[],_o=[],vo=new Float32Array(16),yo=new Float32Array(9),bo=new Float32Array(4);function xo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=go[i];if(a===void 0&&(a=new Float32Array(i),go[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function So(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Co(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wo(e,t){let n=_o[t];n===void 0&&(n=new Int32Array(t),_o[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function To(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Eo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(So(n,t))return;e.uniform2fv(this.addr,t),Co(n,t)}}function Do(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(So(n,t))return;e.uniform3fv(this.addr,t),Co(n,t)}}function Oo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(So(n,t))return;e.uniform4fv(this.addr,t),Co(n,t)}}function ko(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(So(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Co(n,t)}else{if(So(n,r))return;bo.set(r),e.uniformMatrix2fv(this.addr,!1,bo),Co(n,r)}}function Ao(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(So(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Co(n,t)}else{if(So(n,r))return;yo.set(r),e.uniformMatrix3fv(this.addr,!1,yo),Co(n,r)}}function jo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(So(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Co(n,t)}else{if(So(n,r))return;vo.set(r),e.uniformMatrix4fv(this.addr,!1,vo),Co(n,r)}}function Mo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function No(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(So(n,t))return;e.uniform2iv(this.addr,t),Co(n,t)}}function Po(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(So(n,t))return;e.uniform3iv(this.addr,t),Co(n,t)}}function Fo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(So(n,t))return;e.uniform4iv(this.addr,t),Co(n,t)}}function Io(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(So(n,t))return;e.uniform2uiv(this.addr,t),Co(n,t)}}function Ro(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(So(n,t))return;e.uniform3uiv(this.addr,t),Co(n,t)}}function zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(So(n,t))return;e.uniform4uiv(this.addr,t),Co(n,t)}}function Bo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(fo.compareFunction=515,a=fo):a=uo,n.setTexture2D(t||a,i)}function Vo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||mo,i)}function Ho(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ho,i)}function Uo(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||po,i)}function Wo(e){switch(e){case 5126:return To;case 35664:return Eo;case 35665:return Do;case 35666:return Oo;case 35674:return ko;case 35675:return Ao;case 35676:return jo;case 5124:case 35670:return Mo;case 35667:case 35671:return No;case 35668:case 35672:return Po;case 35669:case 35673:return Fo;case 5125:return Io;case 36294:return Lo;case 36295:return Ro;case 36296:return zo;case 35678:case 36198:case 36298:case 36306:case 35682:return Bo;case 35679:case 36299:case 36307:return Vo;case 35680:case 36300:case 36308:case 36293:return Ho;case 36289:case 36303:case 36311:case 36292:return Uo}}function Go(e,t){e.uniform1fv(this.addr,t)}function Ko(e,t){let n=xo(t,this.size,2);e.uniform2fv(this.addr,n)}function qo(e,t){let n=xo(t,this.size,3);e.uniform3fv(this.addr,n)}function Jo(e,t){let n=xo(t,this.size,4);e.uniform4fv(this.addr,n)}function Yo(e,t){let n=xo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Xo(e,t){let n=xo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Zo(e,t){let n=xo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Qo(e,t){e.uniform1iv(this.addr,t)}function $o(e,t){e.uniform2iv(this.addr,t)}function es(e,t){e.uniform3iv(this.addr,t)}function ts(e,t){e.uniform4iv(this.addr,t)}function ns(e,t){e.uniform1uiv(this.addr,t)}function rs(e,t){e.uniform2uiv(this.addr,t)}function is(e,t){e.uniform3uiv(this.addr,t)}function as(e,t){e.uniform4uiv(this.addr,t)}function os(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||uo,a[e])}function ss(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||mo,a[e])}function cs(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ho,a[e])}function ls(e,t,n){let r=this.cache,i=t.length,a=wo(n,i);So(r,a)||(e.uniform1iv(this.addr,a),Co(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||po,a[e])}function us(e){switch(e){case 5126:return Go;case 35664:return Ko;case 35665:return qo;case 35666:return Jo;case 35674:return Yo;case 35675:return Xo;case 35676:return Zo;case 5124:case 35670:return Qo;case 35667:case 35671:return $o;case 35668:case 35672:return es;case 35669:case 35673:return ts;case 5125:return ns;case 36294:return rs;case 36295:return is;case 36296:return as;case 35678:case 36198:case 36298:case 36306:case 35682:return os;case 35679:case 36299:case 36307:return ss;case 35680:case 36300:case 36308:case 36293:return cs;case 36289:case 36303:case 36311:case 36292:return ls}}var ds=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wo(t.type)}},fs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=us(t.type)}},ps=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ms=/(\w+)(\])?(\[|\.)?/g;function hs(e,t){e.seq.push(t),e.map[t.id]=t}function gs(e,t,n){let r=e.name,i=r.length;for(ms.lastIndex=0;;){let a=ms.exec(r),o=ms.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){hs(n,l===void 0?new ds(s,e,t):new fs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ps(s),hs(n,e)),n=e}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);gs(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function vs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var ys=37297,bs=0;function xs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ss=new J;function Cs(e){St._getMatrix(Ss,St.workingColorSpace,e);let t=`mat3( ${Ss.elements.map(e=>e.toFixed(4))} )`;switch(St.getTransfer(e)){case je:return[t,`LinearTransferOETF`];case Me:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ws(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+xs(e.getShaderSource(t),r)}return i}function Ts(e,t){let n=Cs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Es(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ds=new q;function Os(){return St.getLuminanceCoefficients(Ds),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ds.x.toFixed(4)}, ${Ds.y.toFixed(4)}, ${Ds.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ks(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ms).join(`
`)}function As(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function js(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ms(e){return e!==``}function Ns(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ps(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fs=/^[ \t]*#include +<([\w\d./]+)>/gm;function Is(e){return e.replace(Fs,Rs)}var Ls=new Map;function Rs(e,t){let n=Y[t];if(n===void 0){let e=Ls.get(t);if(e!==void 0)n=Y[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Is(n)}var zs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bs(e){return e.replace(zs,Vs)}function Vs(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Hs(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Us(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Ws(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Gs(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Ks(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function qs(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Js(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Us(n),l=Ws(n),u=Gs(n),d=Ks(n),f=qs(n),p=ks(n),m=As(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ms).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ms).join(`
`),_.length>0&&(_+=`
`)):(g=[Hs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ms).join(`
`),_=[Hs(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Es(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Ts(`linearToOutputTexel`,n.outputColorSpace),Os(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ms).join(`
`)),o=Is(o),o=Ns(o,n),o=Ps(o,n),s=Is(s),s=Ns(s,n),s=Ps(s,n),o=Bs(o),s=Bs(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=vs(i,i.VERTEX_SHADER,y),S=vs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ws(i,x,`vertex`),n=ws(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new _s(i,h),T=js(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,ys)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ys=0,Xs=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zs(e),t.set(e,n)),n}},Zs=class{constructor(e){this.id=Ys++,this.code=e,this.usedTimes=0}};function Qs(e,t,n,r,i,a,o){let s=new Cn,c=new Xs,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ea[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=_.isInstancedMesh===!0,N=_.isBatchedMesh===!0,P=!!a.map,F=!!a.matcap,te=!!x,I=!!a.aoMap,L=!!a.lightMap,R=!!a.bumpMap,z=!!a.normalMap,ne=!!a.displacementMap,B=!!a.emissiveMap,re=!!a.metalnessMap,ie=!!a.roughnessMap,ae=a.anisotropy>0,oe=a.clearcoat>0,se=a.dispersion>0,ce=a.iridescence>0,le=a.sheen>0,V=a.transmission>0,ue=ae&&!!a.anisotropyMap,de=oe&&!!a.clearcoatMap,fe=oe&&!!a.clearcoatNormalMap,H=oe&&!!a.clearcoatRoughnessMap,pe=ce&&!!a.iridescenceMap,U=ce&&!!a.iridescenceThicknessMap,W=le&&!!a.sheenColorMap,me=le&&!!a.sheenRoughnessMap,he=!!a.specularMap,ge=!!a.specularColorMap,_e=!!a.specularIntensityMap,ve=V&&!!a.transmissionMap,ye=V&&!!a.thicknessMap,be=!!a.gradientMap,xe=!!a.alphaMap,Se=a.alphaTest>0,Ce=!!a.alphaHash,we=!!a.extensions,Te=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=e.toneMapping);let Ee={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:N,batchingColor:N&&_._colorsTexture!==null,instancing:M,instancingColor:M&&_.instanceColor!==null,instancingMorph:M&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ae,alphaToCoverage:!!a.alphaToCoverage,map:P,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:I,lightMap:L,bumpMap:R,normalMap:z,displacementMap:f&&ne,emissiveMap:B,normalMapObjectSpace:z&&a.normalMapType===1,normalMapTangentSpace:z&&a.normalMapType===0,metalnessMap:re,roughnessMap:ie,anisotropy:ae,anisotropyMap:ue,clearcoat:oe,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:H,dispersion:se,iridescence:ce,iridescenceMap:pe,iridescenceThicknessMap:U,sheen:le,sheenColorMap:W,sheenRoughnessMap:me,specularMap:he,specularColorMap:ge,specularIntensityMap:_e,transmission:V,transmissionMap:ve,thicknessMap:ye,gradientMap:be,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:Ce,combine:a.combine,mapUv:P&&h(a.map.channel),aoMapUv:I&&h(a.aoMap.channel),lightMapUv:L&&h(a.lightMap.channel),bumpMapUv:R&&h(a.bumpMap.channel),normalMapUv:z&&h(a.normalMap.channel),displacementMapUv:ne&&h(a.displacementMap.channel),emissiveMapUv:B&&h(a.emissiveMap.channel),metalnessMapUv:re&&h(a.metalnessMap.channel),roughnessMapUv:ie&&h(a.roughnessMap.channel),anisotropyMapUv:ue&&h(a.anisotropyMap.channel),clearcoatMapUv:de&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:fe&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:U&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:W&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:me&&h(a.sheenRoughnessMap.channel),specularMapUv:he&&h(a.specularMap.channel),specularColorMapUv:ge&&h(a.specularColorMap.channel),specularIntensityMapUv:_e&&h(a.specularIntensityMap.channel),transmissionMapUv:ve&&h(a.transmissionMap.channel),thicknessMapUv:ye&&h(a.thicknessMap.channel),alphaMapUv:xe&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(z||ae),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(P||xe),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&St.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:B&&a.emissiveMap.isVideoTexture===!0&&St.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:we&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(we&&a.extensions.multiDraw===!0||N)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ea[t];n=Ur.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Js(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function $s(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ec(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function tc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||ec),r.length>1&&r.sort(t||tc),i.length>1&&i.sort(t||tc)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function rc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new nc,e.set(t,[i])):n>=r.length?(i=new nc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ic(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new q,color:new ir};break;case`SpotLight`:n={position:new q,direction:new q,color:new ir,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new ir,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new ir,groundColor:new ir};break;case`RectAreaLight`:n={color:new ir,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function ac(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var oc=0;function sc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function cc(e){let t=new ic,n=ac(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new fn,o=new fn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(sc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=oc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function lc(e){let t=new cc(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function uc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new lc(e),t.set(n,[a])):r>=i.length?(a=new lc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var dc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pc(e,t,n){let r=new wi,i=new K,o=new K,s=new Nt,c=new Mi({depthPacking:Oe}),l=new Ni,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:dc,fragmentShader:fc}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Cr;h.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Fr(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/g.y),i.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:a,magFilter:a};f.map!==null&&f.map.dispose(),f.map=new Ft(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ft(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var mc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function hc(e,t){function n(){let t=!1,n=new Nt,r=null,i=new Nt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?B(e.DEPTH_TEST):re(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=mc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?B(e.STENCIL_TEST):re(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new ir(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ee=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),ee=M>=1);let P=null,F={},te=e.getParameter(e.SCISSOR_BOX),I=e.getParameter(e.VIEWPORT),L=new Nt().fromArray(te),R=new Nt().fromArray(I);function z(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ne={};ne[e.TEXTURE_2D]=z(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),B(e.DEPTH_TEST),o.setFunc(3),ue(!1),de(1),B(e.CULL_FACE),le(0);function B(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function re(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return m!==t&&(e.useProgram(t),m=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let ce={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function le(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(re(e.BLEND),h=!1);else if(h===!1&&(B(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error(`THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:console.error(`THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(se[n],se[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function V(t,n){t.side===2?re(e.CULL_FACE):B(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ue(r),t.blending===1&&t.transparent===!1?le(0):le(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),H(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?B(e.SAMPLE_ALPHA_TO_COVERAGE):re(e.SAMPLE_ALPHA_TO_COVERAGE)}function ue(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function de(t){t===0?re(e.CULL_FACE):(B(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function fe(t){t!==O&&(ee&&e.lineWidth(t),O=t)}function H(t,n,r){t?(B(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):re(e.POLYGON_OFFSET_FILL)}function pe(t){t?B(e.SCISSOR_TEST):re(e.SCISSOR_TEST)}function U(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function W(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ne[t]),i.type=t,i.texture=n)}function me(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(t){L.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),L.copy(t))}function Ee(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function De(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Oe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},P=null,F={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new ir(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,L.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:B,disable:re,bindFramebuffer:ie,drawBuffers:ae,useProgram:oe,setBlending:le,setMaterial:V,setFlipSided:ue,setCullFace:de,setLineWidth:fe,setPolygonOffset:H,setScissorTest:pe,activeTexture:U,bindTexture:W,unbindTexture:me,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Ce,texImage3D:we,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:xe,texStorage3D:Se,texSubImage2D:_e,texSubImage3D:ve,compressedTexSubImage2D:ye,compressedTexSubImage3D:be,scissor:Te,viewport:Ee,reset:ke}}function gc(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new K,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):mt(`canvas`)}function w(e,t,n){let r=1,i=Ce(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?je:St.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),N(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),F(t)}function N(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function P(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function F(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let te=0;function I(){te=0}function L(){let e=te;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),te+=1,e}function R(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function z(t,n){let r=f.get(t);if(t.isVideoTexture&&xe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{ue(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ne(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?ue(r,t,n):d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function B(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?ue(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function re(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?de(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let ie={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ae={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ie[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ie[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ie[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ae[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ae[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=R(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&P(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function V(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=le(r.start,n.width,4),c=le(t.start,n.width,4);r.start<=i+1&&s===c&&le(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=e.getParameter(e.UNPACK_ROW_LENGTH),c=e.getParameter(e.UNPACK_SKIP_PIXELS),l=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,s),e.pixelStorei(e.UNPACK_SKIP_PIXELS,c),e.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function ue(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=ce(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=St.getPrimaries(St.workingColorSpace),c=n.colorSpace===``?null:St.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=Se(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=k(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);se(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=j(n,u);if(n.isDepthTexture)g=A(n.format===O,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&V(n,u,f,h)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023){if(f!==null){if(y){if(x){if(n.layerUpdates.size>0){let r=Sa(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(n.isDataArrayTexture){if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(n.layerUpdates.size>0){let t=Sa(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b){if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}}else if(v.length>0){if(y&&b){let t=Ce(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=Ce(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function de(t,n,r){if(n.image.length!==6)return;let i=ce(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=St.getPrimaries(St.workingColorSpace),s=n.colorSpace===``?null:St.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Se(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(n,h);se(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ce(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function fe(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),be(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,ye(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function H(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=ye(n);be(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.colorSpace),l=ye(n);r&&be(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):be(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pe(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let r=f.get(n.depthTexture);r.__renderTarget=n,r.__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),z(n.depthTexture,0);let i=r.__webglTexture,a=ye(n);if(n.depthTexture.format===1026)be(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else if(n.depthTexture.format===1027)be(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0);else throw Error(`Unknown depthTexture format`)}function U(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?pe(n.__webglFramebuffer[0],t):pe(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),H(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),H(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function W(t,n,r){let i=f.get(t);n!==void 0&&fe(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&U(t)}function me(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,M);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&be(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=ye(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),H(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),se(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)fe(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else fe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),se(s,i),fe(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),T(i)&&E(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),se(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)fe(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else fe(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&U(t)}function he(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=D(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let ge=[],_e=[];function ve(t){if(t.samples>0){if(be(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(ge.length=0,_e.length=0,ge.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(ge.push(o),_e.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_e)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ge))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ye(e){return Math.min(p.maxSamples,e.samples)}function be(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function xe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Se(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(St.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Ce(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=ne,this.setTexture3D=B,this.setTextureCube=re,this.rebindTextures=W,this.setupRenderTarget=me,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=be}function _c(e,t){function n(n,r=``){let i,a=St.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var vc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Di(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kr({vertexShader:vc,fragmentShader:yc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fr(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xc=class extends Ie{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new bc,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new K,k=null,A=new Zr;A.viewport=new Nt;let j=new Zr;j.viewport=new Nt;let ee=[A,j],M=new ra,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new ai,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new ai,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new ai,C[e]=t),t.getHandSpace()};function F(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function te(){r.removeEventListener(`select`,F),r.removeEventListener(`selectstart`,F),r.removeEventListener(`selectend`,F),r.removeEventListener(`squeeze`,F),r.removeEventListener(`squeezestart`,F),r.removeEventListener(`squeezeend`,F),r.removeEventListener(`end`,te),r.removeEventListener(`inputsourceschange`,I);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}N=null,P=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,F),r.addEventListener(`selectstart`,F),r.addEventListener(`selectend`,F),r.addEventListener(`squeeze`,F),r.addEventListener(`squeezestart`,F),r.addEventListener(`squeezeend`,F),r.addEventListener(`end`,te),r.addEventListener(`inputsourceschange`,I),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ft(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new Ei(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ft(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let L=new q,R=new q;function z(e,t,n){L.setFromMatrixPosition(t.matrixWorld),R.setFromMatrixPosition(n.matrixWorld);let r=L.distanceTo(R),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ne(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&3,j.layers.mask=M.layers.mask&5;let i=e.parent,a=M.cameras;ne(M,i);for(let e=0;e<a.length;e++)ne(a[e],i);a.length===2?z(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),B(e,M,i)};function B(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Be*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let re=null;function ie(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new Zr,o.layers.enable(n),o.viewport=new Nt,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Di,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}re&&re(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ae=new wa;ae.setAnimationLoop(ie),this.setAnimationLoop=function(e){re=e},this.dispose=function(){}}},Sc=new Sn,Cc=new fn;function wc(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Hr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Sc.copy(o),Sc.x*=-1,Sc.y*=-1,Sc.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Sc.y*=-1,Sc.z*=-1),e.envMapRotation.value.setFromMatrix4(Cc.makeRotationFromEuler(Sc)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Tc(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ec=class{constructor(e={}){let{canvas:t=ht(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),g=new Int32Array(4),_=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1;this._outputColorSpace=ke;let w=0,T=0,E=null,D=-1,O=null,k=new Nt,A=new Nt,j=null,ee=new ir(0),M=0,N=t.width,P=t.height,F=1,te=null,I=null,L=new Nt(0,0,N,P),R=new Nt(0,0,N,P),z=!1,ne=new wi,B=!1,re=!1,ie=new fn,ae=new q,oe=new Nt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function le(){return E===null?F:1}let V=n;function ue(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r180`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),V===null){let t=`webgl2`;if(V=ue(t,e),V===null)throw ue(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let de,fe,H,pe,U,W,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,je,Me,Ne;function Pe(){de=new io(V),de.init(),je=new _c(V,de),fe=new Na(V,de,e,je),H=new hc(V,de),fe.reversedDepthBuffer&&p&&H.buffers.depth.setReversed(!0),pe=new so(V),U=new $s,W=new gc(V,de,H,U,fe,je,pe),me=new Fa(S),he=new ro(S),ge=new Ta(V),Me=new ja(V,ge),_e=new ao(V,ge,pe,Me),ve=new lo(V,_e,ge,pe),Ee=new co(V,fe,W),Ce=new Pa(U),ye=new Qs(S,me,he,de,fe,Me,Ce),be=new wc(S,U),xe=new rc,Se=new uc(de),Te=new Aa(S,me,he,H,ve,m,s),we=new pc(S,ve,fe),Ne=new Tc(V,pe,fe,H),De=new Ma(V,de,pe),Oe=new oo(V,de,pe),pe.programs=ye.programs,S.capabilities=fe,S.extensions=de,S.properties=U,S.renderLists=xe,S.shadowMap=we,S.state=H,S.info=pe}Pe();let Ie=new xc(S,V);this.xr=Ie,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=de.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=de.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(N,P,!1))},this.getSize=function(e){return e.set(N,P)},this.setSize=function(e,n,r=!0){Ie.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(N=e,P=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(N*F,P*F).floor()},this.setDrawingBufferSize=function(e,n,r){N=e,P=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(L)},this.setViewport=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),H.viewport(k.copy(L).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(R)},this.setScissor=function(e,t,n,r){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,r),H.scissor(A.copy(R).multiplyScalar(F).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(e){H.setScissorTest(z=e)},this.setOpaqueSort=function(e){te=e},this.setTransparentSort=function(e){I=e},this.getClearColor=function(e){return e.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Te.getClearColor(),r=Te.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,V.clearBufferuiv(V.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,V.clearBufferiv(V.COLOR,0,g))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Te.dispose(),xe.dispose(),Se.dispose(),U.dispose(),me.dispose(),he.dispose(),ve.dispose(),Me.dispose(),Ne.dispose(),ye.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ge),Ie.removeEventListener(`sessionend`,Ke),qe.stop()};function Le(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Re(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=pe.autoReset,t=we.enabled,n=we.autoUpdate,r=we.needsUpdate,i=we.type;Pe(),pe.autoReset=e,we.enabled=t,we.autoUpdate=n,we.needsUpdate=r,we.type=i}function ze(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){G(e),U.remove(e)}function G(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){ye.releaseProgram(e)}),e.isShaderMaterial&&ye.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=nt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=_e.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Me.setup(i,r,s,n,c);let h,g=De;if(c!==null&&(h=ge.get(c),g=Oe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*le()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*le()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)_t(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(de.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ge.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function He(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,$e(e,t,n),e.side=0,e.needsUpdate=!0,$e(e,t,n),e.side=2):$e(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=Se.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];He(a,n,e),r.add(a)}else He(t,n,e),r.add(t)}}),y=x.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){U.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}de.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ue=null;function We(e){Ue&&Ue(e)}function Ge(){qe.stop()}function Ke(){qe.start()}let qe=new wa;qe.setAnimationLoop(We),typeof self<`u`&&qe.setContext(self),this.setAnimationLoop=function(e){Ue=e,Ie.setAnimationLoop(e),e===null?qe.stop():qe.start()},Ie.addEventListener(`sessionstart`,Ge),Ie.addEventListener(`sessionend`,Ke),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=Se.get(e,x.length),y.init(t),x.push(y),ie.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ne.setFromProjectionMatrix(ie,Fe,t.reversedDepth),re=this.localClippingEnabled,B=Ce.init(this.clippingPlanes,re),_=xe.get(e,b.length),_.init(),b.push(_),Ie.enabled===!0&&Ie.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&Je(e,t,-1/0,S.sortObjects)}Je(e,t,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(te,I),ce=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ce&&Te.addToRenderList(_,e),this.info.render.frame++,B===!0&&Ce.beginShadows();let n=y.state.shadowsArray;we.render(n,e,t),B===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=_.opaque,i=_.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];Xe(r,i,e,a)}ce&&Te.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Ye(_,e,r,r.viewport)}}else i.length>0&&Xe(r,i,e,t),ce&&Te.render(e),Ye(_,e,t);E!==null&&T===0&&(W.updateMultisampleRenderTarget(E),W.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Me.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],B===!0&&Ce.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),_=b.length>0?b[b.length-1]:null};function Je(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ne.intersectsSprite(e)){r&&oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie);let t=ve.update(e),i=e.material;i.visible&&_.push(e,t,i,n,oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ne.intersectsObject(e))){let t=ve.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),oe.copy(e.boundingSphere.center)),oe.applyMatrix4(e.matrixWorld).applyMatrix4(ie)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,oe.z,o)}}else i.visible&&_.push(e,t,i,n,oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Je(i[e],t,n,r)}function Ye(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),B===!0&&Ce.setGlobalState(S.clippingPlanes,n),r&&H.viewport(k.copy(r)),i.length>0&&Ze(i,t,n),a.length>0&&Ze(a,t,n),o.length>0&&Ze(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Xe(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Ft(1,1,{generateMipmaps:!0,type:de.has(`EXT_color_buffer_half_float`)||de.has(`EXT_color_buffer_float`)?v:d,minFilter:u,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z*S.transmissionResolutionScale,o.w*S.transmissionResolutionScale);let s=S.getRenderTarget(),c=S.getActiveCubeFace(),l=S.getActiveMipmapLevel();S.setRenderTarget(a),S.getClearColor(ee),M=S.getClearAlpha(),M<1&&S.setClearColor(16777215,.5),S.clear(),ce&&Te.render(n);let f=S.toneMapping;S.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),B===!0&&Ce.setGlobalState(S.clippingPlanes,r),Ze(e,n,r),W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a),de.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Qe(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a))}S.setRenderTarget(s,c,l),S.setClearColor(ee,M),p!==void 0&&(r.viewport=p),S.toneMapping=f}function Ze(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Qe(o,t,n,s,l,c)}}function Qe(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function $e(e,t,n){t.isScene!==!0&&(t=se);let r=U.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=ye.getParameters(e,i.state,a,t,n),c=ye.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?he:me).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return tt(e,s),u}else s.uniforms=ye.getUniforms(e),e.onBeforeCompile(s,S),u=ye.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ce.uniform),tt(e,s),r.needsLights=it(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=_s.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function tt(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function nt(e,t,n,r,i){t.isScene!==!0&&(t=se),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ae,c=(r.isMeshStandardMaterial?he:me).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=U.get(r),v=y.state.lights;if(B===!0&&(re===!0||e!==O)){let t=e===O&&r.id===D;Ce.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ce.numPlanes||_.numIntersection!==Ce.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=$e(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(H.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(V,`projectionMatrix`,e.projectionMatrix),k.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(V,ae.setFromMatrixPosition(e.matrixWorld)),fe.logarithmicDepthBuffer&&k.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(V,i,`bindMatrix`),k.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(V,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(k.setOptional(V,i,`batchingTexture`),k.setValue(V,`batchingTexture`,i._matricesTexture,W),k.setOptional(V,i,`batchingIdTexture`),k.setValue(V,`batchingIdTexture`,i._indirectTexture,W),k.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(V,`batchingColorTexture`,i._colorsTexture,W));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Ee.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(V,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(V,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&rt(A,T),a&&r.fog===!0&&be.refreshFogUniforms(A,a),be.refreshMaterialUniforms(A,r,F,P,y.state.transmissionRenderTarget[e.id]),_s.upload(V,et(_),A,W)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(_s.upload(V,et(_),A,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(V,`center`,i.center),k.setValue(V,`modelViewMatrix`,i.modelViewMatrix),k.setValue(V,`normalMatrix`,i.normalMatrix),k.setValue(V,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ne.update(n,x),Ne.bind(n,x)}}return x}function rt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function it(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let at=V.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=U.get(e);if(s.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(V.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(s.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(L).multiplyScalar(F).floor(),A.copy(R).multiplyScalar(F).floor(),j=z;if(n!==0&&(i=at),H.bindFramebuffer(V.FRAMEBUFFER,i)&&r&&H.drawBuffers(e,i),H.viewport(k),H.scissor(A),H.setScissorTest(j),a){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!fe.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!fe.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s),V.readPixels(t,n,r,i,je.convert(c),je.convert(l),a))}finally{let e=E===null?null:U.get(E).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!fe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!fe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,d),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s),V.readPixels(t,n,r,i,je.convert(l),je.convert(u),0);let f=E===null?null:U.get(E).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,f);let p=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await vt(V,p,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,d),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.deleteBuffer(d),V.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()};let ot=V.createFramebuffer(),st=V.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(_t(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=je.convert(t.format),_=je.convert(t.type),v;t.isData3DTexture?(W.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(W.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(W.setTexture2D(t,0),v=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(V.UNPACK_ROW_LENGTH),b=V.getParameter(V.UNPACK_IMAGE_HEIGHT),x=V.getParameter(V.UNPACK_SKIP_PIXELS),S=V.getParameter(V.UNPACK_SKIP_ROWS),C=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,l),V.pixelStorei(V.UNPACK_SKIP_ROWS,u),V.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,o,s,f,p,o,s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,ot),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,st);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,o,s,f,p,o,s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(V.UNPACK_ROW_LENGTH,y),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(V.UNPACK_SKIP_PIXELS,x),V.pixelStorei(V.UNPACK_SKIP_ROWS,S),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,H.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Fe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}},Dc={type:`change`},Oc={type:`start`},kc={type:`end`},Ac=new dn,jc=new bi,Mc=Math.cos(70*ct.DEG2RAD),Nc=new q,Pc=2*Math.PI,Fc={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ic=1e-6,Lc=class extends xa{constructor(n,r=null){super(n,r),this.state=Fc.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new lt,this._lastTargetPosition=new q,this._quat=new lt().setFromUnitVectors(n.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ba,this._sphericalDelta=new ba,this._scale=1,this._panOffset=new q,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new q,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zc.bind(this),this._onPointerDown=Rc.bind(this),this._onPointerUp=Bc.bind(this),this._onContextMenu=qc.bind(this),this._onMouseWheel=Uc.bind(this),this._onKeyDown=Wc.bind(this),this._onTouchStart=Gc.bind(this),this._onTouchMove=Kc.bind(this),this._onMouseDown=Vc.bind(this),this._onMouseMove=Hc.bind(this),this._interceptControlDown=Jc.bind(this),this._interceptControlUp=Yc.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dc),this.update(),this.state=Fc.NONE}update(e=null){let t=this.object.position;Nc.copy(t).sub(this.target),Nc.applyQuaternion(this._quat),this._spherical.setFromVector3(Nc),this.autoRotate&&this.state===Fc.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Pc:n>Math.PI&&(n-=Pc),r<-Math.PI?r+=Pc:r>Math.PI&&(r-=Pc),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Nc.setFromSpherical(this._spherical),Nc.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nc),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Nc.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Nc.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<Mc?this.object.lookAt(this.target):(jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(jc,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Ic||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ic||this._lastTargetPosition.distanceToSquared(this.target)>Ic?(this.dispatchEvent(Dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Pc/60/60*this.autoRotateSpeed:Pc/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nc.setFromMatrixColumn(t,0),Nc.multiplyScalar(-e),this._panOffset.add(Nc)}_panUp(e,t){this.screenSpacePanning===!0?Nc.setFromMatrixColumn(t,1):(Nc.setFromMatrixColumn(t,0),Nc.crossVectors(this.object.up,Nc)),Nc.multiplyScalar(e),this._panOffset.add(Nc)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Nc.copy(r).sub(this.target);let i=Nc.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pc*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pc*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pc*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pc*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pc*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new K,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Rc(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener(`pointermove`,this._onPointerMove),this.domElement.addEventListener(`pointerup`,this._onPointerUp)),this._isTrackingPointer(e)||(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e)))}function zc(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Bc(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(kc),this.state=Fc.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Vc(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Fc.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Fc.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Fc.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Fc.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Fc.PAN}break;default:this.state=Fc.NONE}this.state!==Fc.NONE&&this.dispatchEvent(Oc)}function Hc(e){switch(this.state){case Fc.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Fc.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Fc.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Uc(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===Fc.NONE&&(e.preventDefault(),this.dispatchEvent(Oc),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(kc))}function Wc(e){this.enabled!==!1&&this._handleKeyDown(e)}function Gc(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Fc.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Fc.TOUCH_PAN;break;default:this.state=Fc.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Fc.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Fc.TOUCH_DOLLY_ROTATE;break;default:this.state=Fc.NONE}break;default:this.state=Fc.NONE}this.state!==Fc.NONE&&this.dispatchEvent(Oc)}function Kc(e){switch(this._trackPointer(e),this.state){case Fc.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Fc.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Fc.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Fc.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Fc.NONE}}function qc(e){this.enabled!==!1&&e.preventDefault()}function Jc(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Yc(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Z={cream:`#ececdb`,wood:`#c9a477`,woodDark:`#987754`,green:`#79917a`,leaf:`#63865c`,leafLight:`#8caa70`,ink:`#293635`,white:`#f8f9f5`,orange:`#d57645`,blue:`#708fa5`,floor:`#cfb18b`,skin:`#edc19d`},Xc=new Map,Zc,Qc=0,$c=new WeakSet,el=new Set,tl=e=>($c.add(e),el.add(e),e),nl=e=>$c.has(e);function rl(){Qc++;let e=!1;return()=>{if(e||(e=!0,--Qc))return;let t=[...el];el.clear(),Xc.clear(),Zc=void 0,il=19;let n=[];for(let e of t)try{e.dispose()}catch(e){n.push(e)}if(n.length)throw AggregateError(n,`Shared art cleanup failed`)}}var il=19;function al(){return il=il*1664525+1013904223>>>0,il/4294967296}function ol(e,t=`noise`){let n=document.createElement(`canvas`);n.width=n.height=32;let r=n.getContext(`2d`);r.fillStyle=e,r.fillRect(0,0,32,32);for(let e=0;e<110;e++)r.fillStyle=al()>.5?`#ffffff0a`:`#0000000b`,r.fillRect(Math.floor(al()*32),Math.floor(al()*32),t===`wood`?8:2,1+Math.floor(al()*2));let i=new Ti(n);return i.magFilter=i.minFilter=a,i.colorSpace=ke,i}function sl(e,t=`noise`){let n=`${e}:${t}`;return Xc.has(n)||Xc.set(n,tl(new ji({map:tl(ol(e,t)),roughness:.9}))),Xc.get(n)}function Q(e,t,n,r,i,a,o,s,c=`noise`){Zc??=tl(new Rr(1,1,1));let l=new Fr(Zc,s?.isMaterial?s:sl(s,c));return l.position.set(t,n,r),l.scale.set(i,a,o),l.castShadow=l.receiveShadow=!0,e.add(l),l}function $(e,t=0,n=0,r=0){let i=new ri;return i.position.set(t,n,r),e.add(i),i}function cl(e,t,n,r=!1){let i=document.createElement(`canvas`);i.width=e,i.height=t,n(i.getContext(`2d`));let o=new Ti(i);return o.colorSpace=ke,o.magFilter=o.minFilter=a,r?new cr({map:o}):new ji({map:o,roughness:1})}function ll(e,t,n,r,i,a,o){let s=new Fr(new Oi(i,a),o);return s.position.set(t,n,r),e.add(s),s}function ul(e){e.updateMatrixWorld(!0);let t=new Map;e.traverse(e=>{if(e.isMesh&&e.geometry===Zc){let n=e.material.uuid;t.has(n)||t.set(n,[]),t.get(n).push(e)}});let n=e.matrixWorld.clone().invert();for(let r of t.values()){let t=new gi(Zc,r[0].material,r.length);r.forEach((e,r)=>{t.setMatrixAt(r,new fn().multiplyMatrices(n,e.matrixWorld)),e.parent.remove(e)}),t.castShadow=t.receiveShadow=!0,t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere(),e.add(t)}}function dl(e,t){let n=$(e);n.name=`hair:${t.hairStyle}`;let r=(e,r,i,a,o,s)=>Q(n,e,r,i,a,o,s,t.hair);r(0,.49,0,.57,.13,.53);let i=()=>{r(-.19,.38,.264,.18,.18,.04),r(.04,.42,.264,.29,.1,.04)};switch(t.hairStyle){case`shoulder-bob`:r(-.15,.41,.268,.24,.15,.045),r(.16,.44,.268,.22,.09,.045),r(0,.15,-.25,.56,.54,.12);for(let e of[-1,1])r(e*.285,.17,-.045,.1,.54,.44),r(e*.26,-.08,-.045,.13,.12,.43);break;case`bob`:i(),r(-.27,.22,-.07,.09,.47,.43),r(.27,.22,-.07,.09,.47,.43),r(.32,.3,-.17,.17,.18,.2);break;case`spiky`:i(),r(-.15,.59,-.08,.21,.14,.3),r(.1,.56,-.04,.19,.1,.36);break;case`bun`:i(),r(0,.52,-.3,.3,.27,.24),Q(n,0,.45,-.43,.2,.08,.025,t.trim);break;case`asymmetric`:r(-.22,.2,-.05,.16,.48,.46),r(.26,.29,-.09,.11,.3,.43),r(-.13,.39,.27,.32,.2,.055),r(.1,.45,.27,.18,.08,.055),r(-.05,.19,-.27,.48,.45,.1);break;case`curly`:for(let[e,t,n,i]of[[-.22,.53,.04,.28],[.07,.6,.08,.31],[.27,.5,-.04,.26],[-.13,.57,-.25,.3],[.16,.56,-.23,.28],[-.27,.27,-.13,.19]])r(e,t,n,i,i*.8,i);r(-.16,.39,.27,.24,.16,.08);break;case`ponytail`:{r(0,.43,.26,.55,.09,.04);let e=$(n,0,.4,-.31);e.rotation.x=-.2,Q(e,0,-.19,-.08,.23,.55,.24,t.hair),Q(e,0,-.5,-.09,.17,.18,.2,t.hair),Q(n,0,.39,-.34,.27,.09,.1,t.shirt);break}case`undercut`:r(.05,.54,-.02,.46,.16,.45),r(.17,.42,.27,.23,.1,.05),Q(n,-.279,.31,-.05,.018,.15,.35,`#697079`);break;case`braid`:r(-.22,.39,.26,.18,.19,.05),r(.1,.44,.26,.33,.08,.05),r(.27,.19,-.01,.13,.41,.39);for(let e=0;e<4;e++)r(-.32+e%2*.035,.17-e*.13,.01,.16,.16,.18);Q(n,-.285,-.27,.01,.16,.06,.19,t.trim);break;case`locs`:for(let e=0;e<4;e++)r(-.21+e*.14,.55+e%2*.04,-.04,.12,.16,.48);r(0,.31,-.32,.26,.54,.23),r(.07,-.02,-.36,.18,.18,.19),Q(n,0,.36,-.45,.28,.08,.04,t.trim);break;case`pixie`:r(-.1,.56,.03,.41,.19,.46),r(-.2,.37,.27,.18,.2,.05),r(.02,.43,.27,.3,.09,.05),r(.27,.34,-.02,.08,.17,.42);break;case`sidepart`:r(-.13,.57,-.01,.34,.14,.5),r(.19,.51,0,.15,.08,.5),r(-.12,.4,.27,.33,.16,.05),r(-.26,.29,-.05,.08,.32,.42),Q(n,.08,.55,0,.025,.06,.49,`#7b8587`);break;case`shaggy`:r(-.22,.21,-.05,.13,.41,.44),r(.24,.23,-.05,.11,.35,.44),r(-.17,.35,.27,.15,.16,.06),r(.04,.39,.27,.21,.12,.06),r(0,.12,-.27,.51,.25,.11);break;default:i()}}function fl(e,t){let n=$(e);switch(n.name=`accessory:${t.accessory||`none`}`,t.accessory){case`hairclip`:Q(n,.275,.34,.2,.035,.07,.2,`#f4dca2`),Q(n,.292,.34,.21,.015,.025,.12,`#eaad66`);break;case`headphones`:Q(n,0,.7,-.02,.65,.08,.11,`#314655`);for(let e of[-1,1])Q(n,e*.33,.51,-.02,.06,.37,.1,`#314655`),Q(n,e*.35,.27,-.02,.14,.25,.26,`#314655`),Q(n,e*.425,.27,-.02,.018,.14,.15,`#b8c8aa`);break;case`cap`:{let e=$(n,0,.51,0);e.rotation.z=-.06,Q(e,0,.1,0,.63,.25,.56,`#344f65`),Q(e,0,-.005,.32,.65,.06,.28,`#344f65`),Q(e,0,.11,.287,.14,.13,.025,t.trim),Q(e,0,.245,0,.08,.05,.08,t.trim);break}case`beret`:{let e=$(n,-.025,.53,-.015);e.rotation.z=.13,Q(e,0,.02,0,.58,.09,.54,`#85677d`),Q(e,-.055,.1,-.01,.72,.15,.61,`#85677d`),Q(e,-.03,.21,-.02,.08,.09,.08,`#85677d`);break}case`bow`:Q(n,.31,.43,.03,.06,.09,.12,`#efdca5`),Q(n,.33,.48,-.06,.1,.16,.15,`#f4e7c5`),Q(n,.33,.38,.12,.1,.16,.15,`#f4e7c5`);break;case`beanie`:Q(n,0,.57,-.015,.64,.24,.59,`#d28b4e`),Q(n,0,.45,0,.67,.1,.62,`#e2aa69`),Q(n,0,.72,-.02,.5,.1,.48,`#d28b4e`),Q(n,.19,.45,.32,.1,.09,.02,`#f2dfb0`)}}function pl(e,t){let n=$(e);n.name=`outfit:${t.outfit}`;let r=(e,r,i,a,o,s,c=t.trim)=>Q(n,e,r,i,a,o,s,c);switch(t.outfit){case`dress`:r(0,.055,0,.55,.13,.34,t.shirt),r(0,.11,.177,.53,.035,.025,`#34333b`);break;case`utility`:for(let e of[-1,1])r(e*.18,.2,.18,.13,.17,.04,`#b66137`),r(e*.1,.51,.18,.12,.13,.04);r(0,.31,.18,.035,.42,.03),r(0,.36,-.17,.4,.07,.025);break;case`hoodie`:r(0,.45,-.2,.45,.32,.18,`#4a725f`),r(0,.18,.18,.35,.16,.05,`#507961`);for(let e of[-1,1])r(e*.1,.43,.19,.025,.17,.025);r(0,.08,-.17,.5,.07,.025);break;case`blazer`:r(0,.34,.17,.2,.41,.025);for(let e of[-1,1]){let t=r(e*.12,.43,.19,.09,.25,.04,`#8ea6bc`);t.rotation.z=e*.24}r(.16,.31,.2,.14,.15,.035,`#f3edda`),r(.16,.37,.225,.11,.025,.015,`#cf9a55`),r(.16,.28,.225,.08,.025,.015,`#718a93`),r(0,.5,-.17,.25,.05,.03,`#8ea6bc`);break;case`varsity`:r(0,.28,.18,.055,.42,.03),r(0,.07,.18,.52,.09,.03),r(-.15,.36,.19,.13,.15,.03),r(-.15,.36,.21,.05,.08,.015,t.shirt),r(0,.35,-.17,.3,.26,.025,`#f0e5c9`),r(0,.35,-.19,.13,.13,.02,t.shirt);break;case`apron`:r(0,.25,.19,.41,.48,.05,`#839664`);for(let e of[-1,1]){r(e*.15,.47,.19,.055,.18,.035,`#839664`);let t=r(e*.08,.35,-.18,.055,.42,.035,`#839664`);t.rotation.z=e*-.35}r(0,.15,.225,.26,.12,.03,`#a5b584`),r(-.08,.2,.25,.035,.06,.015,`#dba575`),r(.055,.13,.25,.07,.03,.015,`#a5c1c9`);break;case`plaid`:{let e=cl(32,32,e=>{e.fillStyle=t.shirt,e.fillRect(0,0,32,32),e.fillStyle=`#bdd0b3`;for(let t=4;t<32;t+=12)e.fillRect(t,0,3,32),e.fillRect(0,t,32,3);e.fillStyle=`#35585e`;for(let t=2;t<32;t+=12)e.fillRect(t,0,1,32),e.fillRect(0,t,32,1)});ll(n,0,.3,.177,.52,.49,e);let i=ll(n,0,.3,-.177,.52,.49,e);i.rotation.y=Math.PI,r(0,.3,.19,.045,.48,.03,`#d0c8a3`);break}case`overalls`:r(0,.21,.185,.4,.35,.04,t.pants),r(0,.19,-.18,.42,.3,.04,t.pants);for(let e of[-1,1])r(e*.16,.42,.19,.065,.29,.04,t.pants),r(e*.16,.42,-.18,.065,.29,.04,t.pants),r(e*.16,.39,.218,.04,.04,.02,`#c7984b`);r(0,.25,.22,.2,.13,.03,`#f4e8d1`);break;case`vest`:for(let e of[-1,1])r(e*.16,.28,.19,.2,.44,.05,`#78758f`);r(0,.29,-.18,.53,.48,.04,`#78758f`),r(0,.32,.19,.045,.36,.03,`#474e62`),r(-.16,.35,.225,.12,.1,.025,`#5d6079`),r(-.17,.42,.25,.025,.13,.02,`#e7b56d`);break;case`cardigan`:r(0,.29,.18,.17,.45,.025,`#f2e6c9`);for(let e of[-1,1])r(e*.18,.15,.19,.12,.12,.035,`#a98543`);r(0,.52,.02,.42,.12,.45,`#577c73`),r(-.13,.32,.23,.13,.38,.065,`#577c73`),r(-.13,.16,.267,.13,.045,.018,`#c8cfad`),r(.12,.39,-.23,.12,.24,.06,`#577c73`)}if(t.accessory===`scarf`){let e=$(n);e.name=`accessory:scarf`,Q(e,0,.54,.015,.48,.16,.42,t.trim),Q(e,-.115,.435,.235,.17,.16,.09,t.trim);let r=Q(e,-.12,.27,.225,.14,.34,.07,t.trim);r.rotation.z=-.08,Q(e,-.132,.105,.267,.14,.045,.02,`#eb5654`),Q(e,.12,.39,-.22,.12,.22,.06,t.trim)}}function ml(e,t){if(t.outfit!==`dress`)return;let n=$(e);n.name=`outfit:dress-skirt`,Q(n,0,-.115,0,.3,.34,.36,t.shirt),Q(n,0,-.265,.005,.32,.07,.39,t.shirt)}function hl(e,t,n){(t.outfit===`hoodie`||t.outfit===`cardigan`||t.outfit===`blazer`||t.outfit===`varsity`||t.outfit===`vest`)&&(Q(e,0,-.075,0,.18,.18,.215,t.outfit===`varsity`?t.trim:t.shirt),(t.outfit===`hoodie`||t.outfit===`varsity`)&&Q(e,0,-.16,0,.19,.05,.22,t.trim)),t.accessory===`watch`&&n===-1&&(Q(e,0,-.17,0,.19,.065,.22,`#3c4a45`),Q(e,-.107,-.17,.01,.04,.09,.13,`#cdbb85`))}var gl=(e,t,n)=>ct.damp(e,t,11,n);function _l(e,t){let n=t.skin||Z.skin,r=$(e);r.position.set(t.x,0,t.z);let i=$(r);i.scale.set(t.build||1,t.height||1,t.build||1);let o=$(i,0,.78,0);Q(o,0,0,0,.48,.18,.29,t.pants);let s=$(o);Q(s,0,.3,0,.53,.53,.31,t.shirt),Q(s,0,.54,.02,.21,.09,.23,n),t.outfit?pl(s,t):(Q(s,0,.065,.166,.52,.05,.025,t.trim),Q(s,0,.34,.17,.035,.32,.025,t.trim),Q(s,-.15,.36,.17,.12,.12,.025,t.trim));let c=$(s,0,.58,0);if(Q(c,0,.245,0,.55,.53,.49,t.hair),Q(c,0,.2,.05,.53,.43,.44,n),Q(c,-.29,.18,.025,.065,.14,.15,n),Q(c,.29,.18,.025,.065,.14,.15,n),dl(c,t),fl(c,t),t.outfit&&(Q(c,0,.2,.292,.045,.045,.035,`#${new ir(n).multiplyScalar(.92).getHexString()}`),t.glasses))for(let e of[-1,1])Q(c,e*.28,.265,.12,.025,.035,.29,`#46515a`);let l=document.createElement(`canvas`);l.width=l.height=32;let u=new Ti(l);u.colorSpace=ke,u.magFilter=u.minFilter=a,ll(c,0,.225,.276,.52,.43,new ji({map:u,transparent:!0,roughness:1}));function d(e){let r=$(s,e*.345,.49,0);Q(r,0,-.12,0,.19,.28,.24,t.outfit===`varsity`?t.trim:t.shirt);let i=$(r,0,-.27,0);return Q(i,0,-.105,0,.17,.24,.2,n),Q(i,0,-.24,.015,.19,.09,.22,n),hl(i,t,e),{shoulder:r,elbow:i}}function f(e){let r=t.outfit===`dress`?n:t.pants,i=$(o,e*.145,-.06,0);Q(i,0,-.15,0,.21,.33,.26,r),ml(i,t);let a=$(i,0,-.32,0);return Q(a,0,-.14,0,.2,.31,.24,r),Q(a,0,-.3,.055,.23,.13,.36,t.shoes||`#f0eedf`),Q(a,0,-.35,.055,.24,.04,.37,`#64716d`),{thigh:i,knee:a}}let p=d(-1),m=d(1),h=f(-1),g=f(1),_=new Fr(new ki(.41,.46,48),new cr({color:Z.orange,side:2,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.062,r.add(_);let v={root:r,body:i,hips:o,head:c,torso:s,left:p,right:m,legL:h,legR:g,ring:_,config:t,action:`idle`,expression:`happy`,path:[],arrival:null,walkLoop:!1,targetYaw:0,phase:t.phase||0,talkingUntil:0},y=``;function b(e){let n=(e+v.phase)%4.7>4.52,r=e<v.talkingUntil&&Math.sin(e*17)>-.1,i=v.expression,a=i===`drool`?Math.floor((e+v.phase)*2)%2:0,o=`${i}:${n}:${r}:${a}`;if(o===y)return;y=o;let s=l.getContext(`2d`);if(s.clearRect(0,0,32,32),s.fillStyle=`#d58e74`,s.fillRect(4,19,5,2),s.fillRect(24,19,5,2),s.fillStyle=Z.ink,n||i===`sleepy`)s.fillRect(7,15,6,1),s.fillRect(21,15,6,1);else if(i===`drool`)s.fillStyle=Z.white,s.fillRect(7,12,7,6),s.fillRect(20,12,7,6),s.fillStyle=Z.ink,s.fillRect(10,15,2,2),s.fillRect(22,14,2,2),s.fillRect(6,11,8,1),s.fillRect(20,11,8,1);else{let e=i===`surprise`?7:{bright:6,relaxed:3,almond:4,narrow:3,round:6}[t.eyes]||5,n=t.eyes===`round`?5:4,r=t.eyes===`relaxed`&&i!==`surprise`?14:12;s.fillRect(8,r,n,e),s.fillRect(21,r,n,e),t.lashes&&(s.fillRect(6,r-1,5,1),s.fillRect(24,r-1,4,1)),s.fillStyle=Z.white,s.fillRect(9,r,1,2),s.fillRect(22,r,1,2)}if(s.fillStyle=t.hair,s.fillRect(7,i===`surprise`?7:9,6,1),s.fillRect(20,i===`surprise`?7:i===`focus`?10:9,6,1),t.freckles){s.fillStyle=`#ad774f`;for(let[e,t]of[[5,20],[8,21],[26,20],[29,21]])s.fillRect(e,t,1,1)}if(t.beautyMark&&(s.fillStyle=`#73514b`,s.fillRect(26,23,1,1)),t.beard&&(s.fillStyle=t.hair,s.fillRect(9,25,17,5),s.fillRect(9,22,3,5),s.fillRect(23,22,3,5),s.fillRect(13,21,10,2)),s.fillStyle=`#8e4a39`,i===`drool`?(s.fillRect(13,22,9,5),s.fillStyle=`#e3a18a`,s.fillRect(14,25,5,2),s.fillStyle=`#76cbe1`,s.fillRect(20,25,2,4),s.fillRect(21,28,2,2),s.fillRect(21,30+a,2,1),s.fillStyle=`#ddf7ff`,s.fillRect(20,25,1,3),s.fillRect(21,30+a,1,1)):r||i===`surprise`?(s.fillRect(14,22,5,5),s.fillStyle=`#e3a18a`,s.fillRect(15,25,3,1)):i===`happy`?(s.fillRect(12,22,2,2),s.fillRect(14,24,6,2),s.fillRect(20,22,2,2)):s.fillRect(14,23,7,1),t.glasses){let e=t.glasses===`heavy`?`#303847`:t.glasses===`round`?`#745039`:t.glasses===`square`?`#9b773d`:`#52615c`;s.strokeStyle=e,s.lineWidth=t.glasses===`heavy`?2:1;for(let e of[5.5,19.5])t.glasses===`round`?(s.beginPath(),s.moveTo(e+2,10.5),s.lineTo(e+7,10.5),s.lineTo(e+9,12.5),s.lineTo(e+9,17.5),s.lineTo(e+7,19.5),s.lineTo(e+2,19.5),s.lineTo(e,17.5),s.lineTo(e,12.5),s.closePath(),s.stroke()):s.strokeRect(e,10.5,9,9);s.fillStyle=e,s.fillRect(15,13,4,1)}u.needsUpdate=!0}return v.update=(e,n,i)=>{let a=e+v.phase,l=i,u={hy:.78,hz:0,tx:0,tz:0,hx:0,hyaw:0,hzrot:0,lax:0,laz:-.06,rax:0,raz:.06,lex:-.06,rex:-.06,llx:0,rlx:0,lkx:0,rkx:0},d=Math.sin(a*2.4);if(u.hy+=d*.012*l,u.tz=Math.sin(a*1.4)*.015*l,u.hx=Math.sin(a*1.1)*.035*l,u.lax=d*.035,u.rax=-d*.035,v.action===`walk`){let e=Math.sin(a*8),t=Math.sin(a*8+Math.PI);u.llx=e*.55,u.rlx=t*.55,u.lkx=Math.max(0,-e)*.75*l,u.rkx=Math.max(0,-t)*.75*l,u.lax=t*.5,u.rax=e*.5,u.lex=-.25*l,u.rex=-.25*l,u.hy+=Math.abs(Math.cos(a*8))*.035*l,u.tz=e*.045*l,u.hx=-.04*l}else v.action===`wave`?(u.raz=2.3+Math.sin(a*7)*.27,u.rax=-.25*l,u.rex=(-.6+Math.sin(a*7+.5)*.35)*l,u.tz=-.09*l,u.hzrot=.12*l,u.hyaw=Math.sin(a*1.6)*.12*l):v.action===`work`?(u.hy=.59/(t.height||1),u.hz=.16,u.llx=u.rlx=-1.43,u.lkx=u.rkx=1.43,u.tx=.13*l,u.hx=.13*l,u.lax=-1.48,u.rax=-1.48,u.lex=(-.5+Math.sin(a*13)*.14)*l,u.rex=(-.5+Math.cos(a*12)*.14)*l,u.laz=-.12,u.raz=.12,u.hyaw=Math.sin(a*.7)*.06*l):v.action===`celebrate`?(u.hy+=Math.max(0,Math.sin(a*6))*.23,u.laz=-2.5-Math.sin(a*6)*.2,u.raz=2.5+Math.sin(a*6)*.2,u.lex=u.rex=-.5*l,u.lkx=u.rkx=Math.max(0,-Math.sin(a*6))*.45*l,u.hx=-.16*l,u.tz=Math.sin(a*3)*.1*l):v.action===`think`&&(u.rax=-.6,u.rex=-1.8*l,u.raz=.14*l,u.lax=-.1,u.lex=-.45*l,u.hzrot=-.16*l,u.hx=.08*l,u.hyaw=.22*l);o.position.y=gl(o.position.y,u.hy,n),o.position.z=gl(o.position.z,u.hz,n);let f=[[s,`x`,u.tx],[s,`z`,u.tz],[c,`x`,u.hx],[c,`y`,u.hyaw],[c,`z`,u.hzrot],[p.shoulder,`x`,u.lax],[p.shoulder,`z`,u.laz],[m.shoulder,`x`,u.rax],[m.shoulder,`z`,u.raz],[p.elbow,`x`,u.lex],[m.elbow,`x`,u.rex],[h.thigh,`x`,u.llx],[g.thigh,`x`,u.rlx],[h.knee,`x`,u.lkx],[g.knee,`x`,u.rkx]];for(let[e,t,r]of f)e.rotation[t]=gl(e.rotation[t],r,n);let _=Math.atan2(Math.sin(v.targetYaw-r.rotation.y),Math.cos(v.targetYaw-r.rotation.y));r.rotation.y+=_*(1-Math.exp(-n*10)),b(e)},v.update(0,1,.85),v}var vl={minX:-5.5,maxX:5.5,minZ:-3.9,maxZ:3.9},yl=.25;function bl(e,t,n=[],r=vl){return e<r.minX+.32||e>r.maxX-.32||t<r.minZ+.32||t>r.maxZ-.32?!1:!n.some(n=>e>n.x-n.w/2-.32&&e<n.x+n.w/2+.32&&t>n.z-n.d/2-.32&&t<n.z+n.d/2+.32)}function xl(e,t,n=[],r=vl){if(!bl(t.x,t.z,n,r))return null;let i=e=>({x:Math.round(e.x/yl),z:Math.round(e.z/yl)}),a=i(e),o=i(t),s=e=>`${e.x},${e.z}`;if(!bl(o.x*.25,o.z*.25,n,r))return null;let c=[a],l=new Map([[s(a),null]]),u=0;for(;u<c.length;){let e=c[u++];if(s(e)===s(o)){let n=[],r=e;for(;r&&s(r)!==s(a);)n.unshift({x:r.x*yl,z:r.z*yl}),r=l.get(s(r));return n.push({x:t.x,z:t.z}),n}for(let[t,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let a={x:e.x+t,z:e.z+i};!l.has(s(a))&&bl(a.x*.25,a.z*.25,n,r)&&(l.set(s(a),e),c.push(a))}}return null}function Sl(){let e=[],t=!1;return{get disposed(){return t},add(n){return t?n():e.push(n),n},dispose(){if(t)return;t=!0;let n=[];for(let t of e.toReversed())try{t()}catch(e){n.push(e)}if(e.length=0,n.length)throw AggregateError(n,`Scene cleanup failed`)}}}function Cl(e){let t=e=>{throw Error(`Invalid scene layout: ${e}`)},n=e=>e&&Number.isFinite(e.x)&&Number.isFinite(e.z);(!e?.id||!Number.isInteger(e.capacity)||e.capacity<1)&&t(`id/capacity`),(e.actors?.length!==e.capacity||e.stationFor?.length!==e.capacity)&&t(`actors/stationFor`),e.actors.every(n)||t(`actor positions`);let r=e.actors.map(e=>e.instanceId).filter(e=>e!==void 0);(r.some(e=>typeof e!=`string`||!e)||new Set(r).size!==r.length)&&t(`instance identities`),e.seats?.length&&e.seats.length===e.stations?.length||t(`seats/stations`),(new Set(e.stationFor).size!==e.capacity||e.stationFor.some(t=>!Number.isInteger(t)||!e.seats[t]))&&t(`seat assignment`),(!Number.isFinite(e.width)||!Number.isFinite(e.depth)||e.width<=0||e.depth<=0)&&t(`dimensions`);let i=e.bounds;(!i||![i.minX,i.maxX,i.minZ,i.maxZ].every(Number.isFinite)||i.minX>=i.maxX||i.minZ>=i.maxZ)&&t(`bounds`),e.patrol?.length&&e.patrol.every(n)||t(`patrol`);let a=e.camera;a?.position?.length===3&&a.position.every(Number.isFinite)&&[a.minWidth,a.minHeight,a.closeZoom].every(e=>Number.isFinite(e)&&e>0)||t(`camera`);let o=e.seating?.exitDistance??1.05;(!Number.isFinite(o)||o<=0)&&t(`exitDistance`);let s=e.seats.map((e,r)=>{n(e)&&Number.isFinite(e.yaw)||t(`seat ${r}`);let i=e.exit??{x:e.x-Math.sin(e.yaw)*o,z:e.z-Math.cos(e.yaw)*o};return n(i)||t(`seat ${r} exit`),{...e,exit:{...i}}});return{...e,seats:s}}function wl({office:e,obstacles:t,seats:n,displays:r},i){if(!e?.isObject3D||!Array.isArray(t)||n?.length!==i.seats.length||!Array.isArray(r))throw Error(`Invalid office builder result`);for(let e=0;e<n.length;e++)if([`x`,`z`,`yaw`].some(t=>n[e][t]!==i.seats[e][t]))throw Error(`Office seat ${e} differs from layout`)}function Tl(e){let t=new Set;e.traverse(e=>{e.isInstancedMesh&&t.add(e),e.geometry&&t.add(e.geometry),e.shadow?.map&&t.add(e.shadow.map),e.shadow?.mapPass&&t.add(e.shadow.mapPass);for(let n of Array.isArray(e.material)?e.material:e.material?[e.material]:[]){t.add(n);for(let e of Object.values(n))e?.isTexture&&t.add(e)}});let n=[];for(let e of t)if(!nl(e))try{e.dispose()}catch(e){n.push(e)}if(e.clear(),n.length)throw AggregateError(n,`Private scene cleanup failed`)}var El={idle:`自在站立`,wave:`挥手招呼`,work:`坐下工作`,walk:`散步走走`,celebrate:`开心庆祝`,think:`想点事情`},Dl={happy:`开心`,focus:`专注`,surprise:`惊讶`,sleepy:`困倦`,drool:`呆萌流口水`},Ol={loading:`正在搭建办公室…`,bootFailed:`3D 场景未能启动。请使用支持 WebGL 2 的浏览器，开启硬件加速后刷新重试。`,bootFailedStatus:`场景加载失败`,webglLost:`图形连接已中断，请刷新页面重新加载场景。`,sceneState:{day:`自由探索`,golden:`午后暖光`,night:`下班时分`},selecting:e=>`已选择${e}，可以切换动作或点击空地移动。`,blocked:`这里被墙或家具挡住了，走门才能去别的房间。`,pickPerson:`今天也一起做点有趣的事吧。`,floorClick:`点击地面空处可以移动，人物会绕开家具。`,walking:e=>`${e}开始散步。点击空地可以指定目的地。`,returning:e=>`${e}正在走回自己的工位。`,seated:e=>`${e}已坐下，正在敲键盘。`,acting:(e,t)=>`${e} · ${t}`,departing:e=>`${e} · 出发`,feeling:(e,t)=>`${e}的心情：${t}`,bubbleWave:`嗨，欢迎来到我们的办公室！`,bubbleCelebrate:`好耶！又完成了一件小事。`,bubbleThink:`嗯…这个点子还能再有趣一点。`};function kl({viewport:e,layout:t,createOffice:n,labels:r={},onEvent:i,mountTasks:a,managedActors:o=!1,personCameraOffset:s=[2.5,1.4,5]}){if(!e?.append)throw Error(`A scene viewport is required`);let c=Cl(t),l={...Ol,...r,sceneState:{...Ol.sceneState,...r.sceneState}},u=Sl(),d=new AbortController;u.add(()=>d.abort());let f=(e,t,n)=>e.addEventListener(t,n,{signal:d.signal}),p=new Set(i?[i]:[]),m=e=>{for(let t of p)t(e)},h,g,_,v=``,y=!1;u.add(()=>{y=!0,cancelAnimationFrame(_),p.clear()});try{u.add(rl());let t=new oi;u.add(()=>Tl(t)),t.background=new ir(`#dce6e9`);let r=new Ec({antialias:!0,alpha:!1});u.add(()=>{r.dispose(),r.forceContextLoss(),r.domElement.remove()}),r.setPixelRatio(Math.min(devicePixelRatio,1.75)),r.shadowMap.enabled=!0,r.shadowMap.type=2,r.outputColorSpace=ke,r.toneMapping=4,r.toneMappingExposure=1.25,e.append(r.domElement);let i=new ea(-10,10,7,-7,.1,100);i.position.fromArray(c.camera.position);let d=new Lc(i,r.domElement);u.add(()=>d.dispose()),d.target.set(0,.5,0),d.enableDamping=!0,d.dampingFactor=.08,d.minZoom=.65,d.maxZoom=c.camera.maxZoom??6,d.minPolarAngle=.12,d.maxPolarAngle=Math.PI/2.12,d.enablePan=!1,d.update();let M=new Yi(`#fff5df`,`#91a5a4`,2.6);t.add(M);let N=new na(`#fff1d5`,3.4);N.position.set(-3,10,6),t.add(N),N.castShadow=!0,N.shadow.mapSize.set(2048,2048);let P=c.render?.shadowSize??Math.max(c.width,c.depth)/2+4;Object.assign(N.shadow.camera,{left:-P,right:P,top:P,bottom:-P,far:c.render?.shadowFar??80}),N.shadow.bias=-3e-4,N.shadow.normalBias=.025,N.shadow.radius=3;let F=new na(`#d0e2e9`,1);F.position.set(6,6,-4),t.add(F);let te=new Fr(new Oi(c.render?.groundSize??400,c.render?.groundSize??400),new Ai({color:`#718887`,opacity:.13}));te.rotation.x=-Math.PI/2,te.position.y=-.66,te.receiveShadow=!0,t.add(te);let I=n(t,c);wl(I,c);let{office:L,obstacles:R,displays:z}=I,ne=c.seats,B=c.actors.map(e=>_l(t,e)),re=c.stationFor;B.forEach((e,t)=>{if(e.root.traverse(n=>{n.isMesh&&n!==e.ring&&(n.userData.person=t)}),e.ring.visible=!o&&t===0,e.root.visible=!o,t>0&&!o){let n=ne[re[t]];e.root.position.set(n.x,0,n.z),e.action=`work`,e.expression=`focus`,e.targetYaw=n.yaw,e.root.rotation.y=n.yaw,e.update(0,1,.85)}});let ie=new Fr(new ki(.13,.19,24),new cr({color:`#d57645`,side:2,depthWrite:!1}));ie.rotation.x=-Math.PI/2,ie.position.y=.07,ie.visible=!1,t.add(ie);let ae=0,oe=.85,se=matchMedia(`(prefers-reduced-motion: reduce)`).matches,ce=!1,le=0,V=performance.now(),ue=0,de=V,fe=0,H=0,pe=`room`,U=null,W=1,me=1,he=!1,ge=`day`,_e=e=>m({type:`status`,message:e});function b(){B.forEach((e,t)=>{e.ring.visible=e.root.visible&&t===ae}),g&&m({type:`state`,state:g.getState()})}function x(e){return typeof e==`boolean`&&(se=e,b(),!0)}function S(){v=``,m({type:`bubble`,hidden:!0})}function C(e){v=e,m({type:`bubble`,hidden:!1,message:e}),H=le+3.5,B[ae].talkingUntil=le+2.5}function w(e){return!Number.isInteger(e)||!B[e]?.root.visible?!1:(ae=e,ie.visible=!1,S(),b(),m({type:`selection`,index:e}),pe===`person`&&k(`person`),_e(l.selecting(B[e].config.name)),!0)}let ve=e=>ne[re[B.indexOf(e)]],ye=e=>e.exit;function T(e){if(e.action!==`work`)return;let t=ve(e),n=ye(t);e.root.position.set(n.x,0,n.z),e.targetYaw=t.yaw+Math.PI}function E(e,t,n=null){T(e);let r=xl({x:e.root.position.x,z:e.root.position.z},t,R,c.bounds);return r?(e.path=r,e.arrival=n,e.action=`walk`,e===B[ae]&&(ie.position.set(t.x,.07,t.z),ie.visible=!0,b()),!0):(_e(l.blocked),!1)}function D(e){if(!Object.hasOwn(El,e))return!1;let t=B[ae];if(x(!1),T(t),t.path=[],t.arrival=null,t.walkLoop=!1,ie.visible=!1,e===`work`){let e=ve(t);if(!E(t,ye(e),()=>{t.root.position.set(e.x,0,e.z),t.targetYaw=e.yaw,t.action=`work`,t===B[ae]&&(b(),_e(l.seated(t.config.name)))}))return!1;t.expression=`focus`,_e(l.returning(t.config.name))}else if(e===`walk`){t.walkLoop=!0;let e=c.patrol,n=0,r=()=>{t.walkLoop&&(E(t,e[n++%e.length],r)||(t.walkLoop=!1))};r(),_e(l.walking(t.config.name))}else t.action=e,t.targetYaw=pe===`person`?Math.atan2(i.position.x-t.root.position.x,i.position.z-t.root.position.z):.25,e===`wave`&&C(l.bubbleWave),e===`celebrate`&&(t.expression=`happy`,C(l.bubbleCelebrate)),e===`think`&&(t.expression=`focus`,C(l.bubbleThink)),_e(l.acting(t.config.name,El[e]));return b(),!0}function O(e){return Object.hasOwn(Dl,e)?(B[ae].expression=e,B[ae].update(le,0,oe),b(),_e(l.feeling(B[ae].config.name,Dl[e])),!0):!1}function k(e){if(![`room`,`person`,`top`].includes(e))return!1;h?.exit(),pe=e;let t=B[ae].root.position,n=e===`person`?new q(t.x,1.1,t.z):new q(0,.5,0);return U={position:e===`person`?n.clone().add(new q().fromArray(s)):e===`top`?new q(0,c.depth*2,4):new q().fromArray(c.camera.position),target:n,zoom:e===`person`?c.camera.closeZoom:e===`top`?1.1:1},b(),!0}function A(e){let n={day:[`#dce6e9`,`#fff1d5`,3.4,2.6,1.25],golden:[`#e6d8c3`,`#ffd3a0`,3.6,1.8,1.2],night:[`#73878f`,`#c2d3f1`,.7,1.3,1.1]};if(!n[e])return!1;let[i,a,o,s,c]=n[e];return ge=e,t.background.set(i),N.color.set(a),N.intensity=o,M.intensity=s,r.toneMappingExposure=c,m({type:`lighting`,label:l.sceneState[e]}),b(),!0}function j(){if(W=e.clientWidth,me=e.clientHeight,!W||!me)return;let t=W/me,n=Math.max(c.camera.minHeight,c.camera.minWidth/t);i.left=-n*t/2,i.right=n*t/2,i.top=n/2,i.bottom=-n/2,i.updateProjectionMatrix(),r.setPixelRatio(he&&pe!==`display`?.55:Math.min(devicePixelRatio,1.75)),r.setSize(W,me),r.domElement.style.imageRendering=he?`pixelated`:`auto`}let be=new ResizeObserver(j);u.add(()=>be.disconnect()),be.observe(e),j();let xe=new _a,Se=null;f(r.domElement,`pointerdown`,e=>{Se={x:e.clientX,y:e.clientY}}),f(r.domElement,`pointercancel`,()=>{Se=null}),f(r.domElement,`pointerup`,e=>{if(!Se||Math.hypot(e.clientX-Se.x,e.clientY-Se.y)>5||e.button!==0){Se=null;return}Se=null;let t=r.domElement.getBoundingClientRect();xe.setFromCamera(new K((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),i);let n=xe.intersectObjects([L,...B.map(e=>e.root)],!0).filter(e=>e.object!==B.find(t=>t.ring===e.object)?.ring).find(e=>e.object.userData.person===void 0||B[e.object.userData.person].root.visible);if(!n)return;if(n.object.userData.person!==void 0){w(n.object.userData.person),C(l.pickPerson);return}if(o)return;if(n.point.y>.14){_e(l.floorClick);return}let a=B[ae];a.walkLoop=!1,E(a,{x:n.point.x,z:n.point.z})&&(x(!1),_e(l.departing(a.config.name)))}),f(e,`keydown`,e=>{if(![`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`+`,`=`,`-`].includes(e.key))return;e.preventDefault(),U=null;let t=i.position.clone().sub(d.target),n=new ba().setFromVector3(t);e.key===`ArrowLeft`&&(n.theta-=.12),e.key===`ArrowRight`&&(n.theta+=.12),e.key===`ArrowUp`&&(n.phi=Math.max(.15,n.phi-.12)),e.key===`ArrowDown`&&(n.phi=Math.min(1.45,n.phi+.12)),[`+`,`=`].includes(e.key)&&(i.zoom=Math.min(d.maxZoom,i.zoom*1.1)),e.key===`-`&&(i.zoom=Math.max(.65,i.zoom/1.1)),i.position.copy(d.target).add(new q().setFromSpherical(n)),i.updateProjectionMatrix(),d.update()}),d.addEventListener(`start`,()=>{U=null}),f(r.domElement,`webglcontextlost`,e=>{e.preventDefault(),x(!0),m({type:`error`,message:l.webglLost})}),f(document,`visibilitychange`,()=>{V=performance.now()}),h=a?.({layout:c,displays:z,camera:i,controls:d,renderer:r,viewport:e,onPose:e=>{U=e,pe=`display`,S(),b()},returnToRoom:()=>k(`room`),selectPerson:w}),h&&u.add(()=>h.dispose()),g={tasks:h,dispose:()=>u.dispose(),get disposed(){return u.disposed},subscribe(e){return u.disposed?()=>{}:(p.add(e),()=>p.delete(e))},lighting:A,flexibility(e){return!Number.isFinite(e)||e<0||e>1?!1:(oe=e,b(),!0)},pixelated(e){return typeof e==`boolean`&&(he=e,j(),b(),!0)},select:w,action:D,expression:O,camera:k,pause:x,suspend(e){return ce=!!e,V=performance.now(),!0},setActor(e,{visible:t=!0,name:n,action:r=`idle`}){let i=B.findIndex(t=>t.config.instanceId===e),a=B[i];if(!a||!Object.hasOwn(El,r))return!1;a.root.visible=t,n!==void 0&&(a.config.name=String(n));let o=a.action!==r||!a.bound;if(o){let e=ve(a),t=r===`work`?e:ye(e);a.path=[],a.arrival=null,a.walkLoop=!1,a.root.position.set(t.x,0,t.z),a.root.rotation.y=a.targetYaw=e.yaw,a.action=r,a.expression=r===`celebrate`?`happy`:`focus`,a.bound=!0}return a.update(le,+!!o,oe),b(),!0},renderNow(){h?.tick(performance.now()),U&&(i.position.copy(U.position),d.target.copy(U.target),i.zoom=U.zoom,U=null,i.updateProjectionMatrix()),d.update(),r.render(t,i),fe++},getState:()=>({scene:c.id,capacity:c.capacity,selected:ae,paused:se,suspended:ce,disposed:u.disposed,pixelated:he,flexibility:oe,camera:pe,lighting:ge,actors:B.map(e=>({instanceId:e.config.instanceId,characterId:e.config.characterId,appearanceId:e.config.appearanceId,name:e.config.name,visible:e.root.visible,action:e.action,expression:e.expression,yaw:e.root.rotation.y,pose:{hipY:e.hips.position.y,hipZ:e.hips.position.z,leftArmX:e.left.shoulder.rotation.x,rightArmX:e.right.shoulder.rotation.x,leftElbowX:e.left.elbow.rotation.x,thighX:e.legL.thigh.rotation.x},position:{x:e.root.position.x,z:e.root.position.z},remainingSteps:e.path.length})),render:{count:fe,calls:r.info.render.calls,triangles:r.info.render.triangles,textures:r.info.memory.textures}})};for(let e of[`select`,`action`,`expression`,`camera`,`pause`,`lighting`,`flexibility`,`pixelated`,`setActor`,`renderNow`,`suspend`]){let t=g[e];g[e]=(...e)=>!u.disposed&&t(...e)}function ee(e){if(y)return;_=requestAnimationFrame(ee);let n=Math.min((e-V)/1e3,.05);if(V=e,!(document.hidden||ce)){if(h?.tick(e),se||(le+=n,B.forEach(e=>{if(e.path.length){let t=e.path[0],r=t.x-e.root.position.x,i=t.z-e.root.position.z,a=Math.hypot(r,i),o=n*1.45;if(a>.001&&(e.targetYaw=Math.atan2(r,i)),a<=o){if(e.root.position.x=t.x,e.root.position.z=t.z,e.path.shift(),!e.path.length){e.action=`idle`;let t=e.arrival;e.arrival=null,e===B[ae]&&(ie.visible=!1),t?.(),e===B[ae]&&b()}}else e.root.position.x+=r/a*o,e.root.position.z+=i/a*o}e.update(le,n,oe)})),U){let t=U.deadline&&e>=U.deadline?1:1-Math.exp(-n*6);i.position.lerp(U.position,t),d.target.lerp(U.target,t),i.zoom=ct.lerp(i.zoom,U.zoom,t),i.updateProjectionMatrix(),i.position.distanceTo(U.position)<.005&&Math.abs(i.zoom-U.zoom)<.005&&(U=null)}if(d.update(),v){if(le>H)S();else{let e=new q(B[ae].root.position.x,2.35,B[ae].root.position.z).project(i),t=(e.x+1)/2*W,n=(-e.y+1)/2*me;m({type:`bubble`,hidden:!1,message:v,left:Math.max(110,Math.min(W-110,t)),top:Math.max(70,n)})}}r.render(t,i),fe++,ue++,e-de>=1e3&&(m({type:`fps`,value:Math.round(ue*1e3/(e-de))}),ue=0,de=e)}}return g.renderNow(),b(),m({type:`ready`}),_=requestAnimationFrame(ee),g}catch(e){try{u.dispose()}catch(t){throw AggregateError([e,t],`Scene initialization failed`)}throw e}}var Al=Object.freeze({chair:Object.freeze({w:.78,d:.78}),desk:Object.freeze({w:2.55,d:1.28}),plant:Object.freeze({w:.6,d:.6})}),jl=Object.freeze({"desk-classic":Object.freeze({hasDesk:!0,monitorId:`monitor-tall`}),"desk-low":Object.freeze({hasDesk:!0,monitorId:`monitor-wide`}),"seat-facing":Object.freeze({hasDesk:!1,monitorId:`monitor-compact`})}),Ml=Object.freeze({"monitor-tall":{base:{y:1.23,z:0,w:.5,h:.07,d:.32},stem:{y:1.43,z:-.08,w:.09,h:.4,d:.09},housing:{y:1.7,z:-.06,w:1.05,h:.65,d:.1},screen:{y:1.7,z:0,w:.94,h:.53}},"monitor-wide":{base:{y:.015,z:0,w:.34,h:.03,d:.22},stem:{y:.195,z:-.09,w:.08,h:.32,d:.08},housing:{y:.485,z:-.04,w:1.05,h:.6,d:.09},screen:{y:.485,z:.012,w:.94,h:.5}},"monitor-compact":{base:{y:.015,z:0,w:.34,h:.03,d:.22},stem:{y:.195,z:-.09,w:.08,h:.32,d:.08},housing:{y:.485,z:-.04,w:1,h:.6,d:.09},screen:{y:.485,z:.012,w:.92,h:.52}}}),Nl=e=>({fx:Math.sin(e.yaw),fz:Math.cos(e.yaw),rx:Math.cos(e.yaw),rz:-Math.sin(e.yaw)});function Pl(e,t,n=0){let{fx:r,fz:i,rx:a,rz:o}=Nl(e);return{x:e.x+r*t+a*n,z:e.z+i*t+o*n}}function Fl(e,t,n,r,i){Q(e,t,n+.09,r,.16,.18,.16,i),Q(e,t,n+.185,r,.11,.01,.11,Z.woodDark),Q(e,t+.11,n+.09,r,.08,.09,.07,i)}function Il(e,t,n,r=1,i=0){let a=$(e,t,i,n);a.scale.setScalar(r),Q(a,0,.19,0,.42,.38,.42,`#e6d3b8`),Q(a,0,.4,0,.48,.08,.48,Z.white),Q(a,0,.46,0,.35,.05,.35,Z.woodDark),Q(a,0,.78,0,.09,.65,.09,Z.woodDark);for(let[e,t,n,r]of[[-.22,0,.9,.42],[.22,.06,1.16,.46],[0,-.14,1.42,.48],[-.12,.17,1.23,.38],[.16,-.1,.77,.32]])Q(a,e,n,t,r,r*.8,r,n>1.2?Z.leafLight:Z.leaf);return{root:a,collision:i?null:{x:t,z:n,w:Al.plant.w*r,d:Al.plant.d*r}}}function Ll(e,t){let n=$(e,t.x,0,t.z);n.rotation.y=t.yaw+Math.PI,Q(n,0,.57,0,.74,.16,.68,Z.green),Q(n,0,.94,.31,.74,.68,.14,Z.green),Q(n,0,.29,0,.09,.45,.09,Z.ink),Q(n,0,.09,0,.74,.08,.1,Z.ink),Q(n,0,.09,0,.1,.08,.66,Z.ink);for(let e of[-.33,.33])for(let t of[-.26,.26])Q(n,e,.065,t,.12,.12,.12,Z.ink);return{root:n,seat:{...t},collision:{x:t.x,z:t.z,...Al.chair}}}function Rl(e,{x:t=0,z:n=0,yaw:r=0,surface:i=0,faceOffset:a,material:o,spec:s=Ml[`monitor-compact`]}){let c=$(e,t,0,n);c.rotation.y=r;for(let e of[s.base,s.stem,s.housing])Q(c,0,i+e.y,e.z,e.w,e.h,e.d,Z.ink);let l=s.screen;return{root:c,screen:ll(c,0,i+l.y,a??l.z,l.w,l.h,o),mount:{x:t,z:n,yaw:r}}}function zl(e,{x:t=0,z:n=0,w:r,d:i,surface:a,thickness:o}){return{mesh:Q(e,t,a-o/2,n,r,o,i,Z.wood,`wood`),collision:{x:t,z:n,w:r,d:i},surface:a}}function Bl(e,t,n,r){let i=Pl(t,r.forward),{fx:a,fz:o,rx:s,rz:c}=Nl(t);Q(e,i.x,n+r.thickness/2,i.z,.62,r.thickness,r.depth,`#e6e6d9`);for(let t=0;t<3;t++)for(let l=0;l<9;l++){let u=(l-4)*.062,d=(t-1)*.068;Q(e,i.x+s*u+a*d,n+r.thickness+r.keyHeight/2,i.z+c*u+o*d,.05,r.keyHeight,.045,`#99a3a1`)}}function Vl(e,t,n,r={}){let i={id:r.id??`${t}-${e.length}`,kind:t,mesh:n,width:n.geometry.parameters.width,height:n.geometry.parameters.height,...r};return n.userData.displayId=i.id,e.push(i),n}function Hl(e,t,n){return t.forEach((t,r)=>{let i=(n.seats??n.stations)[r];Vl(e,`computer`,t,{id:`${n.id}:computer:${r}`,stationId:`${n.id}:station:${r}`,roomId:i.roomId??i.room})}),e}function Ul(e,t,{placeFurniture:n}){let r=$(e),i=[],a=[],o=[],s=t.environment,c=t.width/2,l=t.depth/2,u=-l+.05,d=-c+.05,f=(e,t,n,r)=>i.push({x:e,z:t,w:n,d:r});Q(r,0,-.3,0,t.width,.55,t.depth,Z.cream),Q(r,0,-.58,0,t.width-.35,.12,t.depth-.35,`#b7c8c8`);let p=Math.ceil(t.width/1.5),m=t.width/p;for(let e=0;e<t.depth*2;e++)for(let t=0;t<p;t++)Q(r,-c+m/2+t*m,-.005,-l+.25+e*.5,m-.015,.08,.485,[`#ccae86`,`#d2b48e`,`#d6bb98`,`#c6a680`][(e*7+t*3)%4],`wood`);Q(r,0,1.65,u,t.width,3.3,.18,Z.cream),Q(r,d,1.65,0,.18,3.3,t.depth,Z.cream),Q(r,0,.24,u+.14,t.width-.2,.38,.08,`#b3bca5`),Q(r,d+.14,.24,0,.08,.38,t.depth-.2,`#b3bca5`),Q(r,0,3.32,u,t.width+.1,.12,.26,`#f6f6e9`),Q(r,d,3.32,0,.26,.12,t.depth+.1,`#f6f6e9`);let h=cl(64,40,e=>{e.fillStyle=`#b6d6d9`,e.fillRect(0,0,64,40),e.fillStyle=`#e4eee4`,e.fillRect(5,5,19,4),e.fillRect(36,8,23,4),e.fillStyle=`#9ab7b3`;for(let t=0;t<8;t++)e.fillRect(t*9,25-t%3*4,7,20);e.fillStyle=`#c4d8cc`,e.fillRect(2,34,64,6)},!0);for(let e of s.windows)Q(r,e,2.05,u+.17,2.75,1.85,.12,Z.white),ll(r,e,2.05,u+.248,2.5,1.6,h),Q(r,e,2.05,u+.3,.08,1.7,.08,Z.white),Q(r,e,2.05,u+.3,2.55,.08,.08,Z.white),Q(r,e,1.12,u+.35,2.9,.12,.45,Z.white);let g=cl(256,112,e=>{e.fillStyle=`#79917a`,e.fillRect(0,0,256,112),e.fillStyle=`#f8f9f5`,e.font=`bold 33px monospace`,e.fillText(`PIX OFFICE`,24,47),e.font=`12px monospace`,e.fillText(s.tagline,26,78)}),_=s.signX;Q(r,_,2.35,u+.2,2.8,1.3,.16,Z.wood),Vl(o,`topic`,ll(r,_,2.35,u+.292,2.62,1.13,g),{id:`mission`,label:`任务主题`});let v=(e,t,n=1,a=0)=>{let o=Il(r,e,t,n,a);return o.collision&&i.push(o.collision),o},y=cl(64,40,e=>{e.fillStyle=`#293e40`,e.fillRect(0,0,64,40),e.fillStyle=`#52666a`,e.fillRect(0,0,64,5),e.fillRect(0,7,12,33);for(let t=0;t<7;t++)e.fillStyle=[`#e2bd8b`,`#9ec5b5`,`#839fac`][t%3],e.fillRect(16+t%2*5,10+t*4,13+t*7%25,2)},!0);a.push(...n(r,y));let b=s.loungeX,x=s.loungeZ,S=$(r,b,0,x);Q(S,-.48,.72,0,.25,1.1,2.55,Z.green),Q(S,.02,.38,0,1.05,.3,2.55,Z.green);for(let e of[-.75,0,.75])Q(S,.06,.59,e,.9,.2,.7,`#a6b497`);for(let e of[-1.25,1.25])Q(S,.04,.69,e,1.1,.65,.2,Z.green);for(let e of[-1,1])Q(S,-.05,.12,e,.8,.2,.16,Z.woodDark);Q(S,-.22,.91,-.7,.22,.45,.5,`#e2bd8b`),f(b,x,1.2,2.75);let C=s.tableX;Q(r,C,.62,1.5,1.15,.12,1.75,Z.wood,`wood`);for(let e of[C-.4,C+.4])for(let t of[.9,2.1])Q(r,e,.3,t,.09,.6,.09,Z.ink);Q(r,C+.05,.72,1.35,.45,.08,.58,Z.blue),Q(r,C,.78,1.4,.45,.04,.58,Z.white),Fl(r,C+.05,.69,1.95,Z.orange),f(C,1.5,1.15,1.75);let w=s.rugX;for(let e=0;e<7;e++)for(let t=0;t<8;t++)Q(r,w+e*.55,.049,.55+t*.35,.545,.015,.345,(e+t)%2?`#d9c4a0`:`#dfcbaa`);let T=s.coffeeX;Q(r,T,.53,2.05,1.1,1.02,2.65,Z.cream),Q(r,T,1.08,2.05,1.2,.12,2.75,Z.wood,`wood`);for(let e of[1.25,2.05,2.85])Q(r,T-.565,.52,e,.03,.86,.76,`#dde0cb`),Q(r,T-.6,.72,e,.06,.05,.18,Z.woodDark);Q(r,T-.03,1.45,1.35,.62,.65,.6,Z.ink),Q(r,T-.36,1.48,1.35,.03,.32,.42,`#657671`),Q(r,T-.39,1.27,1.35,.16,.05,.44,Z.ink),Fl(r,T-.45,1.29,1.35,Z.white),v(T,2.8,.55,1.15),f(T,2.05,1.25,2.75),v(-c+.85,-l+.9,.9),v(c-.85,-l+1,1.1),v(-c+1,l-.95,.7);let E=$(r,d+.16,2.15,.1);E.rotation.y=Math.PI/2,Q(E,0,0,0,2.45,1.35,.1,Z.wood),Q(E,0,0,.06,2.27,1.17,.05,`#c5ae8b`),s.secondaryBoard||Vl(o,`board`,ll(E,0,0,.105,2.27,1.17,g),{id:`tasks`,label:`全部子任务`});let D=$(r,d+.17,2.7,s.wallClockZ);if(D.rotation.y=Math.PI/2,Q(D,0,0,0,.65,.65,.12,Z.woodDark),Q(D,0,0,.08,.54,.54,.05,Z.white),Q(D,0,.09,.12,.04,.21,.02,Z.ink),Q(D,.09,0,.12,.21,.04,.02,Z.ink),s.secondaryBoard){let e=cl(192,112,e=>{e.fillStyle=`#edf0df`,e.fillRect(0,0,192,112),e.fillStyle=`#526568`,e.font=`bold 15px monospace`,e.fillText(`TEAM / WEEKLY`,16,25);for(let t=0;t<3;t++){e.fillStyle=`#c4cbb8`,e.fillRect(16+t*57,36,47,2);for(let n=0;n<2;n++)e.fillStyle=[`#d6b080`,`#a7bda1`,`#9db5c1`][t],e.fillRect(19+t*57,47+n*25,38,18)}}),t=$(r,-9.77,2,-4.3);t.rotation.y=Math.PI/2,Q(t,0,0,0,3.2,1.9,.12,Z.wood),Vl(o,`board`,ll(t,0,0,.075,3,1.7,e),{id:`tasks`,label:`全部子任务`}),Q(r,8.25,.5,-3.4,1.2,1,2.8,Z.cream),Q(r,8.25,1.06,-3.4,1.3,.12,2.9,Z.wood,`wood`);for(let e=0;e<6;e++)Q(r,8.2,1.25+e%2*.05,-4.4+e*.4,.7,.3+e%2*.1,.22,[Z.blue,Z.green,Z.orange][e%3]);v(8.25,-2.5,.55,1.12),f(8.25,-3.4,1.3,2.9),v(-8.4,5.2,1.1),v(8.25,6.4,.9)}return{office:r,obstacles:i,seats:t.seats,stations:t.stations,screens:a,displays:o}}function Wl(e,{table:t,surface:n,thickness:r,supports:i,planters:a}){let o=$(e),s=zl(o,{...t,surface:n,thickness:r});Q(o,t.x,n-r-.09,t.z,t.w-.7,.07,.55,`#4a5a58`);for(let e of i)Q(o,e.x,(n-r)/2,e.z,.12,n-r,.5,Z.white);for(let e of a)Q(o,e.x,n+.07,e.z,.5,.14,.34,`#e6d3b8`),Q(o,e.x,n+.185,e.z,.34,.1,.22,Z.leafLight),Q(o,e.x,n+.245,e.z,.18,.07,.14,Z.leaf);return{root:o,colliders:[s.collision],anchors:{surface:n}}}function Gl(e,t,{placeFurniture:n}){let r=$(e),i=[],a=[],o=[],s=Object.fromEntries(t.environment.zones.map(e=>[e.id,e])),c=t.planterX,l=t.table,u=t.width/2,d=t.depth/2,f=-d+.05,p=-u+.05;Q(r,0,-.3,0,t.width,.55,t.depth,Z.cream),Q(r,0,-.58,0,t.width-.35,.12,t.depth-.35,`#b7c8c8`);let m=Math.ceil(t.width/1.5),h=t.width/m;for(let e=0;e<t.depth*2;e++)for(let t=0;t<m;t++)Q(r,-u+h/2+t*h,-.005,-d+.25+e*.5,h-.015,.08,.485,[`#ccae86`,`#d2b48e`,`#d6bb98`,`#c6a680`][(e*7+t*3)%4],`wood`);Q(r,0,1.65,f,t.width,3.3,.18,Z.cream),Q(r,p,1.65,0,.18,3.3,t.depth,Z.cream),Q(r,0,.24,f+.14,t.width-.2,.38,.08,`#b3bca5`),Q(r,p+.14,.24,0,.08,.38,t.depth-.2,`#b3bca5`),Q(r,0,3.32,f,t.width+.1,.12,.26,`#f6f6e9`),Q(r,p,3.32,0,.26,.12,t.depth+.1,`#f6f6e9`);let g=cl(64,40,e=>{e.fillStyle=`#b6d6d9`,e.fillRect(0,0,64,40),e.fillStyle=`#e4eee4`,e.fillRect(5,5,19,4),e.fillRect(36,8,23,4),e.fillStyle=`#9ab7b3`;for(let t=0;t<8;t++)e.fillRect(t*9,25-t%3*4,7,20);e.fillStyle=`#c4d8cc`,e.fillRect(2,34,64,6)},!0),_=cl(64,40,e=>{e.fillStyle=`#293e40`,e.fillRect(0,0,64,40),e.fillStyle=`#52666a`,e.fillRect(0,0,64,5),e.fillRect(0,7,12,33);for(let t=0;t<7;t++)e.fillStyle=[`#e2bd8b`,`#9ec5b5`,`#839fac`][t%3],e.fillRect(16+t%2*5,10+t*4,13+t*7%25,2)},!0),v=cl(256,112,e=>{e.fillStyle=`#79917a`,e.fillRect(0,0,256,112),e.fillStyle=`#f8f9f5`,e.font=`bold 33px monospace`,e.fillText(`PIX OFFICE`,24,47),e.font=`12px monospace`,e.fillText(`NINE AT ONE LONG TABLE.`,26,78)}),y=cl(320,96,e=>{e.fillStyle=`#f4f7f1`,e.fillRect(0,0,320,96),e.fillStyle=`#5c6e70`,e.font=`bold 13px monospace`,e.fillText(`LOFT STUDIO / SPRINT 07`,14,20),e.strokeStyle=`#7d9aa0`,e.lineWidth=2;for(let[t,n,r,i]of[[18,34,60,34],[110,34,54,34],[196,34,74,34]])e.strokeRect(t,n,r,i);e.beginPath(),e.moveTo(78,51),e.lineTo(110,51),e.moveTo(164,51),e.lineTo(196,51),e.stroke(),e.fillStyle=`#d57645`,e.fillRect(26,62,44,26),e.fillStyle=`#79917a`,e.fillRect(140,62,40,26),e.fillStyle=`#708fa5`,e.fillRect(226,62,40,26)}),b=cl(128,96,e=>{e.fillStyle=`#2f3c3b`,e.fillRect(0,0,128,96),e.fillStyle=`#f0ead6`,e.font=`bold 12px monospace`,e.fillText(`BAR`,12,20),e.fillStyle=`#c9a477`;for(let t=0;t<4;t++)e.fillRect(12,32+t*14,84-t*12,5);e.fillStyle=`#8caa70`,e.fillRect(104,14,12,74)}),x=new ji({color:`#cfe3e6`,transparent:!0,opacity:.34,roughness:.3});for(let e of[-9.9,-3.3,3.3,9.9])Q(r,e,2.05,f+.17,2.75,1.85,.12,Z.white),ll(r,e,2.05,f+.248,2.5,1.6,g),Q(r,e,2.05,f+.3,.08,1.7,.08,Z.white),Q(r,e,2.05,f+.3,2.55,.08,.08,Z.white),Q(r,e,1.12,f+.35,2.9,.12,.45,Z.white);Q(r,0,2.35,f+.2,2.8,1.3,.16,Z.wood),Vl(o,`topic`,ll(r,0,2.35,f+.292,2.62,1.13,v),{id:`mission`,label:`任务主题`});let S=(e,t,n=1,i=0)=>Il(r,e,t,n,i),C=l.surface,w=l.thickness;Wl(r,{table:l,surface:C,thickness:w,supports:t.tableSupports,planters:c.map(e=>({x:e,z:l.z}))}),Q(r,1.1,C+.035,0,.46,.07,.3,`#c9d3cf`),Q(r,1.1,C+.085,0,.4,.03,.24,Z.white);for(let[e,t]of[[-6.6,-1],[1.1,1],[7.7,-1]]){Q(r,e,.39,t*.72,.5,.76,.62,Z.cream),Q(r,e,.8,t*.72,.56,.06,.68,Z.wood,`wood`);for(let n=0;n<2;n++)Q(r,e,.3+n*.34,t*1.06,.3,.04,.04,Z.woodDark)}a.push(...n(r,_));let T=$(r,p+.16,2,-.2);T.rotation.y=Math.PI/2,Q(T,0,0,0,6.4,2.1,.1,Z.wood),Vl(o,`board`,ll(T,0,0,.06,6.2,1.92,y),{id:`tasks`,label:`全部子任务`}),Q(T,0,-1.1,.07,6,.06,.12,Z.wood),Q(T,-1.7,-1.04,.1,.1,.05,.05,Z.orange),Q(T,-1.5,-1.04,.1,.1,.05,.05,Z.blue);let E=$(r,p+.16,1.95,5.4);E.rotation.y=Math.PI/2,Q(E,0,0,0,2.3,1.3,.09,Z.wood),Q(E,0,0,.055,2.14,1.14,.05,`#c5ae8b`);for(let e=0;e<6;e++){let t=Q(E,-.72+e%3*.72,.24-Math.floor(e/3)*.5,.09,.38,.32,.02,[Z.cream,`#e4b581`,`#b7ccb6`][e%3]);t.rotation.z=(e%3-1)*.09}let D=$(r,p+.17,2.6,-5.4);D.rotation.y=Math.PI/2,Q(D,0,0,0,.65,.65,.12,Z.woodDark),Q(D,0,0,.08,.54,.54,.05,Z.white),Q(D,0,.09,.12,.04,.21,.02,Z.ink),Q(D,.09,0,.12,.21,.04,.02,Z.ink);for(let e of[`file-n`,`file-s`]){let t=s[e];Q(r,t.x,.62,t.z,t.w,1.24,t.d,Z.cream),Q(r,t.x,1.27,t.z,t.w+.08,.07,t.d+.08,Z.wood,`wood`);for(let e=0;e<3;e++)Q(r,t.x+t.w/2+.005,.34+e*.38,t.z,.03,.32,t.d-.2,`#dde0cb`),Q(r,t.x+t.w/2+.03,.34+e*.38,t.z,.05,.05,.16,Z.woodDark)}S(s[`file-n`].x+.2,s[`file-n`].z,.55,1.3);let O=s.bar,k=s[`bar-back`];Q(r,O.x,.53,O.z,O.w,1.02,O.d,Z.cream),Q(r,O.x,1.08,O.z,O.w+.18,.12,O.d+.16,Z.wood,`wood`);for(let e of[-3.1,-1.1,.9])Q(r,O.x-O.w/2-.02,.52,e,.03,.86,1.6,`#dde0cb`),Q(r,O.x-O.w/2-.06,.72,e,.06,.05,.18,Z.woodDark);Q(r,O.x,1.155,-2.7,.5,.04,.66,`#c3cfcb`),Q(r,O.x,1.32,-2.4,.06,.32,.06,`#9fb0ad`),Q(r,O.x+.04,1.42,-2.35,.3,.05,.05,`#9fb0ad`),Q(r,O.x-.05,1.45,.35,.56,.62,.5,Z.ink),Q(r,O.x-.36,1.48,.35,.03,.3,.34,`#657671`),Q(r,O.x+.06,1.2,.35,.3,.06,.3,Z.ink),Fl(r,O.x-.32,1.14,1.05,Z.white),Fl(r,O.x-.32,1.14,.72,Z.orange),Q(r,k.x,1,k.z,k.w,2,k.d,Z.cream),Q(r,k.x,2.03,k.z,k.w+.08,.08,k.d+.08,Z.wood,`wood`);for(let e=0;e<3;e++)Q(r,k.x,.45+e*.5,k.z,k.w+.06,.05,k.d-.18,`#dde0cb`);for(let e=0;e<6;e++)Q(r,k.x-.03,.62+e%3*.5,k.z-1.85+e*.62,.22,.3,.24,[Z.blue,Z.green,Z.orange,Z.woodDark][e%4]);ll(r,k.x-k.w/2-.04,1.62,k.z,1.6,.8,b).rotation.y=-Math.PI/2;for(let e of[`stool-a`,`stool-b`,`stool-c`]){let t=s[e],n=$(r,t.x,0,t.z);Q(n,0,.63,0,t.w,.07,t.w,Z.wood,`wood`);for(let[e,t]of[[-1,-1],[1,-1],[-1,1],[1,1]])Q(n,e*.13,.3,t*.13,.06,.6,.06,Z.ink);Q(n,0,.2,0,t.w-.12,.04,.04,Z.ink)}S(s[`plant-bar`].x,s[`plant-bar`].z,.85);let A=s[`low-left`],j=s[`low-right`];Q(r,A.x,.5,A.z,A.w,.98,A.d,Z.cream),Q(r,A.x,1.02,A.z,A.w+.08,.08,A.d+.08,Z.wood,`wood`);for(let e=0;e<3;e++)Q(r,A.x-1.5+e*1.5,.5,A.z+A.d/2+.01,1.38,.8,.03,`#dde0cb`),Q(r,A.x-1.5+e*1.5,.62,A.z+A.d/2+.04,.34,.05,.04,Z.woodDark);Q(r,-11.5,1.2,-7.3,.6,.3,.5,Z.blue),Q(r,-10.8,1.14,-7.3,.4,.18,.4,Z.orange),Q(r,-8.5,1.16,-7.3,.8,.22,.62,Z.ink),Q(r,-8.5,1.3,-7.42,.7,.05,.5,Z.white),Q(r,j.x,.5,j.z,j.w,1,j.d,Z.wood),Q(r,j.x,1.03,j.z,j.w+.06,.06,j.d+.06,Z.cream);for(let e=0;e<18;e++)Q(r,j.x-j.w/2+.5+e*.52,1.21,j.z+.08,.34,.24+e%3*.05,.2,[Z.blue,Z.green,Z.orange,`#a6b497`,`#c27e83`][e%5]);Q(r,2.2,1.24,-7.3,.5,.34,.44,`#8caa70`),S(s[`plant-bk1`].x,s[`plant-bk1`].z,.9),S(s[`plant-bk2`].x,s[`plant-bk2`].z,.75);function ee(e,t,n,i){for(let a=0;a<n;a++)for(let n=0;n<i;n++)Q(r,e+a*.55,.049,t+n*.45,.545,.015,.445,(a+n)%2?`#d9c4a0`:`#dfcbaa`)}ee(-9.9,5.1,7,6),ee(6.3,5.4,5,5);let M=s.sofa,N=$(r,M.x,0,M.z);Q(N,0,.72,M.d/2-.12,M.w,1.1,.25,Z.green),Q(N,0,.38,0,M.w,.3,M.d-.35,Z.green);for(let e of[-.75,0,.75])Q(N,e,.59,-.05,.7,.2,M.d-.5,`#a6b497`);for(let e of[-1.3,1.3])Q(N,e,.69,0,.22,.65,M.d-.3,Z.green);for(let e of[-1,1])Q(N,e,.12,0,.16,.2,M.d-.5,Z.woodDark);Q(N,-.35,.91,.2,.45,.45,.45,`#e2bd8b`),Q(N,.45,.2,M.d/2+.05,.5,.4,.5,`#f0e6c8`),Q(N,.45,1.4,M.d/2+.05,.07,2.4,.07,Z.ink),Q(N,.45,2.7,M.d/2+.05,.5,.35,.5,`#f0e6c8`);let P=s.coffee;Q(r,P.x,.42,P.z,P.w,.1,P.d,Z.wood,`wood`);for(let e of[P.x-.45,P.x+.45])for(let t of[P.z-.26,P.z+.26])Q(r,e,.2,t,.09,.4,.09,Z.ink);Q(r,P.x-.2,.5,P.z,.4,.06,.3,Z.white),Fl(r,P.x+.35,.47,P.z-.1,Z.orange);let F=s.armchair,te=$(r,F.x,0,F.z);te.rotation.y=-Math.PI/2,Q(te,0,.68,F.d/2-.1,F.w,1,.22,`#708fa5`),Q(te,0,.38,0,F.w,.3,F.d-.3,`#708fa5`),Q(te,0,.57,-.04,.6,.18,.6,`#abc2c9`);for(let e of[-F.w/2+.1,F.w/2-.1])Q(te,e,.64,0,.18,.6,F.d-.24,`#708fa5`);let I=s.reader,L=$(r,I.x,0,I.z);L.rotation.y=Math.PI,Q(L,0,.68,I.d/2-.1,I.w,1,.22,Z.green),Q(L,0,.38,0,I.w,.3,I.d-.3,Z.green),Q(L,0,.57,-.04,.6,.18,.6,`#a6b497`);for(let e of[-I.w/2+.1,I.w/2-.1])Q(L,e,.64,0,.18,.6,I.d-.24,Z.green);let R=s.side;Q(r,R.x,.46,R.z,R.w,.06,R.d,Z.wood,`wood`);for(let e of[R.x-.18,R.x+.18])Q(r,e,.23,R.z,.06,.46,R.d-.16,Z.ink);Fl(r,R.x,.5,R.z-.1,Z.blue);let z=s.lamp;Q(r,z.x,.05,z.z,.44,.1,.44,Z.ink),Q(r,z.x,1.4,z.z,.07,2.7,.07,Z.ink),Q(r,z.x,2.68,z.z,.5,.35,.5,`#f0e6c8`),S(s[`plant-front`].x,s[`plant-front`].z,.8),S(s[`plant-sw`].x,s[`plant-sw`].z,.7),S(s[`plant-nw`].x,s[`plant-nw`].z,.8);let ne=s.booth,B=$(r,ne.x,0,ne.z);Q(B,0,-.02,0,ne.w+.1,.12,ne.d+.1,`#8f9c94`);for(let[e,t]of[[-1,-1],[1,-1],[-1,1],[1,1]])Q(B,e*(ne.w/2-.08),1.2,t*(ne.d/2-.08),.14,2.4,.14,Z.ink);Q(B,0,2.44,0,ne.w+.06,.12,ne.d+.06,Z.ink),ll(B,0,1.2,ne.d/2-.07,ne.w-.3,2.24,x),ll(B,ne.w/2-.07,1.2,0,ne.d-.3,2.24,x).rotation.y=-Math.PI/2,ll(B,-(ne.w/2-.07),1.2,-.35,ne.d-1,2.24,x).rotation.y=Math.PI/2,Q(B,.48,.76,-.1,.55,.06,1,Z.wood,`wood`);for(let e of[-.5,.3])Q(B,.48,.38,e,.08,.76,.08,Z.ink);Q(B,.8,.9,-.5,.3,.22,.3,Z.cream),Q(B,-.6,.3,.6,.34,.6,.34,`#79917a`);for(let e of[-4.3,4.3])for(let t=0;t<36;t++)for(let n=0;n<2;n++)Q(r,-9.9+t*.55+.275,.049,e-.25+n*.5,.545,.015,.49,(t+n)%2?`#d9c4a0`:`#dfcbaa`);for(let e of[`lockers`]){let t=s[e];Q(r,t.x,.9,t.z,t.w,1.8,t.d,Z.cream),Q(r,t.x,1.83,t.z,t.w+.1,.07,t.d+.1,Z.wood,`wood`);for(let e=0;e<4;e++)for(let n=0;n<2;n++){let i=t.x-t.w/2+.45+e*.84,a=.52+n*.82;Q(r,i,a,t.z-t.d/2-.015,.76,.74,.03,`#dde0cb`),Q(r,i+.26,a,t.z-t.d/2-.04,.06,.14,.04,Z.woodDark)}}return{office:r,obstacles:i,seats:t.seats,stations:t.seats,screens:a,displays:o}}function Kl(e,{at:t,from:n,to:r,axis:i=`x`,doors:a=[]},o,s,{jambKind:c=`noise`}={}){let{thickness:l,solid:u,height:d}=o,f=d-u,p=(n,r,a,o,s,c,l=`noise`)=>i===`x`?Q(e,n,a,t,r,o,s,c,l):Q(e,t,a,n,s,o,r,c,l),m=(e,t)=>{let n=(e+t)/2,r=t-e;if(!(r<=.02)){p(n,r,u/2,u,l,Z.cream),p(n,r,u+f/2,f,l*.35,s),p(n,r,u+.04,.07,l+.06,Z.wood,`wood`),p(n,r,d-.06,.12,l+.06,Z.cream);for(let n of[e+.05,t-.05])p(n,.1,d/2,d,l+.07,Z.wood,`wood`)}},h=e=>i===`x`?e.x:e.z,g=n;for(let n of[...a].sort((e,t)=>h(e)-h(t))){let r=h(n),a=r-n.width/2,o=r+n.width/2;m(g,a);for(let e of[a+.05,o-.05])p(e,.12,d/2,d,l+.09,Z.wood,c);p(r,n.width,d-.1,.2,l+.09,Z.cream),p(r,n.width-.12,d-.32,.24,l*.3,s);let u=n.width-.14,f=n.into,_=o-.06,v=(n,r,a,o)=>i===`x`?Q(e,_,n,t+f*(u/2+.06),a,r,u,o):Q(e,t+f*(u/2+.06),n,_,u,r,a,o);v(.98,1.96,.06,s),v(2.02,.12,.1,Z.wood),v(.1,.16,.12,Z.wood),i===`x`?Q(e,_,1,t+f*(u-.04),.07,.5,.07,Z.ink):Q(e,t+f*(u-.04),1,_,.07,.5,.07,Z.ink),i===`x`?Q(e,r,.02,t,n.width,.04,l+.04,Z.woodDark,`wood`):Q(e,t,.02,r,l+.04,.04,n.width,Z.woodDark,`wood`),g=o}m(g,r)}function ql(e,t,{placeFurniture:n}){let r=$(e),i=[],a=[],o=[],s=Object.fromEntries(t.environment.zones.map(e=>[e.id,e])),c=t.rooms,l=t.meetingRoom,{wallSpec:u}=t.environment,{halfWidth:d,halfDepth:f,back:p,left:m}=t.shell,h=t.partitionZ;Q(r,0,-.3,0,t.width,.55,t.depth,Z.cream),Q(r,0,-.58,0,t.width-.35,.12,t.depth-.35,`#b7c8c8`);let g=Math.ceil(t.width/1.5),_=t.width/g;for(let e=0;e<t.depth*2;e++)for(let t=0;t<g;t++)Q(r,-d+_/2+t*_,-.005,-f+.25+e*.5,_-.015,.08,.485,[`#ccae86`,`#d2b48e`,`#d6bb98`,`#c6a680`][(e*7+t*3)%4],`wood`);Q(r,0,1.65,p,t.width,3.3,.18,Z.cream),Q(r,m,1.65,0,.18,3.3,t.depth,Z.cream),Q(r,0,.24,p+.14,t.width-.2,.38,.08,`#b3bca5`),Q(r,m+.14,.24,0,.08,.38,t.depth-.2,`#b3bca5`),Q(r,0,3.32,p,t.width+.1,.12,.26,`#f6f6e9`),Q(r,m,3.32,0,.26,.12,t.depth+.1,`#f6f6e9`);let v=cl(64,40,e=>{e.fillStyle=`#b6d6d9`,e.fillRect(0,0,64,40),e.fillStyle=`#e4eee4`,e.fillRect(5,5,19,4),e.fillRect(36,8,23,4),e.fillStyle=`#9ab7b3`;for(let t=0;t<8;t++)e.fillRect(t*9,25-t%3*4,7,20);e.fillStyle=`#c4d8cc`,e.fillRect(2,34,64,6)},!0),y=cl(64,40,e=>{e.fillStyle=`#293e40`,e.fillRect(0,0,64,40),e.fillStyle=`#52666a`,e.fillRect(0,0,64,5),e.fillRect(0,7,12,33);for(let t=0;t<7;t++)e.fillStyle=[`#e2bd8b`,`#9ec5b5`,`#839fac`][t%3],e.fillRect(16+t%2*5,10+t*4,13+t*7%25,2)},!0),b=new ji({color:`#cfe3e6`,transparent:!0,opacity:.3,roughness:.3}),x=(e,t)=>{e.fillStyle=`#f4f7f1`,e.fillRect(0,0,t,96),e.fillStyle=`#5c6e70`,e.font=`bold 13px "Microsoft YaHei",monospace`,e.fillText(`SPRINT BOARD`,14,20),e.strokeStyle=`#7d9aa0`,e.lineWidth=2;for(let[t,n,r,i]of[[18,34,60,34],[110,34,54,34],[196,34,74,34]])e.strokeRect(t,n,r,i);e.beginPath(),e.moveTo(78,51),e.lineTo(110,51),e.moveTo(164,51),e.lineTo(196,51),e.stroke(),e.fillStyle=`#d57645`,e.fillRect(26,62,44,26),e.fillStyle=`#79917a`,e.fillRect(140,62,40,26),e.fillStyle=`#708fa5`,e.fillRect(226,62,40,26)},S=cl(320,96,e=>x(e,320)),C=e=>cl(128,40,t=>{t.fillStyle=`#f5f7f2`,t.fillRect(0,0,128,40),t.fillStyle=`#79917a`,t.fillRect(0,0,9,40),t.fillStyle=`#293635`,t.font=`bold 13px "Microsoft YaHei",monospace`,t.fillText(e.number,17,17),t.fillStyle=`#52666a`,t.font=`12px "Microsoft YaHei",monospace`,t.fillText(e.name,17,33)}),w=cl(128,96,e=>{e.fillStyle=`#2f3c3b`,e.fillRect(0,0,128,96),e.fillStyle=`#f0ead6`,e.font=`bold 12px monospace`,e.fillText(`BAR`,12,20),e.fillStyle=`#c9a477`;for(let t=0;t<4;t++)e.fillRect(12,32+t*14,84-t*12,5);e.fillStyle=`#8caa70`,e.fillRect(104,14,12,74)}),T=cl(256,112,e=>{e.fillStyle=`#79917a`,e.fillRect(0,0,256,112),e.fillStyle=`#f8f9f5`,e.font=`bold 33px monospace`,e.fillText(`PIX OFFICE`,24,47),e.font=`12px monospace`,e.fillText(`ROOMS 01-04 / ONE CORRIDOR`,26,78)}),E=cl(64,40,e=>{e.fillStyle=`#22313a`,e.fillRect(0,0,64,40),e.fillStyle=`#3d5866`,e.fillRect(4,4,56,26),e.fillStyle=`#8fb3bd`,e.fillRect(8,9,20,3),e.fillRect(8,15,32,3),e.fillStyle=`#c9a477`,e.fillRect(8,21,26,3)},!0),D=(e,t,n=1,i=0)=>Il(r,e,t,n,i);for(let e of c)for(let t of[e.centerX-2.3,e.centerX+2.3])Q(r,t,2.05,p+.17,2.2,1.85,.12,Z.white),ll(r,t,2.05,p+.248,1.95,1.6,v),Q(r,t,2.05,p+.3,.08,1.7,.08,Z.white),Q(r,t,2.05,p+.3,2,.08,.08,Z.white),Q(r,t,1.12,p+.35,2.35,.12,.45,Z.white);t.environment.wallRuns.forEach(e=>Kl(r,e,u,b,t.environment.wallStyle));for(let e of c)ll(r,e.door.x+e.door.width/2+.68,1.62,h+.12,.95,.3,C(e));ll(r,l.door.x+l.door.width/2+.72,1.62,l.zInner[0]-.12,.95,.3,C(l)).rotation.y=Math.PI;function O(e){let t=s[e];Q(r,t.x,.48,t.z,t.w,.95,t.d,Z.cream),Q(r,t.x,.98,t.z,t.w+.08,.07,t.d+.08,Z.wood,`wood`);for(let e=0;e<3;e++)Q(r,t.x-1.6+e*1.6,.48,t.z+t.d/2+.01,1.45,.78,.03,`#dde0cb`),Q(r,t.x-1.6+e*1.6,.6,t.z+t.d/2+.04,.34,.05,.04,Z.woodDark);Q(r,t.x-1.9,1.16,t.z,.6,.3,.5,Z.blue),Q(r,t.x-1.2,1.1,t.z,.4,.18,.4,Z.orange),Q(r,t.x+.5,1.12,t.z,.8,.22,.62,Z.ink),Q(r,t.x+1.8,1.14,t.z,.7,.26,.45,`#8caa70`);for(let e=0;e<5;e++)Q(r,t.x+.15+e*.18,1.2,t.z+.34,.15,.3+e%2*.06,.2,[Z.blue,Z.green,Z.orange][e%3])}[{x:m+.18,z:-4.4,width:3,height:1.2},{x:-4.22,z:-2.4,width:2.6,height:1.15},{x:4.42,z:-2.4,width:2.6,height:1.15}].forEach((e,t)=>{let n=$(r,e.x,1.95,e.z);n.rotation.y=Math.PI/2,Q(n,0,0,0,e.width,e.height,.1,Z.wood),Vl(o,`board`,ll(n,0,0,.06,e.width-.2,e.height-.18,S),{id:`room-tasks-${t}`,roomId:c[t].id,label:`${c[t].name}子任务`}),Q(n,0,-e.height/2-.06,.08,e.width-.3,.06,.12,Z.wood),Q(n,0,.02,.1,.5,.05,.04,t%2?Z.orange:Z.blue)});for(let e of c){O(`${e.id}-sideboard`);let t=s[`${e.id}-plant`];D(t.x,t.z,.85)}a.push(...n(r,y));let k=s[`meeting-table`];Q(r,k.x,.74,k.z,k.w,.1,k.d,Z.wood,`wood`);for(let e of[k.x-1.1,k.x+1.1])Q(r,e,.36,k.z,.12,.72,k.d-.2,Z.ink);Q(r,k.x,.82,k.z,.5,.06,.34,Z.white),Fl(r,k.x+.7,.79,k.z-.1,Z.blue);for(let e of Object.keys(s).filter(e=>e.startsWith(`meeting-chair`))){let t=s[e],n=t.z<k.z?-1:1,i=$(r,t.x,0,t.z);i.rotation.y=n>0?Math.PI:0,Q(i,0,.44,0,.46,.1,.46,`#708fa5`),Q(i,0,.74,.2,.46,.5,.1,`#708fa5`);for(let[e,t]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])Q(i,e,.19,t,.06,.38,.06,Z.ink)}for(let e=0;e<7;e++)for(let t=0;t<5;t++)Q(r,k.x-2+e*.55,.049,k.z-1.3+t*.5,.545,.015,.495,(e+t)%2?`#d9c4a0`:`#dfcbaa`);let A=$(r,m+.16,1.95,k.z);A.rotation.y=Math.PI/2,Q(A,0,0,0,2.3,1.35,.12,Z.ink),ll(A,0,0,.08,2.08,1.14,E),Q(r,k.x+2,1.9,l.zInner[0]+.12,2.1,1.15,.1,Z.wood),Vl(o,`board`,ll(r,k.x+2,1.9,l.zInner[0]+.18,1.92,.98,S),{id:`tasks`,label:`全部子任务`});for(let e=0;e<40;e++)for(let t=0;t<2;t++)Q(r,-11+e*.55+.275,.049,1.45+t*.5,.545,.015,.49,(e+t)%2?`#d7c8ad`:`#ddcfb6`);let j=$(r,m+.16,2.05,1.7);j.rotation.y=Math.PI/2,Q(j,0,0,0,2.7,1.3,.14,Z.wood),Vl(o,`topic`,ll(j,0,0,.08,2.5,1.12,T),{id:`mission`,label:`任务主题`});let ee=$(r,m+.17,2.5,3.05);ee.rotation.y=Math.PI/2,Q(ee,0,0,0,.62,.62,.12,Z.woodDark),Q(ee,0,0,.08,.51,.51,.05,Z.white),Q(ee,0,.09,.12,.04,.2,.02,Z.ink),Q(ee,.09,0,.12,.2,.04,.02,Z.ink);let M=s[`pantry-bar`],N=s[`pantry-back`];Q(r,M.x,.53,M.z,M.w,1.02,M.d,Z.cream),Q(r,M.x,1.08,M.z,M.w+.16,.12,M.d+.14,Z.wood,`wood`);for(let e=0;e<4;e++)Q(r,M.x-2.4+e*1.6,.52,M.z-M.d/2-.02,1.45,.84,.03,`#dde0cb`),Q(r,M.x-2.4+e*1.6+.5,.72,M.z-M.d/2-.05,.06,.05,.18,Z.woodDark);Q(r,M.x-1.4,1.16,M.z,.5,.04,.62,`#c3cfcb`),Q(r,M.x-1.4,1.32,M.z+.3,.06,.32,.06,`#9fb0ad`),Q(r,M.x-1.36,1.42,M.z+.35,.3,.05,.05,`#9fb0ad`),Q(r,M.x+1.5,1.45,M.z,.56,.62,.5,Z.ink),Q(r,M.x+1.1,1.48,M.z,.03,.3,.34,`#657671`),Fl(r,M.x+.3,1.14,M.z-.2,Z.white),Fl(r,M.x+.62,1.14,M.z-.05,Z.orange),Q(r,M.x-.4,1.18,M.z-.15,.42,.12,.3,`#8caa70`),Q(r,N.x,1,N.z,N.w,2,N.d,Z.cream),Q(r,N.x,2.03,N.z,N.w+.08,.08,N.d+.08,Z.wood,`wood`);for(let e=0;e<3;e++)Q(r,N.x,.45+e*.5,N.z,N.w+.06,.05,N.d-.16,`#dde0cb`);for(let e=0;e<8;e++)Q(r,N.x-2.8+e*.8,.62+e%3*.5,N.z,.24,.3,.22,[Z.blue,Z.green,Z.orange,Z.woodDark][e%4]);ll(r,N.x+.5,1.62,N.z-N.d/2-.04,1.8,.8,w).rotation.y=Math.PI;for(let e of Object.keys(s).filter(e=>e.startsWith(`stool`))){let t=s[e],n=$(r,t.x,0,t.z);Q(n,0,.63,0,t.w,.07,t.w,Z.wood,`wood`);for(let[e,t]of[[-1,-1],[1,-1],[-1,1],[1,1]])Q(n,e*.13,.3,t*.13,.06,.6,.06,Z.ink);Q(n,0,.2,0,t.w-.12,.04,.04,Z.ink)}let P=s.lockers;Q(r,P.x,.9,P.z,P.w,1.8,P.d,Z.cream),Q(r,P.x,1.83,P.z,P.w+.1,.07,P.d+.1,Z.wood,`wood`);for(let e=0;e<4;e++)for(let t=0;t<2;t++){let n=P.x-P.w/2+.36+e*.64,i=.52+t*.82;Q(r,n,i,P.z-P.d/2-.015,.56,.74,.03,`#dde0cb`),Q(r,n+.18,i,P.z-P.d/2-.04,.05,.13,.04,Z.woodDark)}let F=s.sofa,te=$(r,F.x,0,F.z);Q(te,0,.72,F.d/2-.12,F.w,1.1,.25,Z.green),Q(te,0,.38,0,F.w,.3,F.d-.35,Z.green);for(let e of[-.75,0,.75])Q(te,e,.59,-.05,.7,.2,F.d-.5,`#a6b497`);for(let e of[-1.3,1.3])Q(te,e,.69,0,.22,.65,F.d-.3,Z.green);for(let e of[-1,1])Q(te,e,.12,0,.16,.2,F.d-.5,Z.woodDark);Q(te,-.35,.91,.2,.45,.45,.45,`#e2bd8b`);let I=s.coffee;Q(r,I.x,.42,I.z,I.w,.1,I.d,Z.wood,`wood`);for(let e of[I.x-.45,I.x+.45])for(let t of[I.z-.26,I.z+.26])Q(r,e,.2,t,.09,.4,.09,Z.ink);Q(r,I.x-.2,.5,I.z,.4,.06,.3,Z.white),Fl(r,I.x+.34,.47,I.z-.08,Z.orange);for(let[e,t]of[[`armchair-a`,Math.PI/2],[`armchair-b`,-Math.PI/2]]){let n=s[e],i=$(r,n.x,0,n.z);i.rotation.y=t,Q(i,0,.68,n.d/2-.1,n.w,1,.22,`#708fa5`),Q(i,0,.38,0,n.w,.3,n.d-.3,`#708fa5`),Q(i,0,.57,-.04,.6,.18,.6,`#abc2c9`);for(let e of[-n.w/2+.1,n.w/2-.1])Q(i,e,.64,0,.18,.6,n.d-.24,`#708fa5`)}for(let e=0;e<7;e++)for(let t=0;t<6;t++)Q(r,F.x-2+e*.55,.049,5+t*.45,.545,.015,.445,(e+t)%2?`#d9c4a0`:`#dfcbaa`);for(let e of[`plant-corner-a`,`plant-corner-b`,`plant-corner-c`]){let t=s[e];D(t.x,t.z,.9)}return{office:r,obstacles:i,seats:t.seats,stations:t.seats,screens:a,displays:o}}function Jl(e,t,{placeFurniture:n}){let r=$(e),i=[],a=[],o=[],s=Object.fromEntries(t.environment.zones.map(e=>[e.id,e])),c=t.rooms,l=t.meetingRoom,{wallSpec:u,tableSurface:d,tableThickness:f,planterOffsets:p}=t.environment,{halfWidth:m,halfDepth:h,back:g,left:_}=t.shell;Q(r,0,-.3,0,t.width,.55,t.depth,Z.cream),Q(r,0,-.58,0,t.width-.35,.12,t.depth-.35,`#b7c8c8`);let v=Math.ceil(t.width/1.5),y=t.width/v;for(let e=0;e<t.depth*2;e++)for(let t=0;t<v;t++)Q(r,-m+y/2+t*y,-.005,-h+.25+e*.5,y-.015,.08,.485,[`#ccae86`,`#d2b48e`,`#d6bb98`,`#c6a680`][(e*7+t*3)%4],`wood`);Q(r,0,1.65,g,t.width,3.3,.18,Z.cream),Q(r,_,1.65,0,.18,3.3,t.depth,Z.cream),Q(r,0,.24,g+.14,t.width-.2,.38,.08,`#b3bca5`),Q(r,_+.14,.24,0,.08,.38,t.depth-.2,`#b3bca5`),Q(r,0,3.32,g,t.width+.1,.12,.26,`#f6f6e9`),Q(r,_,3.32,0,.26,.12,t.depth+.1,`#f6f6e9`);let b=cl(64,40,e=>{e.fillStyle=`#b6d6d9`,e.fillRect(0,0,64,40),e.fillStyle=`#e4eee4`,e.fillRect(5,5,19,4),e.fillRect(36,8,23,4),e.fillStyle=`#9ab7b3`;for(let t=0;t<8;t++)e.fillRect(t*9,25-t%3*4,7,20);e.fillStyle=`#c4d8cc`,e.fillRect(2,34,64,6)},!0),x=cl(64,40,e=>{e.fillStyle=`#293e40`,e.fillRect(0,0,64,40),e.fillStyle=`#52666a`,e.fillRect(0,0,64,5),e.fillRect(0,7,12,33);for(let t=0;t<7;t++)e.fillStyle=[`#e2bd8b`,`#9ec5b5`,`#839fac`][t%3],e.fillRect(16+t%2*5,10+t*4,13+t*7%25,2)},!0),S=cl(320,96,e=>{e.fillStyle=`#f4f7f1`,e.fillRect(0,0,320,96),e.fillStyle=`#5c6e70`,e.font=`bold 13px "Microsoft YaHei",monospace`,e.fillText(`SPRINT BOARD`,14,20),e.strokeStyle=`#7d9aa0`,e.lineWidth=2;for(let[t,n,r,i]of[[18,34,60,34],[110,34,54,34],[196,34,74,34]])e.strokeRect(t,n,r,i);e.beginPath(),e.moveTo(78,51),e.lineTo(110,51),e.moveTo(164,51),e.lineTo(196,51),e.stroke(),e.fillStyle=`#d57645`,e.fillRect(26,62,44,26),e.fillStyle=`#79917a`,e.fillRect(140,62,40,26),e.fillStyle=`#708fa5`,e.fillRect(226,62,40,26)}),C=e=>cl(128,40,t=>{t.fillStyle=`#f5f7f2`,t.fillRect(0,0,128,40),t.fillStyle=`#d57645`,t.fillRect(0,0,9,40),t.fillStyle=`#293635`,t.font=`bold 13px "Microsoft YaHei",monospace`,t.fillText(e.number,17,17),t.fillStyle=`#52666a`,t.font=`12px "Microsoft YaHei",monospace`,t.fillText(e.name,17,33)}),w=cl(192,112,e=>{e.fillStyle=`#edf0df`,e.fillRect(0,0,192,112),e.fillStyle=`#526568`,e.font=`bold 14px "Microsoft YaHei",monospace`,e.fillText(`FLOOR DIRECTORY`,14,22);for(let t=0;t<3;t++)e.fillStyle=[`#d6b080`,`#a7bda1`,`#9db5c1`][t],e.fillRect(14,34+t*24,12,14),e.fillStyle=`#6b7a78`,e.fillRect(34,39+t*24,132-t*22,5)}),T=cl(256,112,e=>{e.fillStyle=`#79917a`,e.fillRect(0,0,256,112),e.fillStyle=`#f8f9f5`,e.font=`bold 33px monospace`,e.fillText(`PIX OFFICE`,24,47),e.font=`12px monospace`,e.fillText(`SIX ROOMS / TWENTY-FOUR SEATS`,26,78)}),E=cl(128,96,e=>{e.fillStyle=`#2f3c3b`,e.fillRect(0,0,128,96),e.fillStyle=`#f0ead6`,e.font=`bold 12px monospace`,e.fillText(`BAR`,12,20),e.fillStyle=`#c9a477`;for(let t=0;t<4;t++)e.fillRect(12,32+t*14,84-t*12,5);e.fillStyle=`#8caa70`,e.fillRect(104,14,12,74)}),D=cl(64,40,e=>{e.fillStyle=`#22313a`,e.fillRect(0,0,64,40),e.fillStyle=`#3d5866`,e.fillRect(4,4,56,26),e.fillStyle=`#8fb3bd`,e.fillRect(8,9,20,3),e.fillRect(8,15,32,3),e.fillStyle=`#c9a477`,e.fillRect(8,21,26,3)},!0),O=new ji({color:`#cfe3e6`,transparent:!0,opacity:.3,roughness:.3}),k=(e,t,n=1,i=0)=>Il(r,e,t,n,i);function A(e){let t=s[e],n=$(r,t.x,0,t.z);Q(n,0,.63,0,t.w,.07,t.w,Z.wood,`wood`);for(let[e,t]of[[-1,-1],[1,-1],[-1,1],[1,1]])Q(n,e*.13,.3,t*.13,.06,.6,.06,Z.ink);Q(n,0,.2,0,t.w-.12,.04,.04,Z.ink)}for(let e of c)if(e.side===`north`)for(let t of[e.centerX-4.6,e.centerX,e.centerX+4.6])Q(r,t,2.05,g+.17,2.4,1.85,.12,Z.white),ll(r,t,2.05,g+.248,2.15,1.6,b),Q(r,t,2.05,g+.3,.08,1.7,.08,Z.white),Q(r,t,2.05,g+.3,2.2,.08,.08,Z.white),Q(r,t,1.12,g+.35,2.55,.12,.45,Z.white);else{let t=-g-.05;Q(r,e.centerX,.45,t,e.span[1]-e.span[0],.9,.18,Z.cream),Q(r,e.centerX,1.65,t,e.span[1]-e.span[0],1.5,.1,O),Q(r,e.centerX,.93,t,e.span[1]-e.span[0]+.06,.08,.26,Z.wood,`wood`),Q(r,e.centerX,2.42,t,e.span[1]-e.span[0]+.06,.12,.26,Z.cream);for(let n=e.span[0]+.08;n<=e.span[1];n+=3.4)Q(r,n,1.65,t,.1,1.5,.2,Z.wood)}t.environment.wallRuns.forEach(e=>Kl(r,e,u,O,t.environment.wallStyle));for(let e of c){let n=e.door+1.05;e.side===`north`?ll(r,n,1.62,-t.band+.12,.95,.3,C(e)):ll(r,n,1.62,t.band-.12,.95,.3,C(e)).rotation.y=Math.PI}ll(r,l.inner[1]+.13,1.62,l.door.z+1.05,.95,.3,C(l)).rotation.y=Math.PI/2;function j(e){let n=s[`${e.id}-table`];Wl(r,{table:n,surface:d,thickness:f,supports:t.tableSupportOffsets.flatMap(e=>[-.85,.85].map(t=>({x:n.x+e,z:n.z+t}))),planters:p.map(e=>({x:n.x+e,z:n.z}))})}function ee(e,t){let n=s[e];Q(r,n.x,.48,n.z,n.w,.95,n.d,Z.cream),Q(r,n.x,.98,n.z,n.w+.08,.07,n.d+.08,Z.wood,`wood`);let i=t.side===`north`?n.z+n.d/2+.01:n.z-n.d/2-.01;for(let e=0;e<4;e++)Q(r,n.x-2.1+e*1.4,.48,i,1.3,.78,.03,`#dde0cb`),Q(r,n.x-2.1+e*1.4,.6,i+(t.side===`north`?.03:-.03),.34,.05,.04,Z.woodDark);for(let e=0;e<6;e++)Q(r,n.x-2.4+e*.95,1.16,n.z,.34,.26+e%3*.05,.2,[Z.blue,Z.green,Z.orange,`#a6b497`,`#c27e83`][e%5]);Q(r,n.x+2.5,1.12,n.z,.6,.22,.55,Z.ink)}for(let e of c){j(e),ee(`${e.id}-storage`,e);let t=s[`${e.id}-nook`];Q(r,t.x,.52,t.z,t.w,.08,t.d,Z.wood,`wood`);for(let[e,n]of[[-.45,-.45],[.45,-.45],[-.45,.45],[.45,.45]])Q(r,t.x+e,.26,t.z+n,.09,.52,.09,Z.ink);Fl(r,t.x+.2,.56,t.z-.1,Z.white),A(`${e.id}-stool-a`),A(`${e.id}-stool-b`),k(s[`${e.id}-plant`].x,s[`${e.id}-plant`].z,.85);let n=$(r,e.span[1]-.01,1.95,e.centerZ);n.rotation.y=-Math.PI/2,Q(n,0,0,0,3.2,1.2,.1,Z.wood),Vl(o,`board`,ll(n,0,0,.06,3,1.02,S),{id:`room-tasks-${e.id}`,roomId:e.id,label:`${e.name}子任务`}),Q(n,0,-.66,.08,2.9,.06,.12,Z.wood),Q(n,0,.04,.1,.5,.05,.04,Z.orange)}a.push(...n(r,x));let M=s[`meeting-table`];Q(r,M.x,.74,M.z,M.w,.1,M.d,Z.wood,`wood`);for(let e of[M.x-(M.w/2-.25),M.x+(M.w/2-.25)])Q(r,e,.36,M.z,.12,.72,M.d-.2,Z.ink);Q(r,M.x,.82,M.z,.5,.06,.34,Z.white),Fl(r,M.x+.9,.79,M.z-.08,Z.blue);for(let e of Object.keys(s).filter(e=>e.startsWith(`meeting-chair`))){let t=s[e],n=t.z<M.z?-1:1,i=$(r,t.x,0,t.z);i.rotation.y=n>0?Math.PI:0,Q(i,0,.44,0,.46,.1,.46,`#708fa5`),Q(i,0,.74,.2,.46,.5,.1,`#708fa5`);for(let[e,t]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])Q(i,e,.19,t,.06,.38,.06,Z.ink)}for(let e=0;e<7;e++)for(let t=0;t<5;t++)Q(r,M.x-2+e*.55,.049,M.z-1.2+t*.5,.545,.015,.495,(e+t)%2?`#d9c4a0`:`#dfcbaa`);let N=$(r,_+.16,1.95,M.z);N.rotation.y=Math.PI/2,Q(N,0,0,0,2.4,1.35,.12,Z.ink),ll(N,0,0,.08,2.18,1.14,D);let P=s[`meeting-credenza`];Q(r,P.x,.5,P.z,P.w,1,P.d,Z.cream),Q(r,P.x,1.03,P.z,P.w+.06,.07,P.d+.06,Z.wood,`wood`),Q(r,M.x+2.6,1.85,l.inner[2]+.14,2.1,1.1,.1,Z.wood),Vl(o,`board`,ll(r,M.x+2.6,1.85,l.inner[2]+.2,1.92,.92,S),{id:`tasks`,label:`全部子任务`});for(let e=0;e<58;e++)for(let t=0;t<2;t++)Q(r,-15.7+e*.55+.275,.049,-.245+t*.49,.545,.015,.48,(e+t)%2?`#d7c8ad`:`#ddcfb6`);let F=$(r,-4.5,1.7,-t.band+.1);Q(F,0,0,0,2.7,1.3,.14,Z.wood),Vl(o,`topic`,ll(F,0,0,.08,2.5,1.12,T),{id:`mission`,label:`任务主题`});let te=$(r,4.5,1.95,-t.band+.11);Q(te,0,0,0,.62,.62,.12,Z.woodDark),Q(te,0,0,.08,.51,.51,.05,Z.white),Q(te,0,.09,.12,.04,.2,.02,Z.ink),Q(te,.09,0,.12,.2,.04,.02,Z.ink);let I=$(r,-4.5,1.75,t.band-.1);I.rotation.y=Math.PI,Q(I,0,0,0,2.4,1.4,.1,Z.wood),ll(I,0,0,.06,2.22,1.22,w);for(let e of[`corridor-bench-a`,`corridor-bench-b`]){let t=s[e];Q(r,t.x,.44,t.z,t.w,.1,t.d,Z.wood,`wood`);for(let e of[-t.w/2+.2,t.w/2-.2])Q(r,t.x+e,.22,t.z,.1,.44,t.d-.16,Z.ink)}let L=s[`pantry-bar`],R=s[`pantry-back`];Q(r,L.x,.53,L.z,L.w,1.02,L.d,Z.cream),Q(r,L.x,1.08,L.z,L.w+.16,.12,L.d+.14,Z.wood,`wood`);for(let e of[-1.4,0,1.4])Q(r,L.x-L.w/2-.02,.52,e,.03,.84,1.3,`#dde0cb`),Q(r,L.x-L.w/2-.05,.72,e,.06,.05,.18,Z.woodDark);Q(r,L.x,1.16,L.z-1.2,.5,.04,.62,`#c3cfcb`),Q(r,L.x-.35,1.32,L.z-.9,.06,.32,.06,`#9fb0ad`),Q(r,L.x-.31,1.42,L.z-.85,.3,.05,.05,`#9fb0ad`),Q(r,L.x+.05,1.45,L.z+.5,.56,.62,.5,Z.ink),Q(r,L.x-.36,1.48,L.z+.5,.03,.3,.34,`#657671`),Fl(r,L.x-.3,1.14,L.z-.3,Z.white),Fl(r,L.x-.3,1.14,L.z+1.1,Z.orange),Q(r,R.x,1,R.z,R.w,2,R.d,Z.cream),Q(r,R.x,2.03,R.z,R.w+.08,.08,R.d+.08,Z.wood,`wood`);for(let e=0;e<3;e++)Q(r,R.x,.45+e*.5,R.z,R.w+.06,.05,R.d-.16,`#dde0cb`);for(let e=0;e<6;e++)Q(r,R.x-.02,.62+e%3*.5,R.z-1.6+e*.65,.2,.3,.24,[Z.blue,Z.green,Z.orange,Z.woodDark][e%4]);ll(r,R.x-R.w/2-.04,1.62,R.z,1.8,.8,E).rotation.y=-Math.PI/2;for(let e of Object.keys(s).filter(e=>e.startsWith(`pantry-stool`)))A(e);let z=s[`pantry-lockers`];Q(r,z.x,.9,z.z,z.w,1.8,z.d,Z.cream),Q(r,z.x,1.83,z.z,z.w+.1,.07,z.d+.1,Z.wood,`wood`);for(let e=0;e<4;e++)for(let t=0;t<2;t++){let n=z.x-z.w/2+.36+e*.64,i=.52+t*.82;Q(r,n,i,z.z-z.d/2-.015,.56,.74,.03,`#dde0cb`),Q(r,n+.18,i,z.z-z.d/2-.04,.05,.13,.04,Z.woodDark)}for(let e of Object.keys(s).filter(e=>e.startsWith(`plant-`)))k(s[e].x,s[e].z,.9);return{office:r,obstacles:i,seats:t.seats,stations:t.seats,screens:a,displays:o}}var Yl=Object.freeze({"open-room":Ul,"long-open-room":Gl,"partitioned-rooms":ql,"partitioned-floor":Jl,empty(e,t,{placeFurniture:n,group:r}){let i=r(e);return{office:i,obstacles:[],displays:[],screens:n(i),seats:t.seats}}}),Xl=Object.freeze({screenDistance:1.42,faceOffset:.012,get forward(){return this.screenDistance+this.faceOffset}}),Zl=e=>e.map(e=>({x:e.x,z:e.z+1.18,yaw:Math.PI,exit:{x:e.x,z:e.z+2.05}}));function Ql(e,t,n){let r=$(e),i=[],{seat:a,station:o,parameters:s}=t,c=s.paletteIndex??t.stationIndex,{deskItems:l,surface:u=.98,thickness:d=.15}=s,f=u,p=d;if(t.assetId===`desk-classic`){let e=$(r,o.x,0,o.z);e.rotation.y=t.yaw,zl(e,{w:2.55,d:1.28,surface:1.175,thickness:.15});for(let t of[-1.05,1.05])Q(e,t,.54,0,.11,1.02,1,Z.white),Q(e,t,.05,0,.35,.09,1.15,Z.white);let s=1.18-Xl.screenDistance;i.push(Rl(e,{z:s,spec:Ml[`monitor-tall`],material:n}).screen),Q(e,-.05,1.21,.3,.72,.045,.25,`#e6e6d9`);for(let t=0;t<3;t++)for(let n=0;n<9;n++)Q(e,-.35+n*.073,1.239,.22+t*.07,.052,.013,.04,`#99a3a1`);Q(e,.6,1.19,.25,.36,.02,.4,Z.green),Q(e,.6,1.23,.25,.12,.06,.19,Z.white),Fl(e,-.92,1.18,.22,[Z.orange,Z.blue,Z.green][c%3]),Q(e,.9,1.22,-.23,.35,.1,.4,[Z.blue,Z.orange,Z.green][c%3]),Q(e,.9,1.28,-.2,.32,.03,.34,Z.white),Ll(r,a)}else if(t.assetId===`desk-low`){let e=$(r,t.desk.x,0,t.desk.z);e.rotation.y=a.yaw+Math.PI;let o=f,s=p,u=e=>1.18-e;zl(e,{w:2.55,d:1.28,surface:o,thickness:s});for(let t of[-1.05,1.05])Q(e,t,(o-s)/2,0,.11,o-s,1,Z.white),Q(e,t,.05,0,.35,.09,1.15,Z.white);let d=u(l.monitor.forward);i.push(Rl(e,{z:d,surface:o,faceOffset:l.monitor.faceOffset,spec:Ml[`monitor-wide`],material:n}).screen);let m=l.keyboard,h=u(m.forward);Q(e,0,o+m.thickness/2,h,.62,m.thickness,m.depth,`#e6e6d9`);for(let t=0;t<3;t++)for(let n=0;n<9;n++)Q(e,-.35+n*.073,o+m.thickness+m.keyHeight/2,h+(t-1)*.068,.052,m.keyHeight,.042,`#99a3a1`);Q(e,l.mouse.side,o+.015,u(l.mouse.forward),.12,.03,.18,Z.ink);let g=u(l.notebook.forward);Q(e,l.notebook.side,o+.02,g,.3,.04,.24,`#e6e6d9`),Q(e,l.notebook.side,o+.045,g,.3,.01,.05,[Z.orange,Z.blue,Z.green][c%3]),Fl(e,l.mug.side,o,u(l.mug.forward),[Z.orange,Z.blue,Z.green][c%3]),Ll(r,a)}else if(t.assetId===`seat-facing`){let e=Pl(a,l.monitor.forward,0);i.push(Rl(r,{...e,yaw:a.yaw+Math.PI,surface:u,faceOffset:l.monitor.faceOffset,material:n,spec:Ml[`monitor-compact`]}).screen),Bl(r,a,u,l.keyboard),s.chairStage===`afterKeyboard`&&Ll(r,a);let t=Pl(a,l.mouse.forward,l.mouse.side);Q(r,t.x,u+.015,t.z,.12,.03,.18,Z.ink);let o=Pl(a,l.notebook.forward,l.notebook.side);Q(r,o.x,u+.02,o.z,.3,.04,.24,`#e6e6d9`),Q(r,o.x,u+.045,o.z,.3,.01,.05,[Z.orange,Z.blue,Z.green][c%3]);let d=Pl(a,l.mug.forward,l.mug.side);Fl(r,d.x,u,d.z,[Z.orange,Z.blue,Z.green][c%3]),s.chairStage!==`afterKeyboard`&&Ll(r,a)}else throw Error(`Unknown workstation asset: ${t.assetId}`);return{root:r,colliders:t.colliders,anchors:t.anchors,screens:i}}var $l=Object.freeze({"desk-classic":Ql,"desk-low":Ql,"seat-facing":Ql});function eu(e,t,n){if(!Object.hasOwn($l,t.assetId))throw Error(`Unknown furniture asset: ${t.assetId}`);return $l[t.assetId](e,t,n)}function tu(e,t,n=0){return{x:e.x+Math.sin(e.yaw)*t+Math.cos(e.yaw)*n,z:e.z+Math.cos(e.yaw)*t-Math.sin(e.yaw)*n}}function nu(e,t,n,r,i=0){let a=Math.abs(Math.cos(i)),o=Math.abs(Math.sin(i));return{x:e,z:t,w:n*a+r*o,d:n*o+r*a}}function ru(e,t,n,r={}){if(t.length!==n.length)throw Error(`Workstation anchor count mismatch`);let{paletteIndices:i,...a}=r;return t.map((t,n)=>({id:`station-${n}`,assetId:e,stationIndex:n,parameters:{...a,paletteIndex:i?.[n]??n}}))}function iu(e,t){let n=t.seats[e.stationIndex],r=t.stations[e.stationIndex];if(!n||!r)throw Error(`Missing workstation anchors: ${e.id}`);let i=e.parameters??{},a=jl[e.assetId];if(e.assetId!==`desk-classic`&&(!Number.isFinite(i.surface)||i.surface<=0||!i.deskItems))throw Error(`Invalid workstation parameters`);if(i.paletteIndex!==void 0&&(!Number.isInteger(i.paletteIndex)||i.paletteIndex<0))throw Error(`Invalid workstation palette`);let o=e.assetId===`desk-classic`,s=tu(n,1.18),c=n.yaw-Math.PI,l=[];a.hasDesk&&l.push(nu(s.x,s.z,Al.desk.w,Al.desk.d,c));let u=o?{x:s.x+Math.sin(c)*1.2,z:s.z+Math.cos(c)*1.2}:n;l.push(nu(u.x,u.z,Al.chair.w,Al.chair.d,c));let d=i.deskItems?.monitor,f=o?Xl.screenDistance:d?.forward-d?.faceOffset;if(!Number.isFinite(f)||f<=0)throw Error(`Invalid monitor placement`);let p=tu(n,f);return{...e,parameters:i,seat:n,station:s,desk:s,yaw:c,colliders:l,anchors:{seat:{...n},monitor:{...p,y:o?1.7:(i.surface??.98)+.485,yaw:n.yaw+Math.PI}}}}function au(e,{thickness:t}){if(!Number.isFinite(t)||t<=0)throw Error(`Invalid wall thickness`);let n=[],r=[];for(let i of e){let e=i.axis??`x`;if(![`x`,`z`].includes(e)||![i.at,i.from,i.to].every(Number.isFinite)||i.from>=i.to)throw Error(`Invalid wall run`);let a=t=>e===`x`?t.x:t.z,o=[...i.doors??[]].sort((e,t)=>a(e)-a(t)),s=(r,a)=>{a-r<=.001||n.push(e===`x`?{x:(r+a)/2,z:i.at,w:a-r,d:t}:{x:i.at,z:(r+a)/2,w:t,d:a-r})},c=i.from;for(let t of o){let n=a(t),o=n-t.width/2,l=n+t.width/2;if(!Number.isFinite(n)||!Number.isFinite(t.width)||t.width<=.14||![-1,1].includes(t.into)||o<c||l>i.to)throw Error(`Invalid wall door`);s(c,o),c=l;let u=t.width-.14;r.push(e===`x`?{x:l-.06,z:i.at+t.into*(u/2+.06),w:.1,d:u}:{x:i.at+t.into*(u/2+.06),z:l-.06,w:u,d:.1})}s(c,i.to)}return{walls:n,leaves:r}}function ou(e){let t=Cl(e);if(!t.environment?.assetId)throw Error(`Missing environment asset`);if(!Array.isArray(t.furniture))throw Error(`Missing furniture instances`);let n=new Set,r=new Set,i=t.furniture.map(e=>{if(typeof e.id!=`string`||!e.id||n.has(e.id))throw Error(`Duplicate or missing furniture instance ID`);if(!Number.isInteger(e.stationIndex))throw Error(`Invalid furniture station`);if(r.has(e.stationIndex))throw Error(`Duplicate furniture station`);if(!Object.hasOwn(jl,e.assetId))throw Error(`Unknown furniture asset: ${e.assetId}`);return n.add(e.id),r.add(e.stationIndex),iu(e,t)});if(r.size!==t.seats.length)throw Error(`Every station requires one furniture instance`);let a=t.environment.wallRuns?au(t.environment.wallRuns,t.environment.wallSpec):{walls:[],leaves:[]},o=t.table,s=[...a.walls,...a.leaves,...o?[{x:o.x,z:o.z,w:o.w,d:o.d}]:[],...i.flatMap(e=>e.colliders),...(t.environment.zones??[]).map(({x:e,z:t,w:n,d:r})=>({x:e,z:t,w:n,d:r}))];if(s.some(e=>![e.x,e.z,e.w,e.d].every(Number.isFinite)||e.w<=0||e.d<=0))throw Error(`Invalid world collision`);return{...t,furniture:i,obstacles:s,environment:{...t.environment,...a}}}function su(e,t){let n=ou(t),r=Yl[n.environment.assetId];if(!Object.hasOwn(Yl,n.environment.assetId))throw Error(`Unknown environment asset: ${n.environment.assetId}`);let i=[],a=r(e,n,{group:$,placeFurniture(e,t){let r=t??cl(64,40,e=>{e.fillStyle=`#293e40`,e.fillRect(0,0,64,40)},!0),a=[];for(let t of n.furniture){let n=eu(e,t,r);i.push({id:t.id,stationIndex:t.stationIndex,...n}),a[t.stationIndex]=n.screens[0]}return a}}),o=[...n.obstacles,...a.obstacles];ul(a.office),Hl(a.displays,a.screens,n);let s={...a,obstacles:o,seats:n.seats,instances:i};return wl(s,n),s}var cu=Object.freeze({doubao:{id:`doubao`,name:`豆包`,role:`AI 助手`},xiaomai:{id:`xiaomai`,name:`小麦`,role:`设计师`},asen:{id:`asen`,name:`阿森`,role:`开发者`},xiaolan:{id:`xiaolan`,name:`小蓝`,role:`产品经理`},aluo:{id:`aluo`,name:`阿洛`,role:`前端开发`},xiaohe:{id:`xiaohe`,name:`小禾`,role:`插画师`},ayuan:{id:`ayuan`,name:`阿远`,role:`后端开发`},xiaotao:{id:`xiaotao`,name:`小桃`,role:`运营`},amo:{id:`amo`,name:`阿墨`,role:`测试工程师`},xiaomi:{id:`xiaomi`,name:`小米`,role:`项目经理`},xiaoman:{id:`xiaoman`,name:`小满`,role:`交互设计`},azhen:{id:`azhen`,name:`阿真`,role:`视觉设计`},xiaoyou:{id:`xiaoyou`,name:`小柚`,role:`内容编辑`},xiaolu:{id:`xiaolu`,name:`小鹿`,role:`客户成功`},akuan:{id:`akuan`,name:`阿宽`,role:`运维工程师`},ayan:{id:`ayan`,name:`阿焱`,role:`算法工程师`},aze:{id:`aze`,name:`阿泽`,role:`数据分析师`},ache:{id:`ache`,name:`阿澈`,role:`解决方案`},xiaoqiao:{id:`xiaoqiao`,name:`小乔`,role:`市场专员`},ali:{id:`ali`,name:`阿栗`,role:`商务拓展`},atang:{id:`atang`,name:`阿棠`,role:`招聘`},xiaofeng:{id:`xiaofeng`,name:`小枫`,role:`技术支持`},xiaozhou:{id:`xiaozhou`,name:`小舟`,role:`财务`},alan:{id:`alan`,name:`阿岚`,role:`法务`},xiaoyu:{id:`xiaoyu`,name:`小羽`,role:`实习生`}}),lu=Object.freeze({"studio-00":{id:`studio-00`,characterId:`xiaomai`,shirt:`#d57645`,trim:`#ecad75`,pants:`#687b76`,hair:`#654330`,hairStyle:`bob`},"studio-01":{id:`studio-01`,characterId:`asen`,shirt:`#79917a`,trim:`#adba94`,pants:`#526568`,hair:`#343e39`,hairStyle:`spiky`,glasses:!0},"studio-02":{id:`studio-02`,characterId:`xiaolan`,shirt:`#708fa5`,trim:`#abc2c9`,pants:`#5b6276`,hair:`#84553a`,hairStyle:`bob`},"team-00":{id:`team-00`,characterId:`xiaomai`,signature:`斜刘海短发 · 发夹 · 橙色工装`,shirt:`#d57645`,trim:`#f3d6a0`,pants:`#687b76`,hair:`#874e2e`,shoes:`#f4ebd5`,hairStyle:`asymmetric`,outfit:`utility`,accessory:`hairclip`,eyes:`bright`,freckles:!0,height:.96,build:.94},"team-01":{id:`team-01`,characterId:`asen`,signature:`蓬松卷发 · 大耳机 · 绿色卫衣`,shirt:`#64896f`,trim:`#bed0a6`,pants:`#405667`,hair:`#343831`,skin:`#d3a17c`,shoes:`#d9e4dc`,hairStyle:`curly`,outfit:`hoodie`,accessory:`headphones`,eyes:`relaxed`,height:1.04,build:1.12},"team-02":{id:`team-02`,characterId:`xiaolan`,signature:`高马尾 · 蓝色西装 · 工作牌`,shirt:`#637f9d`,trim:`#e6e5d7`,pants:`#445669`,hair:`#69412f`,shoes:`#394c57`,hairStyle:`ponytail`,outfit:`blazer`,accessory:`badge`,eyes:`almond`,lashes:!0,height:1.07,build:.94},"team-03":{id:`team-03`,characterId:`aluo`,signature:`鸭舌帽 · 棒球夹克 · 方框眼镜`,shirt:`#b7854e`,trim:`#f2e5c9`,pants:`#4c687c`,hair:`#343944`,skin:`#d9a17d`,shoes:`#d3a96d`,hairStyle:`undercut`,outfit:`varsity`,accessory:`cap`,eyes:`narrow`,glasses:`square`,height:1.02,build:1.03},"team-04":{id:`team-04`,characterId:`xiaohe`,signature:`金色侧辫 · 贝雷帽 · 画画围裙`,shirt:`#e8dfbd`,trim:`#b7c995`,pants:`#827a66`,hair:`#c6a055`,shoes:`#926c52`,hairStyle:`braid`,outfit:`apron`,accessory:`beret`,eyes:`round`,freckles:!0,height:.93,build:.98},"team-05":{id:`team-05`,characterId:`ayuan`,signature:`束起长辫 · 胡须 · 格纹衬衫`,shirt:`#547e83`,trim:`#bdcbb2`,pants:`#465858`,hair:`#3d3029`,skin:`#b77f58`,shoes:`#574334`,hairStyle:`locs`,outfit:`plaid`,accessory:`watch`,eyes:`narrow`,beard:!0,height:1.09,build:1.08},"team-06":{id:`team-06`,characterId:`xiaotao`,signature:`粉色短发 · 蝴蝶结 · 奶白背带裤`,shirt:`#c27e83`,trim:`#f4e4c2`,pants:`#e4d5b8`,hair:`#bc7684`,shoes:`#b66b72`,hairStyle:`pixie`,outfit:`overalls`,accessory:`bow`,eyes:`bright`,lashes:!0,beautyMark:!0,height:.95,build:.96},"team-07":{id:`team-07`,characterId:`amo`,signature:`银灰侧分 · 黑框眼镜 · 紫色马甲`,shirt:`#e0ddcd`,trim:`#b3aac9`,pants:`#4c5264`,hair:`#c0c5c4`,skin:`#d6a481`,shoes:`#414953`,hairStyle:`sidepart`,outfit:`vest`,accessory:`pen`,eyes:`relaxed`,glasses:`heavy`,height:1.01,build:1.11},"team-08":{id:`team-08`,characterId:`xiaomi`,signature:`针织帽 · 圆框眼镜 · 长围巾`,shirt:`#bd9a56`,trim:`#eee0b3`,pants:`#637c78`,hair:`#654c3a`,shoes:`#6e5642`,hairStyle:`shaggy`,outfit:`cardigan`,accessory:`beanie`,eyes:`round`,glasses:`round`,height:.98,build:1.02},"floor-01":{id:`floor-01`,characterId:`xiaoman`,signature:`低发髻 · 灰蓝西装 · 腕表`,shirt:`#7fa3a8`,trim:`#e9dfc4`,pants:`#4f6272`,hair:`#3b3a44`,shoes:`#3f4a54`,hairStyle:`bun`,outfit:`blazer`,accessory:`watch`,eyes:`almond`,lashes:!0,height:.99,build:.97},"floor-02":{id:`floor-02`,characterId:`azhen`,signature:`短刺发 · 紫色马甲 · 粗框眼镜`,shirt:`#8f6f9e`,trim:`#ded3ec`,pants:`#4a4458`,hair:`#2f3138`,skin:`#d9a67f`,shoes:`#33323c`,hairStyle:`spiky`,outfit:`vest`,accessory:`pen`,eyes:`narrow`,glasses:`heavy`,height:1.03,build:1.02},"floor-06":{id:`floor-06`,characterId:`xiaoyou`,signature:`齐肩短发 · 米色开衫 · 蝴蝶结`,shirt:`#c9a0a8`,trim:`#f2e6c9`,pants:`#5c6470`,hair:`#4a3a2e`,shoes:`#7b6455`,hairStyle:`bob`,outfit:`cardigan`,accessory:`bow`,eyes:`round`,height:.97,build:.95},"floor-07":{id:`floor-07`,characterId:`xiaolu`,signature:`高马尾 · 米白棒球夹克 · 无配饰`,shirt:`#e0c48f`,trim:`#f0e5c9`,pants:`#45536b`,hair:`#2e2a26`,shoes:`#e6ded0`,hairStyle:`ponytail`,outfit:`varsity`,eyes:`bright`,lashes:!0,height:.98,build:.99},"floor-11":{id:`floor-11`,characterId:`akuan`,signature:`侧削短发 · 格纹衬衫 · 腕表`,shirt:`#6f8f7a`,trim:`#c9d8bd`,pants:`#3f4a52`,hair:`#3a3330`,skin:`#c08e68`,shoes:`#4a4438`,hairStyle:`undercut`,outfit:`plaid`,accessory:`watch`,eyes:`narrow`,beard:!0,height:1.05,build:1.1},"floor-12":{id:`floor-12`,characterId:`ayan`,signature:`蓬松卷发 · 铁锈色格纹 · 大耳机`,shirt:`#b5603f`,trim:`#e6c9a8`,pants:`#4b4a55`,hair:`#2b2320`,skin:`#c98f66`,shoes:`#3c3a3f`,hairStyle:`curly`,outfit:`plaid`,accessory:`headphones`,eyes:`relaxed`,height:1.02,build:1.05},"floor-13":{id:`floor-13`,characterId:`aze`,signature:`深棕侧分 · 藏蓝西装 · 方框眼镜`,shirt:`#5f7f9a`,trim:`#eae2cf`,pants:`#3f4a52`,hair:`#46403a`,shoes:`#39434d`,hairStyle:`sidepart`,outfit:`blazer`,accessory:`watch`,eyes:`relaxed`,glasses:`square`,height:1,build:.96},"floor-15":{id:`floor-15`,characterId:`ache`,signature:`短碎发 · 灰蓝夹克 · 鸭舌帽`,shirt:`#7a8fa8`,trim:`#e6e2d2`,pants:`#4b5566`,hair:`#2a2f38`,shoes:`#cdd6dc`,hairStyle:`pixie`,outfit:`varsity`,accessory:`cap`,eyes:`almond`,height:1.01,build:1},"floor-17":{id:`floor-17`,characterId:`xiaoqiao`,signature:`侧编发 · 珊瑚色西装 · 发夹`,shirt:`#d08a6a`,trim:`#f6e0d2`,pants:`#5a5568`,hair:`#4c3326`,shoes:`#8a6a58`,hairStyle:`braid`,outfit:`blazer`,accessory:`hairclip`,eyes:`bright`,lashes:!0,freckles:!0,height:.96,build:.94},"floor-18":{id:`floor-18`,characterId:`ali`,signature:`束发辫 · 墨绿背带裤 · 腕表`,shirt:`#7d9a86`,trim:`#d8e3cc`,pants:`#4d5a63`,hair:`#33291f`,skin:`#a9714c`,shoes:`#4a4034`,hairStyle:`locs`,outfit:`overalls`,accessory:`watch`,eyes:`narrow`,beard:!0,height:1.06,build:1.09},"floor-19":{id:`floor-19`,characterId:`atang`,signature:`短刺发 · 米白背带裤 · 蝴蝶结`,shirt:`#e8dfbd`,trim:`#cbd8b4`,pants:`#8a7f66`,hair:`#6b4a2f`,shoes:`#92795e`,hairStyle:`spiky`,outfit:`overalls`,accessory:`bow`,eyes:`round`,freckles:!0,height:.95,build:.98},"floor-20":{id:`floor-20`,characterId:`xiaofeng`,signature:`侧削短发 · 灰绿卫衣 · 鸭舌帽`,shirt:`#6f7f8f`,trim:`#c4d2c2`,pants:`#3f4a52`,hair:`#33383d`,shoes:`#dde5e6`,hairStyle:`undercut`,outfit:`hoodie`,accessory:`cap`,eyes:`relaxed`,glasses:`round`,height:1.04,build:1.03},"floor-21":{id:`floor-21`,characterId:`xiaozhou`,signature:`齐肩短发 · 灰绿马甲 · 胸牌`,shirt:`#8a9a7c`,trim:`#e4e8d4`,pants:`#46505a`,hair:`#3f3a35`,shoes:`#3f4740`,hairStyle:`bob`,outfit:`vest`,accessory:`badge`,eyes:`narrow`,glasses:`square`,height:.99,build:1},"floor-22":{id:`floor-22`,characterId:`alan`,signature:`高马尾 · 藕荷开衫 · 方框眼镜`,shirt:`#9a8fa8`,trim:`#efe6f2`,pants:`#454b5c`,hair:`#2d2a28`,shoes:`#4a4a52`,hairStyle:`ponytail`,outfit:`cardigan`,eyes:`almond`,glasses:`square`,lashes:!0,height:1.02,build:.98},"floor-23":{id:`floor-23`,characterId:`xiaoyu`,signature:`短碎发 · 橙棕工装 · 蝴蝶结`,shirt:`#d8a86a`,trim:`#f4e2c4`,pants:`#5f6b63`,hair:`#514034`,shoes:`#eadfc8`,hairStyle:`pixie`,outfit:`utility`,accessory:`bow`,eyes:`bright`,freckles:!0,height:.94,build:.92},"doubao-00":{id:`doubao-00`,characterId:`doubao`,signature:`齐肩深棕短发 · 黑色连衣裙 · 红色围巾`,shirt:`#25252b`,trim:`#d7393f`,pants:`#25252b`,hair:`#352a28`,skin:`#f0c9b3`,shoes:`#29272e`,hairStyle:`shoulder-bob`,outfit:`dress`,accessory:`scarf`,eyes:`round`,lashes:!0,height:.97,build:.94}});for(let e of[...Object.values(cu),...Object.values(lu)])Object.freeze(e);function uu(e,t){let{characterId:n,appearanceId:r,instanceId:i}=e,a=cu[n],o=lu[r];if(!a||!o||o.characterId!==n||!i)throw Error(`Invalid character reference`);if(![t.x,t.z,t.phase].every(Number.isFinite))throw Error(`Invalid character placement`);let{id:s,characterId:c,...l}=o;return{name:a.name,role:a.role,...l,x:t.x,z:t.z,phase:t.phase,characterId:n,appearanceId:r,instanceId:i}}var du=[{instanceId:`studio:actor:0`,characterId:`xiaomai`,appearanceId:`studio-00`},{instanceId:`studio:actor:1`,characterId:`asen`,appearanceId:`studio-01`},{instanceId:`studio:actor:2`,characterId:`xiaolan`,appearanceId:`studio-02`}],fu=[{instanceId:`team:actor:0`,characterId:`xiaomai`,appearanceId:`team-00`},{instanceId:`team:actor:1`,characterId:`asen`,appearanceId:`team-01`},{instanceId:`team:actor:2`,characterId:`xiaolan`,appearanceId:`team-02`},{instanceId:`team:actor:3`,characterId:`aluo`,appearanceId:`team-03`},{instanceId:`team:actor:4`,characterId:`xiaohe`,appearanceId:`team-04`},{instanceId:`team:actor:5`,characterId:`ayuan`,appearanceId:`team-05`},{instanceId:`team:actor:6`,characterId:`xiaotao`,appearanceId:`team-06`},{instanceId:`team:actor:7`,characterId:`amo`,appearanceId:`team-07`},{instanceId:`team:actor:8`,characterId:`xiaomi`,appearanceId:`team-08`}],pu=[{instanceId:`loft:actor:0`,characterId:`xiaomai`,appearanceId:`team-00`},{instanceId:`loft:actor:1`,characterId:`asen`,appearanceId:`team-01`},{instanceId:`loft:actor:2`,characterId:`xiaolan`,appearanceId:`team-02`},{instanceId:`loft:actor:3`,characterId:`aluo`,appearanceId:`team-03`},{instanceId:`loft:actor:4`,characterId:`xiaohe`,appearanceId:`team-04`},{instanceId:`loft:actor:5`,characterId:`ayuan`,appearanceId:`team-05`},{instanceId:`loft:actor:6`,characterId:`xiaotao`,appearanceId:`team-06`},{instanceId:`loft:actor:7`,characterId:`amo`,appearanceId:`team-07`},{instanceId:`loft:actor:8`,characterId:`xiaomi`,appearanceId:`team-08`}],mu=[{instanceId:`suite:actor:0`,characterId:`xiaomai`,appearanceId:`team-00`},{instanceId:`suite:actor:1`,characterId:`asen`,appearanceId:`team-01`},{instanceId:`suite:actor:2`,characterId:`xiaolan`,appearanceId:`team-02`},{instanceId:`suite:actor:3`,characterId:`aluo`,appearanceId:`team-03`},{instanceId:`suite:actor:4`,characterId:`xiaohe`,appearanceId:`team-04`},{instanceId:`suite:actor:5`,characterId:`ayuan`,appearanceId:`team-05`},{instanceId:`suite:actor:6`,characterId:`xiaotao`,appearanceId:`team-06`},{instanceId:`suite:actor:7`,characterId:`amo`,appearanceId:`team-07`},{instanceId:`suite:actor:8`,characterId:`xiaomi`,appearanceId:`team-08`}],hu=[{instanceId:`floor:actor:0`,characterId:`xiaomai`,appearanceId:`team-00`},{instanceId:`floor:actor:1`,characterId:`xiaoman`,appearanceId:`floor-01`},{instanceId:`floor:actor:2`,characterId:`azhen`,appearanceId:`floor-02`},{instanceId:`floor:actor:3`,characterId:`xiaohe`,appearanceId:`team-04`},{instanceId:`floor:actor:4`,characterId:`xiaolan`,appearanceId:`team-02`},{instanceId:`floor:actor:5`,characterId:`xiaomi`,appearanceId:`team-08`},{instanceId:`floor:actor:6`,characterId:`xiaoyou`,appearanceId:`floor-06`},{instanceId:`floor:actor:7`,characterId:`xiaolu`,appearanceId:`floor-07`},{instanceId:`floor:actor:8`,characterId:`asen`,appearanceId:`team-01`},{instanceId:`floor:actor:9`,characterId:`aluo`,appearanceId:`team-03`},{instanceId:`floor:actor:10`,characterId:`ayuan`,appearanceId:`team-05`},{instanceId:`floor:actor:11`,characterId:`akuan`,appearanceId:`floor-11`},{instanceId:`floor:actor:12`,characterId:`ayan`,appearanceId:`floor-12`},{instanceId:`floor:actor:13`,characterId:`aze`,appearanceId:`floor-13`},{instanceId:`floor:actor:14`,characterId:`amo`,appearanceId:`team-07`},{instanceId:`floor:actor:15`,characterId:`ache`,appearanceId:`floor-15`},{instanceId:`floor:actor:16`,characterId:`xiaotao`,appearanceId:`team-06`},{instanceId:`floor:actor:17`,characterId:`xiaoqiao`,appearanceId:`floor-17`},{instanceId:`floor:actor:18`,characterId:`ali`,appearanceId:`floor-18`},{instanceId:`floor:actor:19`,characterId:`atang`,appearanceId:`floor-19`},{instanceId:`floor:actor:20`,characterId:`xiaofeng`,appearanceId:`floor-20`},{instanceId:`floor:actor:21`,characterId:`xiaozhou`,appearanceId:`floor-21`},{instanceId:`floor:actor:22`,characterId:`alan`,appearanceId:`floor-22`},{instanceId:`floor:actor:23`,characterId:`xiaoyu`,appearanceId:`floor-23`}],gu=[{x:-3,z:-2.1},{x:.15,z:-2.1},{x:3.3,z:-2.1}],_u={environment:{assetId:`open-room`,windows:[-3.85,-.65],tagline:`MAKE SPACE FOR IDEAS.`,signX:3.65,loungeX:-4.48,loungeZ:1.62,tableX:-2.85,rugX:-.3,coffeeX:4.65,wallClockZ:2.7,secondaryBoard:!1},furniture:ru(`desk-classic`,Zl(gu),gu),id:`studio`,capacity:3,width:12,depth:9,bounds:{minX:-5.5,maxX:5.5,minZ:-3.9,maxZ:3.9},stations:gu,seats:Zl(gu),stationFor:[1,0,2],render:{shadowSize:10,shadowFar:35,groundSize:200},camera:{position:[12,10,14],maxZoom:4,minHeight:10.5,minWidth:16.5,closeZoom:3.2},patrol:[{x:2.65,z:2.95},{x:-.65,z:2.85},{x:.15,z:.1}],actors:du.map((e,t)=>uu(e,[{x:.3,z:1.6,phase:.2},{x:-3,z:-.92,phase:1.8},{x:3.3,z:-.92,phase:3.1}][t]))},vu=[-5.6,-.7,4.2].flatMap(e=>[-4.25,0,4.25].map(t=>({x:t,z:e}))),yu={environment:{assetId:`open-room`,windows:[-7.5,-3.9,-.3,3.3],tagline:`NINE PEOPLE. ONE TEAM.`,signX:7.35,loungeX:-8.35,loungeZ:1.6,tableX:-6.8,rugX:-9,coffeeX:8.25,wallClockZ:4.5,secondaryBoard:!0},furniture:ru(`desk-classic`,Zl(vu),vu),id:`team`,capacity:9,width:20,depth:17,bounds:{minX:-9.5,maxX:9.5,minZ:-7.9,maxZ:7.9},stations:vu,seats:Zl(vu),render:{shadowSize:16,shadowFar:50,groundSize:200},stationFor:fu.map((e,t)=>t),camera:{position:[20,18,23],minHeight:18.5,minWidth:28,closeZoom:5},patrol:[{x:6.5,z:6.8},{x:-5.75,z:6.8},{x:-6.25,z:-2.5},{x:6.5,z:-2.5}],actors:fu.map((e,t)=>uu(e,{x:vu[t].x,z:vu[t].z+(t===0?2.05:1.18),phase:.2+t*.73}))},bu=1.55,xu=1.05,Su=[-8.8,-4.4,0,4.4,8.8],Cu=[-6.6,-2.2,2.2,6.6],wu=[...Su.map(e=>({x:e,z:-1.55,yaw:0,bank:`north`})),...Cu.map(e=>({x:e,z:bu,yaw:Math.PI,bank:`south`}))],Tu={x:0,z:0,w:19.4,d:2.2,surface:.98,thickness:.15},Eu={keyboard:{forward:.72,depth:.22,thickness:.045,keyHeight:.013},monitor:Xl,mouse:{forward:.74,side:.48},notebook:{forward:.66,side:.82},mug:{forward:.8,side:-.95}},Du=[-5.5,-1.1,3.3,7.7],Ou=[{id:`bar`,x:11.95,z:-1.1,w:1,d:5},{id:`bar-back`,x:12.72,z:-1.1,w:.45,d:4.8},{id:`stool-a`,x:11.25,z:-2.9,w:.45,d:.45},{id:`stool-b`,x:11.25,z:-1.1,w:.45,d:.45},{id:`stool-c`,x:11.25,z:.7,w:.45,d:.45},{id:`file-n`,x:-12.45,z:-5.4,w:.8,d:1.2},{id:`file-s`,x:-12.45,z:5.4,w:.8,d:1.2},{id:`low-left`,x:-10,z:-7.3,w:4.5,d:1.1},{id:`low-right`,x:6.2,z:-7.35,w:10,d:.9},{id:`sofa`,x:-9,z:6.7,w:2.9,d:1.5},{id:`armchair`,x:-6.4,z:6.2,w:1,d:1},{id:`coffee`,x:-8.6,z:5.1,w:1.3,d:.8},{id:`booth`,x:-1.9,z:6.5,w:2.1,d:2.1},{id:`lockers`,x:2.8,z:7.2,w:3.4,d:.55},{id:`reader`,x:7.6,z:6.5,w:1,d:1},{id:`side`,x:6.35,z:6.7,w:.5,d:.5},{id:`lamp`,x:8.6,z:6.6,w:.35,d:.35},{id:`plant-nw`,x:-11.9,z:-6.6,w:.7,d:.7},{id:`plant-sw`,x:-11.9,z:6.6,w:.7,d:.7},{id:`plant-bk1`,x:-6.9,z:-7,w:.7,d:.7},{id:`plant-bk2`,x:2.6,z:-7,w:.7,d:.7},{id:`plant-bar`,x:11.7,z:3.2,w:.7,d:.7},{id:`plant-front`,x:5.4,z:6.9,w:.7,d:.7}],ku={x:2.6,z:3.9},Au={environment:{assetId:`long-open-room`,zones:Ou},furniture:ru(`seat-facing`,wu,wu,{surface:Tu.surface,deskItems:Eu,chairStage:`afterKeyboard`}),seating:{exitDistance:xu},render:{shadowFar:60,groundSize:200},id:`loft`,capacity:9,width:26,depth:16,bounds:{minX:-12.55,maxX:12.55,minZ:-7.55,maxZ:7.55},tableSupports:[-9.2,-4.4,0,4.4,9.2].flatMap(e=>[-.85,.85].map(t=>({x:e,z:t}))),table:Tu,planterX:Du,seats:wu,stations:wu,stationFor:wu.map((e,t)=>t),camera:{position:[24,20,28],minHeight:19,minWidth:34,closeZoom:5.5},patrol:[{x:8.6,z:-3.8},{x:-11.4,z:-3.8},{x:-11.4,z:0},{x:-10.6,z:3.8},{x:8.6,z:3.8},{x:10.5,z:2.6}],actors:pu.map((e,t)=>{let n=t===0?ku:wu[t];return uu(e,{x:n.x,z:n.z,phase:.2+t*.73})})},ju=1.05,Mu={thickness:.16,solid:.9,height:2.4},Nu=.98,Pu=.15,Fu={keyboard:{forward:.72,depth:.22,thickness:.045,keyHeight:.013},monitor:Xl,mouse:{forward:.74,side:.45},notebook:{forward:.66,side:.8},mug:{forward:.8,side:-.9}},Iu=-.2,Lu=-5,Ru=-3.8200000000000003,zu={back:-7.95,left:-12.95,halfWidth:13,halfDepth:8},Bu=[{id:`design`,name:`设计间`,number:`01`,centerX:-8.67,inner:[-12.86,-4.4],door:{x:-8.67,width:1.2,into:-1}},{id:`dev`,name:`研发间`,number:`02`,centerX:0,inner:[-4.24,4.24],door:{x:0,width:1.2,into:-1}},{id:`team`,name:`协作间`,number:`03`,centerX:8.67,inner:[4.4,12.87],door:{x:8.67,width:1.2,into:-1}}],Vu={id:`meeting`,name:`会议室`,number:`04`,inner:[-12.86,-6.98],zInner:[3.58,7.77],door:{x:-10,width:1.4,into:-1}},Hu=[{id:`design`,actors:[0,2,4]},{id:`dev`,actors:[1,3,5]},{id:`team`,actors:[6,7,8]}],Uu=Array.from({length:9}),Wu=[-2.7,0,2.7],Gu=Uu;for(let{id:e,actors:t}of Hu){let n=Bu.find(t=>t.id===e);t.forEach((t,r)=>{Uu[t]={x:n.centerX+Wu[r],z:Ru,yaw:Math.PI,room:e}})}var Ku=[{at:Iu,from:zu.left,to:12.95,doors:Bu.map(e=>e.door)},{at:Vu.zInner[0],from:zu.left,to:-6.9,doors:[Vu.door]},...[-4.32,4.32,12.95].map(e=>({at:e,from:zu.back,to:-.28,axis:`z`})),{at:-6.9,from:Vu.zInner[0]+.08,to:Vu.zInner[1],axis:`z`},{at:Vu.zInner[1],from:zu.left,to:-6.9}],qu=au(Ku,Mu),Ju=qu.walls,Yu=qu.leaves,Xu=[...Bu.flatMap(e=>[{id:`${e.id}-sideboard`,kind:`sideboard`,x:e.centerX,z:-7.5,w:5.2,d:.9},{id:`${e.id}-plant`,kind:`plant`,x:e.centerX-3.5,z:-1.2,w:.7,d:.7}]),{id:`meeting-table`,kind:`meeting-table`,x:-9.9,z:6,w:2.6,d:1},...[4.9,7.1].flatMap((e,t)=>[-10.7,-9.9,-9.1].map((n,r)=>({id:`meeting-chair-${t}-${r}`,kind:`meeting-chair`,x:n,z:e,w:.5,d:.5}))),{id:`pantry-bar`,kind:`bar`,x:-2.3,z:7.2,w:6.6,d:1.05},{id:`pantry-back`,kind:`bar-back`,x:-2.3,z:7.85,w:6.4,d:.5},...[-4.4,-2.3,-.2].map((e,t)=>({id:`stool-${t}`,kind:`stool`,x:e,z:6.35,w:.45,d:.45})),{id:`lockers`,kind:`lockers`,x:3.7,z:7.5,w:2.6,d:.55},{id:`sofa`,kind:`sofa`,x:8.4,z:6.9,w:2.9,d:1.5},{id:`coffee`,kind:`coffee`,x:8.4,z:5.4,w:1.3,d:.8},{id:`armchair-a`,kind:`armchair`,x:6.1,z:5.5,w:1,d:1},{id:`armchair-b`,kind:`armchair`,x:10.7,z:5.5,w:1,d:1},{id:`plant-corner-a`,kind:`plant`,x:12.4,z:3,w:.7,d:.7},{id:`plant-corner-b`,kind:`plant`,x:-5.9,z:4.5,w:.7,d:.7},{id:`plant-corner-c`,kind:`plant`,x:11.9,z:4.6,w:.7,d:.7}],Zu={x:0,z:2.6},Qu={environment:{assetId:`partitioned-rooms`,zones:Xu,wallRuns:Ku,wallStyle:{jambKind:`wood`},walls:Ju,leaves:Yu,wallSpec:Mu,deskSurface:Nu,deskThickness:Pu,deskItems:Fu},furniture:ru(`desk-low`,Gu,Gu,{surface:Nu,thickness:Pu,deskItems:Fu,paletteIndices:Gu.map(e=>Math.abs(Math.round(e.x)))}),seating:{exitDistance:ju},render:{shadowFar:60,groundSize:200},id:`suite`,capacity:9,width:26,depth:16,bounds:{minX:-12.55,maxX:12.55,minZ:-7.55,maxZ:7.55},shell:zu,partitionZ:Iu,deskZ:Lu,rooms:Bu,meetingRoom:Vu,seats:Gu,stations:Gu,stationFor:Gu.map((e,t)=>t),camera:{position:[24,21,28],minHeight:20,minWidth:35,closeZoom:5.5},patrol:[{x:11.6,z:1.7},{x:-11.6,z:1.7},{x:-8.67,z:1},{x:-8.67,z:-1.9},{x:-8.67,z:1},{x:0,z:1.7},{x:0,z:-1.9},{x:0,z:1.7},{x:8.67,z:1},{x:8.67,z:-1.9},{x:8.67,z:1}],actors:mu.map((e,t)=>{let n=t===0?Zu:Gu[t];return uu(e,{x:n.x,z:n.z,phase:.2+t*.73})})},$u=1.05,ed={thickness:.16,solid:.9,height:2.4},td=.98,nd=.15,rd={keyboard:{forward:.72,depth:.22,thickness:.045,keyHeight:.013},monitor:Xl,mouse:{forward:.74,side:.45},notebook:{forward:.66,side:.8},mug:{forward:.8,side:-.9}},id=[-.35,.35],ad={back:-10.95,left:-22.95,halfWidth:23,halfDepth:11},od=2.2,sd=[[-22.86,-7.74],[-7.58,7.58],[7.74,22.86]],cd=[-10.86,-2.28],ld=[2.28,10.86],ud=-17.1,dd=1.2,fd=1.4,pd=[{id:`design`,name:`设计间`,number:`A1`,side:`north`,span:sd[0],door:-12},{id:`product`,name:`产品间`,number:`A2`,side:`north`,span:sd[1],door:0},{id:`dev`,name:`研发间`,number:`A3`,side:`north`,span:sd[2],door:12},{id:`algo`,name:`算法间`,number:`B1`,side:`south`,span:sd[0],door:-12},{id:`ops`,name:`运营间`,number:`B2`,side:`south`,span:sd[1],door:0},{id:`staff`,name:`职能间`,number:`B3`,side:`south`,span:sd[2],door:12}].map(e=>{let t=e.side===`north`,n=(e.span[0]+e.span[1])/2;return{...e,centerX:n,inner:[e.span[0],e.span[1],...t?cd:ld],centerZ:t?(cd[0]+cd[1])/2:(ld[0]+ld[1])/2,doorZ:t?-2.2:od,doorInto:t?-1:1,outerZ:t?cd[0]+.42:ld[1]-.42}}),md={id:`meeting`,name:`会议室`,number:`C1`,inner:[ad.left+.09,-17.220000000000002,-2.12,2.12],door:{z:0,width:fd,into:-1}},hd=[];for(let e of pd)for(let[t,n,r]of[[-1.35,-1.55,0],[1.35,-1.55,0],[-1.35,1.55,Math.PI],[1.35,1.55,Math.PI]])hd.push({x:e.centerX+t,z:e.centerZ+n,yaw:r,room:e.id,table:{x:e.centerX,z:e.centerZ}});var gd=hd,_d=[{at:-2.2,from:ad.left,to:22.95,axis:`x`,doors:pd.filter(e=>e.side===`north`).map(e=>({x:e.door,width:dd,into:-1}))},{at:od,from:ad.left,to:22.95,axis:`x`,doors:pd.filter(e=>e.side===`south`).map(e=>({x:e.door,width:dd,into:1}))},...[-7.66,7.66].flatMap(e=>[{at:e,from:ad.back,to:cd[1]+.08,axis:`z`},{at:e,from:ld[0]-.08,to:-ad.back,axis:`z`}]),{at:22.95,from:ad.back,to:cd[1]+.08,axis:`z`},{at:22.95,from:ld[0]-.08,to:-ad.back,axis:`z`},{at:ud,from:-2.2,to:od,axis:`z`,doors:[{z:md.door.z,width:fd,into:-1}]}],vd=au(_d,ed),yd=vd.walls,bd=vd.leaves,xd=pd.flatMap(e=>{let t=e.door<=e.centerX?e.centerX+4.3:e.centerX-4.3,n=e.door<=e.centerX?e.centerX-5.9:e.centerX+5.9;return[{id:`${e.id}-table`,kind:`table`,x:e.centerX,z:e.centerZ,w:4.9,d:2.2},{id:`${e.id}-storage`,kind:`storage`,x:e.centerX,z:e.outerZ,w:6,d:.9},{id:`${e.id}-nook`,kind:`nook`,x:t,z:e.centerZ,w:1.2,d:1.2},{id:`${e.id}-stool-a`,kind:`stool`,x:t,z:e.centerZ-1.45,w:.45,d:.45},{id:`${e.id}-stool-b`,kind:`stool`,x:t,z:e.centerZ+1.45,w:.45,d:.45},{id:`${e.id}-plant`,kind:`plant`,x:n,z:e.centerZ,w:.7,d:.7}]}),Sd={x:(ad.left+.09+ud-.12)/2,z:0},Cd=[{id:`meeting-table`,kind:`meeting-table`,x:Sd.x,z:0,w:2.6,d:1},...[-1.1,0,1.1].flatMap(e=>[-1,1].map(t=>({id:`meeting-chair-${e}-${t}`,kind:`meeting-chair`,x:Sd.x+e,z:t*.85,w:.5,d:.5}))),{id:`meeting-credenza`,kind:`storage`,x:-19.6,z:1.85,w:1.6,d:.55},{id:`pantry-bar`,kind:`bar`,x:22.2,z:0,w:1.1,d:4},{id:`pantry-back`,kind:`bar-back`,x:22.85,z:0,w:.4,d:4.1},...[-1.35,0,1.35].map((e,t)=>({id:`pantry-stool-${t}`,kind:`stool`,x:21.3,z:e,w:.45,d:.45})),{id:`pantry-lockers`,kind:`lockers`,x:19.2,z:1.8,w:2.6,d:.55},{id:`corridor-bench-a`,kind:`bench`,x:6.5,z:-1.85,w:2.2,d:.5},{id:`corridor-bench-b`,kind:`bench`,x:-6.5,z:1.85,w:2.2,d:.5},{id:`plant-west`,kind:`plant`,x:-15.8,z:-1.7,w:.7,d:.7},{id:`plant-east`,kind:`plant`,x:16.2,z:1.7,w:.7,d:.7},{id:`plant-pantry-a`,kind:`plant`,x:18.1,z:-1.7,w:.7,d:.7},{id:`plant-pantry-b`,kind:`plant`,x:20.4,z:-1.8,w:.7,d:.7}],wd=[...xd,...Cd],Td=[`design`,`product`,`dev`,`algo`,`ops`,`staff`],Ed={x:-13.6,z:-4.2},Dd=hu.map((e,t)=>{let n=pd.find(e=>e.id===Td[Math.floor(t/4)]),r=hd[t];if(!n||!r)throw Error(`no seat for ${e.instanceId}`);let i=t===0?Ed:r;return uu(e,{x:i.x,z:i.z,phase:.2+t*.61})}),Od={environment:{assetId:`partitioned-floor`,zones:wd,walls:yd,leaves:bd,wallRuns:_d,wallSpec:ed,tableSurface:td,tableThickness:nd,deskItems:rd,planterOffsets:id},furniture:ru(`seat-facing`,gd,gd,{surface:td,deskItems:rd,chairStage:`afterAccessories`}),seating:{exitDistance:$u},render:{shadowFar:80,groundSize:400},id:`floor`,capacity:24,width:46,depth:22,bounds:{minX:-22.55,maxX:22.55,minZ:-10.55,maxZ:10.55},tableSupportOffsets:[-2.1,0,2.1],shell:ad,band:od,meetingRoom:md,rooms:pd,seats:gd,stations:gd,stationFor:gd.map((e,t)=>t),camera:{position:[30,27,38],minHeight:36,minWidth:56,closeZoom:6},patrol:[{x:20.6,z:0},{x:-16.2,z:0},{x:-12,z:1},{x:-12,z:-3.6},{x:-12,z:1},{x:0,z:1},{x:0,z:4},{x:0,z:1},{x:12,z:-1},{x:12,z:-3.6},{x:12,z:1}],actors:Dd},kd=Object.freeze({studio:_u,team:yu,loft:Au,suite:Qu,floor:Od});function Ad(e){let t=Object.hasOwn(kd,e)?kd[e]:void 0;if(!t)throw Error(`Unknown layout: ${e}`);return t}var jd={waiting:`等待`,running:`运行中`,blocked:`受阻`,completed:`完成`,failed:`失败`,idle:`待命`},Md=e=>Object.hasOwn(jd,e),Nd=(e,t=2e3)=>typeof e==`string`?e.slice(0,t):``,Pd=e=>structuredClone(e);function Fd(e){let t,n=new Set,r=()=>{let e=Pd(t);n.forEach(t=>t(e))};function i(e){if(!e?.run?.id||!Array.isArray(e.agents)||!Array.isArray(e.subtasks))throw Error(`Invalid task snapshot`);if(!Md(e.run.status)||e.agents.some(e=>!e.id||!Md(e.status))||new Set(e.agents.map(e=>e.id)).size!==e.agents.length)throw Error(`Invalid agent snapshot`);let n=new Set(e.agents.map(e=>e.id));if(e.subtasks.some(e=>!e.id||!n.has(e.assigneeAgentId)||!Md(e.status))||new Set(e.subtasks.map(e=>e.id)).size!==e.subtasks.length)throw Error(`Invalid subtask snapshot`);t=Pd({...e,seq:e.seq??0,logs:Object.fromEntries(e.agents.map(t=>[t.id,(e.logs?.[t.id]??[]).slice(-200)]))}),r()}function a(e){if(!e||e.runId!==t.run.id||!Number.isSafeInteger(e.seq)||e.seq<=t.seq||!e.payload||typeof e.payload!=`object`)return!1;let n=e.payload,i=t.agents.find(e=>e.id===n.agentId),a=t.subtasks.find(e=>e.id===n.subtaskId);switch(e.type){case`run.updated`:if(!Md(n.status))return!1;t.run.status=n.status;break;case`subtask.created`:if(!n.id||t.subtasks.some(e=>e.id===n.id)||!t.agents.some(e=>e.id===n.assigneeAgentId)||!Md(n.status))return!1;t.subtasks.push({id:Nd(n.id,100),runId:t.run.id,title:Nd(n.title,200),description:Nd(n.description),assigneeAgentId:n.assigneeAgentId,dependsOn:[],status:n.status,summary:``});break;case`subtask.updated`:if(!a||!Md(n.status))return!1;a.status=n.status,typeof n.summary==`string`&&(a.summary=Nd(n.summary));break;case`agent.updated`:if(!i||!Md(n.status)||n.currentSubtaskId!=null&&!t.subtasks.some(e=>e.id===n.currentSubtaskId&&e.assigneeAgentId===i.id))return!1;i.status=n.status,i.currentSubtaskId=n.currentSubtaskId??null,i.currentStep=Nd(n.currentStep,300);break;case`agent.output`:{if(!i||!a||a.assigneeAgentId!==i.id||typeof n.text!=`string`||!n.id||!Number.isFinite(n.timestamp))return!1;let e=t.logs[i.id];if(e.some(e=>e.id===n.id))return!1;e.push({id:Nd(n.id,100),agentId:i.id,subtaskId:a.id,timestamp:n.timestamp,kind:[`info`,`tool`,`result`,`error`].includes(n.kind)?n.kind:`info`,text:Nd(n.text)}),e.length>200&&e.splice(0,e.length-200);break}default:return!1}return t.seq=e.seq,t.run.updatedAt=e.seq,r(),!0}return i(e),{apply:a,reset:i,getSnapshot:()=>Pd(t),subscribe(e){return n.add(e),()=>n.delete(e)},dispose(){n.clear()}}}function Id(e,t){return e.actors.map((n,r)=>{let i=`${e.id}:station:${e.stationFor[r]}`,a=t.find(e=>e.kind===`computer`&&e.stationId===i);if(!a)throw Error(`Missing computer: ${i}`);return{agentId:n.agentId??`${e.id}:agent:${r}`,actorId:n.instanceId??`${e.id}:actor:${r}`,characterId:n.characterId,appearanceId:n.appearanceId,actorIndex:r,stationId:i,displayId:a.id,roomId:a.roomId,name:n.name}})}var Ld=[[`需求梳理`,`明确主任务、子任务与工位屏幕的信息层级。`,`整理显示需求与验收条件`,[`读取五种办公室布局`,`标记黑板、白板与电脑位置`,`需求清单已确认`]],[`像素界面`,`设计中文像素文字和白板卡片的布局。`,`绘制中文像素界面`,[`加载本地中文像素字体`,`排版任务卡片与终端`,`长标题换行检查通过`]],[`数据协议`,`定义任务事件、Agent 归属与运行状态。`,`建立统一任务事件协议`,[`定义快照和增量事件`,`校验 Agent 与子任务引用`,`事件协议与模拟数据已就绪`]],[`场景接入`,`把任务内容绘制到五种场景的真实板面。`,`连接独立电脑显示纹理`,[`注册工位与显示面`,`等待字体排版结果`,`继续接入独立电脑输出`]],[`交互验证`,`检查头像菜单、镜头聚焦及中文可读性。`,`逐一检查人物电脑特写`,[`验证正面镜头与缩放`,`检查窄屏和多房间遮挡`,`全部交互检查通过`]],[`结果汇总`,`汇总子任务成果，保留本轮任务的最终输出。`,`汇总所有 Agent 的结果`,[`收集各子任务输出`,`生成任务完成摘要`,`五种场景动态任务展示已完成`]]];function Rd(e){let t=`voxel-task-demo`,n=e.map(e=>({id:e.agentId,name:e.name,status:`idle`,currentSubtaskId:null,currentStep:`等待任务分配`})),r=Ld.map(([n,r],i)=>({id:`task-${i+1}`,runId:t,title:n,description:r,assigneeAgentId:e[i%Math.min(e.length,6)].agentId,dependsOn:i>3?[`task-${i}`]:[],status:`waiting`,summary:``})),i={run:{id:t,title:`为像素办公室实现多 Agent 任务展示`,objective:`让任务主题、子任务与 Agent 输出在场景中实时可见。`,status:`running`,startedAt:0,updatedAt:0},agents:n,subtasks:r,logs:{},seq:0},a=[],o=(e,t,n)=>a.push({at:e,type:t,payload:n}),s=[1500,3e3,4500,22e3,41e3,57e3];r.forEach((e,t)=>{let n=s[t],r=n+(t===3?18e3:15e3);o(n,`subtask.updated`,{subtaskId:e.id,status:`running`}),o(n,`agent.updated`,{agentId:e.assigneeAgentId,status:`running`,currentSubtaskId:e.id,currentStep:Ld[t][2]}),Ld[t][3].forEach((r,i)=>{o(n+1500+i*5e3,`agent.output`,{id:`log-${t}-${i}`,agentId:e.assigneeAgentId,subtaskId:e.id,timestamp:n+1500+i*5e3,kind:i===2?`result`:i===1?`tool`:`info`,text:r})}),t===3&&(o(n+6500,`subtask.updated`,{subtaskId:e.id,status:`blocked`}),o(n+6500,`agent.updated`,{agentId:e.assigneeAgentId,status:`blocked`,currentSubtaskId:e.id,currentStep:`等待像素字体排版确认`}),o(n+10500,`subtask.updated`,{subtaskId:e.id,status:`running`}),o(n+10500,`agent.updated`,{agentId:e.assigneeAgentId,status:`running`,currentSubtaskId:e.id,currentStep:Ld[t][2]})),o(r,`subtask.updated`,{subtaskId:e.id,status:`completed`,summary:Ld[t][3][2]}),o(r,`agent.updated`,{agentId:e.assigneeAgentId,status:`completed`,currentSubtaskId:e.id,currentStep:Ld[t][3][2]})}),o(74e3,`run.updated`,{status:`completed`}),a.sort((e,t)=>e.at-t.at);let c=a.map((e,n)=>({...e,runId:t,seq:n+1})),l=new Set,u=0,d=0,f=!1;function p(e){if(!(f||!Number.isFinite(e)||e<0))for(u=Math.min(74e3,u+e);d<c.length&&c[d].at<=u;){let e=structuredClone(c[d++]);l.forEach(t=>t(e))}}return{kind:`mock`,getSnapshot:()=>structuredClone(i),subscribe(e){return l.add(e),()=>l.delete(e)},advance:p,pause(e){f=!!e},reset(){u=0,d=0},getPlayback:()=>({elapsed:u,duration:74e3,paused:f,completed:d===c.length}),dispose(){l.clear()}}}function zd(e){let t=document.createElement(`canvas`),n=t.getContext(`2d`),r,i;function o(){let e=new Ti(t);return e.colorSpace=ke,e.minFilter=e.magFilter=a,e.generateMipmaps=!1,e}function s(a){let s=e.kind===`computer`?a?256:384:576,c=Math.max(120,Math.round(s*e.height/e.width/12)*12);return t.width===s&&t.height===c?!1:(t.width=s,t.height=c,n.imageSmoothingEnabled=!1,r&&(r.dispose(),r=o(),i.map=r,i.needsUpdate=!0),!0)}s(!1),r=o(),i=new cr({map:r,toneMapped:!1});let c=e.mesh.material;e.mesh.material=i;let l=0;return{canvas:t,ctx:n,resize:s,draw(e){n.clearRect(0,0,t.width,t.height),n.save(),e(n,t.width,t.height),n.restore(),r.needsUpdate=!0,l++},get revision(){return l},dispose(){e.mesh.material=c,r.dispose(),i.dispose()}}}var Bd=`"Office Pixel"`,Vd=`#293635`,Hd=`#f8f9f5`,Ud=`#73817f`,Wd=`#79917a`,Gd=`#d57645`,Kd={waiting:Ud,idle:Ud,running:`#708fa5`,blocked:Gd,failed:`#a44b25`,completed:Wd};function qd(e,t,n){let r=[],i=``;for(let a of String(t??``))a===`
`?(r.push(i),i=``):(i&&e.measureText(i+a).width>n&&(r.push(i),i=``),i+=a);return r.push(i),r}var Jd=(e,t=12)=>{e.font=`${t}px ${Bd}`,e.textBaseline=`top`};function Yd(e,t,n,r,i,a=12,o=4){Jd(e,a);let s=qd(e,t,i);return s.forEach((t,i)=>e.fillText(t,n,r+i*(a+o))),s.length*(a+o)}function Xd(e,t,n,r){e.fillStyle=Kd[t]??Ud,e.fillRect(n,r+3,6,6),Jd(e),e.fillText(jd[t]??t,n+12,r)}function Zd(e,t,n,r,i=0,a=!1){if(a){e.fillStyle=Vd,e.fillRect(0,0,t,n),Jd(e,48);let a=qd(e,r.run.title,t-48);Jd(e,24);let o=qd(e,r.run.objective,t-48),s=Math.max(1,Math.floor((n-160)/28)),c=Math.max(a.length,Math.ceil(o.length/s)),l=i%c;e.fillStyle=`#c9a477`,e.fillText(`本次任务`,24,18),e.fillStyle=Kd[r.run.status],e.fillText(jd[r.run.status],t-130,18),e.fillStyle=Hd,Jd(e,48),e.fillText(a[l%a.length],24,56),e.fillStyle=`#b7ccb6`,Jd(e,24),o.slice(l%Math.ceil(o.length/s)*s).slice(0,s).forEach((t,n)=>e.fillText(t,24,116+n*28));let u=r.subtasks.filter(e=>e.status===`completed`).length;return e.fillStyle=`#52666a`,e.fillRect(24,n-48,t-48,4),e.fillStyle=Wd,e.fillRect(24,n-48,Math.round((t-48)*u/Math.max(1,r.subtasks.length)),4),e.fillStyle=Hd,e.fillText(`完成 ${u}/${r.subtasks.length}`,24,n-34),e.fillText(`${l+1}/${c}`,t-96,n-34),{page:l,pages:c}}e.fillStyle=Vd,e.fillRect(0,0,t,n),e.fillStyle=`#c9a477`,Jd(e),e.fillText(`本次任务 / MISSION`,24,18),Xd(e,r.run.status,t-100,18),Jd(e,24);let o=qd(e,r.run.title,t-48);Jd(e);let s=qd(e,r.run.objective,t-48),c=n-88,l=Math.max(1,Math.floor(c/28)-1),u=Math.ceil(o.length/l),d=Math.max(1,Math.floor((c-Math.min(o.length,l)*28)/16)),f=Math.max(u,Math.ceil(s.length/d)),p=i%f;e.fillStyle=Hd,Jd(e,24),o.slice(p%u*l,(p%u+1)*l).forEach((t,n)=>e.fillText(t,24,48+n*28)),e.fillStyle=`#b7ccb6`,Jd(e),s.slice(p%Math.ceil(s.length/d)*d).slice(0,d).forEach((t,n)=>e.fillText(t,24,48+Math.min(o.length,l)*28+n*16));let m=r.subtasks.filter(e=>e.status===`completed`).length,h=r.subtasks.length?m/r.subtasks.length:0;return e.fillStyle=`#52666a`,e.fillRect(24,n-34,t-48,4),e.fillStyle=Wd,e.fillRect(24,n-34,Math.round((t-48)*h),4),e.fillStyle=Hd,Jd(e),e.fillText(`已完成 ${m} / ${r.subtasks.length} 个子任务`,24,n-22),e.fillStyle=`#c9a477`,e.fillText(`${r.source===`orca`?`真实协作`:`模拟协作`} ${p+1}/${f}`,t-126,n-22),{page:p,pages:f}}function Qd(e,t,n,r){Jd(e);let i=Math.max(1,Math.min(3,Math.floor(t/180))),a=n>=240?2:1,o=Math.floor((t-24-(i-1)*8)/i),s=Math.floor((n-54-(a-1)*8)/a),c=Math.max(1,Math.min(2,Math.floor((s-42)/16))),l=Math.max(1,Math.floor((s-34-c*16)/16)),u=r.flatMap(t=>{let n=qd(e,t.title,o-20),r=qd(e,t.description,o-20),i=Math.max(Math.ceil(n.length/c),Math.ceil(r.length/l));return Array.from({length:i},(e,a)=>({task:t,part:a,count:i,title:n.slice(a%Math.ceil(n.length/c)*c).slice(0,c),body:r.slice(a*l,(a+1)*l)}))}),d=i*a;return{columns:i,rows:a,cw:o,ch:s,cards:u,capacity:d,pages:Math.max(1,Math.ceil(u.length/d))}}function $d(e,t,n,r,i,a,o,s=!1){if(s&&!i.length)return e.fillStyle=Hd,e.fillRect(0,0,t,n),e.fillStyle=Vd,Yd(e,`本房间暂未分配子任务
Agent 正在待命。`,24,24,t-48,24,8),{page:0,pages:1};if(s&&i.length){Jd(e,24);let s=Math.max(1,Math.min(2,Math.floor((n-96)/28))),c=i.flatMap(r=>{let i=qd(e,r.title,t-48),a=qd(e,r.description,t-48),o=Math.max(1,Math.floor((n-72-Math.min(i.length,s)*28)/28)),c=Math.max(Math.ceil(i.length/s),Math.ceil(a.length/o));return Array.from({length:c},(e,t)=>({task:r,title:i.slice(t%Math.ceil(i.length/s)*s).slice(0,s),body:a.slice(t*o,(t+1)*o)}))}),l=(a%c.length+c.length)%c.length,u=c[l];return e.fillStyle=Hd,e.fillRect(0,0,t,n),e.fillStyle=Vd,u.title.forEach((t,n)=>e.fillText(t,24,12+n*28)),e.fillStyle=`#52666a`,u.body.forEach((t,n)=>e.fillText(t,24,18+u.title.length*28+n*28)),e.fillStyle=Vd,e.fillText(r.agents.find(e=>e.id===u.task.assigneeAgentId)?.name??`未分配`,24,n-48),e.fillStyle=Kd[u.task.status],e.fillText(jd[u.task.status],t-132,n-48),Jd(e),e.fillStyle=Ud,e.fillText(`${o} · ${l+1}/${c.length}`,24,n-16),{page:l,pages:c.length}}e.fillStyle=Hd,e.fillRect(0,0,t,n),Jd(e),e.fillStyle=Vd,e.fillText(o,12,10),e.fillStyle=Ud,e.fillRect(12,28,t-24,1);let c=Qd(e,t,n,i),l=(a%c.pages+c.pages)%c.pages,{columns:u,cw:d,ch:f,capacity:p}=c;return c.cards.slice(l*p,(l+1)*p).forEach((t,n)=>{let i=12+n%u*(d+8),a=36+Math.floor(n/u)*(f+8);e.fillStyle=`#eaf0e7`,e.fillRect(i,a,d,f),e.strokeStyle=`#dfe4dd`,e.strokeRect(i+.5,a+.5,d-1,f-1),Jd(e),e.fillStyle=Vd,t.title.forEach((t,n)=>e.fillText(t,i+10,a+7+n*16)),e.fillStyle=`#52666a`,t.body.forEach((n,r)=>e.fillText(n,i+10,a+10+t.title.length*16+r*16));let o=r.agents.find(e=>e.id===t.task.assigneeAgentId)?.name??`未分配`;e.fillStyle=Vd,e.fillText(`${o}${t.count>1?` ${t.part+1}/${t.count}`:``}`,i+10,a+f-19),Xd(e,t.task.status,i+d-70,a+f-19)}),i.length||(e.fillStyle=Ud,Yd(e,`本房间暂未分配子任务
Agent 正在待命。`,24,48,t-48)),e.fillStyle=Ud,Jd(e),e.fillText(`${i.length} 个子任务`,12,n-15),e.fillText(`第 ${l+1} / ${c.pages} 页`,t-108,n-15),{page:l,pages:c.pages}}function ef(e,t,n,r,i,a=0,o=!1){let s=t<=256,c=s?24:30,l=s?30:40,u=s?46:58,d=s?64:78,f=s?72:88,p=s?20:24;e.fillStyle=Vd,e.fillRect(0,0,t,n),e.fillStyle=`#52666a`,e.fillRect(0,0,t,c),e.fillStyle=Hd,Jd(e),e.fillText(`${i.name} / AGENT`,12,10),Xd(e,i.status,t-82,10);let m=r.subtasks.find(e=>e.id===i.currentSubtaskId);e.fillStyle=`#c9a477`;let h=qd(e,m?m.title:`等待任务分配`,t-24),g=r.logs[i.id]??[],_=g.flatMap(n=>qd(e,`[${r.source===`orca`?new Date(n.timestamp).toLocaleTimeString(`zh-CN`,{hour12:!1}):`${String(Math.floor(n.timestamp/1e3)).padStart(2,`0`)}s`} ${n.kind}] ${n.text}`,t-24).map(e=>({text:e,kind:n.kind}))),v=[...h.map(e=>({text:e,kind:`title`})),...qd(e,i.currentStep,t-24).map(e=>({text:e,kind:`step`})),{text:`──────────────────────────────`,kind:`rule`}];e.fillStyle=`#c9a477`,e.fillText(h[0],12,l),e.fillStyle=`#abc2c9`,e.fillText(qd(e,i.currentStep,t-24)[0],12,u),e.fillStyle=`#52666a`,e.fillRect(12,d,t-24,1);let y=[...v.length>3?v:[],..._],b=Math.max(1,Math.floor((n-f-p)/16)),x=Math.max(0,y.length-b),S=Math.min(x,Math.max(0,a)),C=y.length-S;return y.slice(Math.max(0,C-b),C).forEach((t,n)=>{e.fillStyle=t.kind===`title`?`#c9a477`:t.kind===`result`?`#b7ccb6`:t.kind===`error`?Gd:t.kind===`tool`?`#abc2c9`:Hd,e.fillText(t.text,12,f+n*16)}),!g.length&&!m&&(e.fillStyle=Ud,e.fillText(`暂无输出 / 等待协作任务`,12,f)),e.fillStyle=`#52666a`,e.fillRect(0,n-p,t,p),e.fillStyle=Hd,e.fillText(S?`历史输出 · 向上 ${S} 行`:`最新输出 · ${g.length} 条日志`,12,n-16),o&&i.status===`running`&&!S&&(e.fillStyle=Wd,e.fillRect(t-20,n-16,7,10)),{pages:Math.max(1,Math.ceil((x+1)/b)),page:Math.ceil(S/b),maxOffset:x,offset:S,capacity:b}}function tf(e,t,n){t.mesh.updateWorldMatrix(!0,!1);let r=t.mesh.getWorldPosition(new q),i=t.mesh.getWorldQuaternion(new lt),a=new q(0,0,1).applyQuaternion(i).normalize(),o=t.mesh.getWorldScale(new q),s=t.width*o.x,c=t.height*o.y,l=Math.max(160,n.clientWidth-48)/n.clientWidth,u=Math.max(140,n.clientHeight-220)/n.clientHeight,d=Math.min((e.right-e.left)/s*l,(e.top-e.bottom)/c*u)*.94;return{target:r,position:r.clone().addScaledVector(a,.58).add(new q(0,.002,0)),zoom:d}}function nf({camera:e,controls:t,viewport:n,onPose:r,onExit:i}){let a=null,o=null;function s(i){o||={minZoom:t.minZoom,maxZoom:t.maxZoom,minPolarAngle:t.minPolarAngle,maxPolarAngle:t.maxPolarAngle},a=i,t.minZoom=.2,t.maxZoom=160,t.minPolarAngle=.01,t.maxPolarAngle=Math.PI/2+.01;let s={...tf(e,i,n),deadline:performance.now()+900};return matchMedia(`(prefers-reduced-motion: reduce)`).matches?(e.position.copy(s.position),e.zoom=s.zoom,t.target.copy(s.target),e.updateProjectionMatrix(),t.update(),r(null)):r(s),!0}function c(){o&&Object.assign(t,o),a=null,o=null,i?.()}let l=new ResizeObserver(()=>{a&&s(a)});return l.observe(n),{focus:s,exit:c,get active(){return a},dispose(){l.disconnect(),c()}}}function rf({bindings:e,getState:t,focusComputer:n,selectPerson:r,signal:i,root:a,viewport:o}){let s=document.createElement(`div`);s.className=`agent-menu`,s.id=`agent-display-menu`,s.hidden=!0,s.setAttribute(`role`,`menu`),s.setAttribute(`aria-label`,`人物操作`);let c=document.createElement(`b`),l=document.createElement(`p`),u=document.createElement(`button`);u.type=`button`,u.setAttribute(`role`,`menuitem`),u.textContent=`查看电脑屏幕`,s.append(c,l,u),a.append(s);let d=null,f=null;function p(e=!1){s.hidden=!0,d?.setAttribute(`aria-expanded`,`false`),e&&d?.focus({preventScroll:!0}),d=null,f=null}function m(){if(!d)return;let e=d.getBoundingClientRect(),t=s.getBoundingClientRect();s.style.left=`${Math.max(12,Math.min(innerWidth-t.width-12,e.left))}px`,s.style.top=`${Math.max(12,Math.min(innerHeight-t.height-12,e.top-t.height-8))}px`}function h(){if(!f)return;let e=t().agents.find(e=>e.id===f.agentId);c.textContent=`${f.name} / Agent`,l.textContent=`${jd[e?.status]??`待命`} · 专属工位`}return a.querySelectorAll(`.people [data-person], .task-people [data-agent-person]`).forEach(t=>{t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,`false`),t.setAttribute(`aria-controls`,s.id),t.addEventListener(`click`,()=>{if(d===t)return p();p(),d=t,f=e.find(e=>e.actorIndex===Number(t.dataset.person??t.dataset.agentPerson)),t.dataset.agentPerson!==void 0&&r(f.actorIndex),h(),s.hidden=!1,d.setAttribute(`aria-expanded`,`true`),m(),u.focus({preventScroll:!0})},{signal:i})}),u.addEventListener(`click`,()=>{let e=f.displayId;p(),n(e),o.focus({preventScroll:!0})},{signal:i}),document.addEventListener(`pointerdown`,e=>{d&&!s.contains(e.target)&&!d.contains(e.target)&&p()},{signal:i}),a.addEventListener(`keydown`,e=>{d&&(e.key===`Escape`&&(e.preventDefault(),p(!0)),e.key===`Tab`&&p(),[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),u.focus()))},{signal:i}),window.addEventListener(`resize`,m,{signal:i}),window.addEventListener(`scroll`,m,{signal:i,capture:!0}),{close:p,refresh:h,get hidden(){return s.hidden},dispose(){p(),s.remove()}}}function af(e){let t=Sl();try{return of(e,t)}catch(e){try{t.dispose()}catch(t){throw AggregateError([e,t],`Task display initialization failed`)}throw e}}function of({layout:e,displays:t,camera:n,controls:r,renderer:i,viewport:a,root:o,embed:s=!1,onPose:c,onExit:l,returnToRoom:u,selectPerson:d,initialSource:f},p){let m=new AbortController,{signal:h}=m;p.add(()=>m.abort());let g=(e,t,n)=>e.addEventListener(t,n,{signal:h}),_=Id(e,t),v=f??Rd(_);function y(){if(!v.getBindings)return;let e=v.getBindings();_.forEach(t=>{let n=e.find(e=>e.slot===t.actorIndex);t.agentId=n?.id??``,t.name=n?.name??`空位`})}y(),p.add(()=>v.dispose?.());let b=Fd(v.getSnapshot());p.add(()=>b.dispose());let x=e=>{if(e.type!==`snapshot`)return b.apply(e);y(),b.reset(e.snapshot)},S=v.subscribe(x);p.add(()=>S());let C=b.getSnapshot(),w=!1,T=!1,E=null,D=0,O=!1,k=0;p.add(()=>{T=!0});let A=t.map(e=>{let t=zd(e);return p.add(()=>t.dispose()),{entry:e,surface:t,key:``,page:0,offset:0,info:{page:0,pages:1}}}),j=a.parentElement,ee=document.createElement(`div`);ee.className=`task-toolbar`,ee.setAttribute(`role`,`group`),ee.setAttribute(`aria-label`,`任务展示控制`),ee.innerHTML=`<span class="task-brand"><i aria-hidden="true"></i><span data-source-label>多 AGENT / 模拟数据</span></span><button type="button" data-task-focus="mission" aria-pressed="false">任务主题</button><button type="button" data-task-focus="tasks" aria-pressed="false">子任务看板</button><button type="button" data-task-room>返回全景</button><span class="task-playback"><output data-task-time>00s</output><button type="button" data-task-pause aria-pressed="false">暂停演示</button><button type="button" data-task-replay>重新演示</button></span><span class="task-font-status" role="status">加载中文像素字体…</span>`,j.append(ee),p.add(()=>ee.remove());let M=document.createElement(`div`);M.className=`display-reader`,M.hidden=!0,M.setAttribute(`aria-label`,`显示内容翻页`),M.innerHTML=`<label data-board-picker>看板<select aria-label="选择子任务看板"></select></label><span data-display-label></span><button type="button" data-display-prev>上一页</button><output data-display-page></output><button type="button" data-display-next>下一页</button><button type="button" data-display-latest>最新输出</button>`,j.append(M),p.add(()=>M.remove());let N=(e,t=ee)=>t.querySelector(e),P;if(s){let e=document.createElement(`button`);e.type=`button`,e.textContent=`人物电脑`,e.dataset.taskPeople=``,e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-controls`,`task-people`),ee.insertBefore(e,N(`.task-playback`)),P=document.createElement(`div`),P.className=`task-people`,P.id=`task-people`,P.hidden=!0,P.setAttribute(`aria-label`,`人物头像`),_.forEach(e=>{let t=o.querySelector(`.people [data-person="${e.actorIndex}"]`),n=document.createElement(`button`);n.type=`button`,n.dataset.agentPerson=e.actorIndex;let r=t.querySelector(`.avatar`),i=r.cloneNode(!0);r.tagName===`CANVAS`&&(i.width=r.width,i.height=r.height,i.getContext(`2d`).drawImage(r,0,0));let a=document.createElement(`span`);a.textContent=e.name,n.append(i,a),P.append(n)}),ee.append(P),g(e,`click`,()=>{P.hidden=!P.hidden,e.setAttribute(`aria-expanded`,String(!P.hidden))})}let F=N(`select`,M);t.filter(e=>e.kind===`board`).sort((e,t)=>Number(!!e.roomId)-Number(!!t.roomId)).forEach(e=>{let t=document.createElement(`option`);t.value=e.id,t.textContent=e.label,F.append(t)});let te=nf({camera:n,controls:r,viewport:a,onPose:c,onExit:l});p.add(()=>te.dispose());let I=null;function L(){I===null&&(I=i.getPixelRatio()),i.setPixelRatio(Math.min(devicePixelRatio,1.75)),i.setSize(a.clientWidth,a.clientHeight)}function R(){I!==null&&(i.setPixelRatio(I),i.setSize(a.clientWidth,a.clientHeight),I=null)}p.add(()=>{j.classList.remove(`display-active`),R()});function z(){te.exit(),M.hidden=!0,j.classList.remove(`display-active`),R(),ee.querySelectorAll(`[data-task-focus]`).forEach(e=>e.setAttribute(`aria-pressed`,`false`))}function ne(e){if(p.disposed)return!1;let t=A.find(t=>t.entry.id===e);if(!t)return!1;B.close(),L(),te.focus(t.entry),P&&(P.hidden=!0,N(`[data-task-people]`).setAttribute(`aria-expanded`,`false`));let n=j.getBoundingClientRect();return(n.top<-20||n.top>innerHeight*.4)&&window.scrollTo({top:scrollY+n.top-8,behavior:matchMedia(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`}),j.classList.add(`display-active`),M.hidden=!1,o.querySelectorAll(`[data-camera]`).forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-pressed`,`false`)}),t.entry.kind===`board`&&(F.value=e),ee.querySelectorAll(`[data-task-focus]`).forEach(e=>e.setAttribute(`aria-pressed`,String(t.entry.kind===(e.dataset.taskFocus===`mission`?`topic`:`board`)))),ie(),ae(),!0}let B=rf({bindings:_,getState:()=>C,focusComputer:ne,selectPerson:d,signal:h,root:o,viewport:a});p.add(()=>B.dispose());function re(e){if(!e.roomId)return C.subtasks;let t=new Set(_.filter(t=>t.roomId===e.roomId).map(e=>e.agentId));return C.subtasks.filter(e=>t.has(e.assigneeAgentId))}function ie(){if(!w||T)return;let e=a.clientWidth<600;for(let t of A){let{entry:n,surface:r}=t;r.resize(e)&&(t.key=``);let i=n.kind===`computer`?_.find(e=>e.displayId===n.id):null,a=i?C.agents.find(e=>e.id===i.agentId):null,o=n.kind===`topic`?[C.run.title,C.run.objective,C.run.status,C.subtasks.filter(e=>e.status===`completed`).length,C.subtasks.length,t.page]:n.kind===`board`?[re(n),C.agents.map(e=>[e.id,e.name]),t.page]:[a,C.subtasks.find(e=>e.id===a?.currentSubtaskId),C.logs[a?.id],t.offset,a?.status===`running`&&O],s=JSON.stringify([e,o]);s!==t.key&&(r.draw((r,o,s)=>{t.info=n.kind===`topic`?Zd(r,o,s,C,t.page,e):n.kind===`board`?$d(r,o,s,C,re(n),t.page,n.label,e):ef(r,o,s,C,a??{id:``,name:i.name,status:`idle`,currentStep:`未连接 Agent`},t.offset,O)}),t.key=s)}B.refresh(),ae()}function ae(){let e=te.active;if(!e)return;let t=A.find(t=>t.entry===e),n=e.kind===`computer`;N(`[data-board-picker]`,M).hidden=e.kind!==`board`,N(`[data-display-label]`,M).textContent=n?`${_.find(t=>t.displayId===e.id).name}的电脑`:e.kind===`topic`?`任务主题`:``,N(`[data-display-latest]`,M).hidden=!n,N(`[data-display-prev]`,M).textContent=n?`较早输出`:`上一页`,N(`[data-display-next]`,M).textContent=n?`较新输出`:`下一页`,N(`[data-display-page]`,M).textContent=n?t.info.offset?`历史输出`:`最新输出`:`${t.info.page+1} / ${t.info.pages}`,N(`[data-display-prev]`,M).disabled=n?t.offset>=t.info.maxOffset:t.info.pages<=1,N(`[data-display-next]`,M).disabled=n?t.offset<=0:t.info.pages<=1}function oe(e){let t=A.find(e=>e.entry===te.active);t&&(t.entry.kind===`computer`?t.offset=Math.min(t.info.maxOffset,Math.max(0,t.offset-e*t.info.capacity)):t.page=(t.info.page+e+t.info.pages)%t.info.pages,ie())}function se(){let e=v.getPlayback?.();N(`.task-playback`).hidden=!e,N(`[data-source-label]`).textContent=v.kind===`mock`?`多 AGENT / 模拟数据`:`多 AGENT / 实时数据`,e&&(N(`[data-task-pause]`).textContent=e.paused?`继续演示`:`暂停演示`,N(`[data-task-pause]`).setAttribute(`aria-pressed`,String(e.paused)),N(`[data-task-time]`).textContent=`${String(Math.floor(e.elapsed/1e3)).padStart(2,`0`)}s`)}let ce=b.subscribe(e=>{C=e,ie()});p.add(ce);let le=new ResizeObserver(ie);p.add(()=>le.disconnect()),le.observe(a),ee.querySelectorAll(`[data-task-focus]`).forEach(e=>g(e,`click`,()=>ne(e.dataset.taskFocus))),g(N(`[data-task-room]`),`click`,()=>{z(),u()}),g(N(`[data-task-pause]`),`click`,()=>{v.pause?.(!v.getPlayback().paused),se()});function V(){v.reset?.(),b.reset(v.getSnapshot()),A.forEach(e=>{e.page=0,e.offset=0,e.key=``}),v.pause?.(!1),E=null,D=0,ie(),se()}g(N(`[data-task-replay]`),`click`,V),g(F,`change`,()=>ne(F.value)),g(N(`[data-display-prev]`,M),`click`,()=>oe(-1)),g(N(`[data-display-next]`,M),`click`,()=>oe(1)),g(N(`[data-display-latest]`,M),`click`,()=>{let e=A.find(e=>e.entry===te.active);e&&(e.offset=0,ie())}),o.querySelectorAll(`[data-camera]`).forEach(e=>g(e,`click`,z)),g(document,`visibilitychange`,()=>{E=null}),g(o,`keydown`,e=>{!e.defaultPrevented&&e.key===`Escape`&&te.active&&ue()&&(z(),u())});function ue(){return B.hidden}let de=N(`.task-font-status`);async function fe(){try{if(!(await document.fonts.load(`12px "Office Pixel"`,`任务主题子任务运行中像素办公室`)).length)throw Error(`Pixel font unavailable`);if(T)return;w=!0,de.hidden=!0,A.forEach(e=>{e.key=``}),ie()}catch{T||(de.hidden=!1,de.textContent=`中文像素字体加载失败，请刷新重试。`)}}fe(),se();let H={focus:ne,exit:z,pause(e){v.pause?.(e),se()},replay:V,seek(e){return v.kind!==`mock`||!Number.isFinite(e)?!1:(V(),v.advance(Math.max(0,e)),se(),!0)},setSource(e){let t=e.getSnapshot();Fd(t).dispose(),S(),v.dispose?.(),v=e,y(),b.reset(t),S=v.subscribe(x),A.forEach(e=>{e.page=0,e.offset=0,e.key=``}),E=null,ie(),se()},getState:()=>({...b.getSnapshot(),bindings:structuredClone(_),playback:v.getPlayback?.()??null,fontReady:w,focused:te.active?.id??null,surfaces:A.map(e=>({id:e.entry.id,kind:e.entry.kind,stationId:e.entry.stationId,roomId:e.entry.roomId,width:e.surface.canvas.width,height:e.surface.canvas.height,revision:e.surface.revision,page:e.info.page,pages:e.info.pages,offset:e.info.offset}))}),tick(e){if(T)return;let t=E===null?0:Math.max(0,e-E);E=e,v.advance?.(t),se();let n=v.getPlayback?.();!n?.paused&&e-k>700&&(k=e,O=!O,ie()),n&&!n.paused&&n.elapsed-D>9e3&&(D=n.elapsed,A.filter(e=>e.entry.kind!==`computer`&&e.entry!==te.active).forEach(e=>{e.page=(e.info.page+1)%e.info.pages}),ie())},dispose(){p.dispose()}};for(let e of[`focus`,`exit`,`pause`,`replay`,`seek`,`setSource`,`tick`]){let t=H[e];H[e]=(...e)=>!p.disposed&&t(...e)}return H}var sf=e=>structuredClone(e),cf=new Set([`completed`,`succeeded`]),lf=new Set([`stopped`,`cancelled`,`canceled`,`abandoned`]),uf=new Set([`failed`,`error`,`crashed`,`start_failed`]),df=(e,t)=>e.dispatchId===t.id||e.fromNodeId===t.id||e.toNodeId===t.id;function ff(e,t,n){let r=t.findLast(t=>t.type===`worker_done`&&t.dispatchId===e.id),i=r?.payload?.outcome;return i===`failed`?[`failed`,`失败`,`idle`,`failed`]:cf.has(i)?[`completed`,`完成`,`celebrate`,`completed`]:lf.has(i)?[`stopped`,`已停止`,`idle`,`failed`]:[`stop_unknown`,`start_unknown`].includes(e.status)?[`unknown`,`未知 / 待命`,`idle`,`idle`]:lf.has(e.status)||lf.has(i)?[`stopped`,`已停止`,`idle`,`failed`]:uf.has(e.status)||e.failed||i===`failed`?[`failed`,`失败`,`idle`,`failed`]:cf.has(e.status)||cf.has(i)?[`completed`,`完成`,`celebrate`,`completed`]:r?[`unknown`,`已回报，结果待判`,`idle`,`idle`]:t.some(n=>![`question`,`escalation`].includes(n.type)||n.fromNodeId!==e.id&&n.fromHandle!==e.terminalId?!1:!t.some(e=>e.id!==n.id&&e.threadId===n.id&&e.fromHandle===n.toHandle&&e.toHandle===n.fromHandle&&e.at>=n.at))&&e.end==null?[`waiting_reply`,`等回复（推断）`,`think`,`blocked`]:[`starting`,`pending`,`dispatched`].includes(e.status)&&e.end==null?[`starting`,`待启动`,`think`,`waiting`]:[`ready`,`running`].includes(e.status)&&e.end==null&&n>0?[`running`,`执行中（派发存活）`,`work`,`running`]:[`unknown`,`未知 / 待命`,`idle`,`idle`]}function pf(){let e=null,t=0,n=null,r=null,i=0,a=null,o=[],s,c=new Map,l=new Map,u=new Set;function d(a=`等待真实 Orca 数据`){let c=r?`idle`:o.length&&o.every(e=>e.state===`completed`)?`completed`:o.some(e=>e.state===`failed`||e.state===`stopped`)?`failed`:i?`running`:`idle`;s={source:`orca`,run:{id:e??`orca:empty`,title:a,objective:a,status:c,updatedAt:n},seq:++t,agents:o.map(e=>({id:e.id,name:e.name,status:e.taskStatus,currentSubtaskId:e.dispatchId,currentStep:e.label})),subtasks:o.map(e=>({id:e.dispatchId,assigneeAgentId:e.id,title:e.name,description:e.label,summary:e.output,status:e.taskStatus})),logs:Object.fromEntries(o.map(e=>[e.id,e.messages.filter(e=>Number.isFinite(e.at)).slice(-200).map(e=>({id:e.id,timestamp:e.at,kind:e.type===`worker_done`?`result`:e.type===`escalation`?`error`:`info`,text:`${e.type} · ${e.subject}\n${e.body}`}))]))};for(let e of u)e({type:`snapshot`,snapshot:sf(s)})}return d(),{kind:`orca`,getSnapshot:()=>sf(s),getBindings:()=>sf(o.filter(e=>e.slot<9)),subscribe(e){return u.add(e),()=>u.delete(e)},update(t,s,u=Date.now()){if(!t?.run?.id||!Array.isArray(t.nodes)||!Array.isArray(t.messages))throw Error(`Invalid Orca trace`);e!==t.run.id&&(c.clear(),l.clear(),o=[]),e=t.run.id,i=s?.active??0,n=u,r=null,a=t.nodes.find(e=>e.kind===`run`)?.session??null;let f=[...new Map(t.messages.map(e=>[e.id,e])).values()].sort((e,t)=>(e.at??0)-(t.at??0)||e.id.localeCompare(t.id)),p=new Map,m=t.nodes.filter(e=>e.kind===`dispatch`).sort((e,t)=>(e.start??0)-(t.start??0)||e.id.localeCompare(t.id));for(let e of m){let t=e.terminalId||e.id,n=l.get(e.id);c.has(t)||(n&&c.has(n)?(c.set(t,c.get(n)),c.delete(n)):c.set(t,c.size)),l.set(e.id,t),p.set(t,e)}o=[...p].map(([e,t])=>{let n=f.filter(e=>df(e,t)),[r,a,o,s]=ff(t,n,i);return{id:e,terminalId:t.terminalId||null,dispatchId:t.id,slot:c.get(e),name:t.task||t.inputSummary||t.session?.name||t.label||t.id,rawStatus:t.status,end:t.end,state:r,label:t.replayProjection&&r===`running`?`历史派发区间（推断）`:a,action:o,taskStatus:s,input:t.input||``,output:t.output||``,messages:n}}).sort((e,t)=>e.slot-t.slot),d(t.run.objective)},empty(t=Date.now()){e=null,i=0,o=[],a=null,c.clear(),l.clear(),n=t,r=null,d(`暂无活跃 Run，也没有可回读的上一 Run`)},fail(e=`读取失败`){r=e,i=null,o=o.map(e=>({...e,state:`unknown`,label:`读取失败 / unknown`,action:`idle`,taskStatus:`idle`})),d(s.run.objective)},getState:()=>sf({source:`orca`,runId:e,lastUpdated:n,active:i,error:r,router:a,localSeq:t,bindings:o,overflow:o.filter(e=>e.slot>=9).length,overflowActive:o.filter(e=>e.slot>=9&&[`running`,`starting`,`waiting_reply`].includes(e.state)).length}),dispose(){u.clear()}}}function mf(e){let t=[...e.nodes.flatMap(e=>[e.start,e.end]),...e.messages.map(e=>e.at)].filter(Number.isFinite),n=t.length?Math.min(...t):0;return[n,Math.max(n+1,...t,e.nodes.some(e=>e.kind===`dispatch`&&e.end==null)?Date.now():n)]}function hf(e,t){let n=e.messages.filter(e=>Number.isFinite(e.at)&&e.at<=t).map(e=>structuredClone(e)),r=e.nodes.filter(e=>e.kind===`run`||Number.isFinite(e.start)&&e.start<=t).map(e=>{let r=structuredClone(e);if(r.output=``,r.outputSummary=``,r.outputMessageId=null,delete r.delivery,r.kind===`run`)return r.end=t,r;let i=n.findLast(e=>e.type===`worker_done`&&e.dispatchId===r.id);if(r.kind===`dispatch`)r.replayProjection=!0,!i&&(r.end==null||r.end>t)&&([`ready`,`running`,`completed`,`succeeded`,`reported`,`released`,`failed`,`stopped`,`cancelled`,`abandoned`].includes(r.status)&&(r.status=`running`,r.failed=!1),r.end=null),i&&(r.output=i.body??``,r.outputSummary=i.subject??``,r.outputMessageId=i.id);else{(r.end==null||r.end>t)&&(r.status=`pending`,r.failed=!1,r.end=null);let e=n.findLast(e=>e.type===`worker_done`&&e.taskId===r.id);e&&(r.output=e.body??``,r.outputSummary=e.subject??``,r.outputMessageId=e.id)}return r}),i=r.filter(e=>e.kind===`dispatch`&&e.end==null&&!n.some(t=>t.type===`worker_done`&&t.dispatchId===e.id)).length;return{data:{run:structuredClone(e.run),nodes:r,messages:n,calls:[],outcomes:[]},summary:{active:i},at:t,projection:`recorded-intervals-as-of`}}function gf({request:e,selectedRun:t,followActive:n,selectRun:r,onData:i,onError:a,interval:o=4e3}){let s=0,c=null,l=!1,u=!1,d=!1,f=null,p=null;function m(){s++,clearTimeout(c),c=null}function h(){l&&u&&!d&&(c=setTimeout(g,o))}async function g(){if(!l||!u||d)return;if(f){h();return}let o=s,c=()=>o===s&&l&&u&&!d,m=(async()=>{try{let a=await e(`trace.live`);if(!c())return;if(!a||!Array.isArray(a.runs))throw Error(`trace.live 未返回有效列表`);let o=t()||p,s=n()?a.runs.find(e=>e.id===o)?.id||a.runs[0]?.id||o:o||a.runs[0]?.id;if(!s){i(null,{active:0},a);return}let l=await e(`trace.load`,{runId:s});if(!c())return;if(l?.run?.id!==s||!Array.isArray(l.nodes)||!Array.isArray(l.messages))throw Error(`trace.load 未返回有效 Run`);p=s,r(s,l.run.objective),i(l,a.runs.find(e=>e.id===s)??{active:0},a)}catch(e){c()&&a(e)}})();f=m;try{await m}finally{f===m&&(f=null),c()&&h()}}return{setEnabled(e){l=!!e,m(),l&&g()},show(e){u=!!e,m(),u&&g()},changed(){m(),l&&u&&g()},dispose(){d=!0,m()}}}var _f=document.getElementById(`officewrap`);_f.innerHTML=`<div class="ov-heading"><b>Office Voxel · 真实 Orca 数据 / 只读 / 非模拟</b><span id="ovRouter"></span></div>
<div class="ov-main"><section class="ov-stage"><div id="ovViewport" tabindex="0" aria-label="套间场景：拖拽旋转、滚轮缩放、点击人物看详情"></div><p id="ovFallback" role="status" hidden></p>
<div class="ov-cameras"><button data-camera="room">全景</button><button data-camera="person">人物特写</button><button data-camera="top">俯视</button><button id="ovComputer">电脑特写</button></div></section>
<aside class="ov-side"><p id="ovState" role="status"></p><p id="ovOverflow"></p><div id="ovRoster"></div><section id="ovDetail" aria-live="polite"></section></aside></div>
<div class="ov-deck"><div class="ov-row"><button id="oPlay" title="播放或暂停真实历史">▶</button><label>速度<input id="oSpeed" type="range" min="0.25" max="8" step="0.25" value="1"><output id="oSpeedVal">1×</output></label><input id="oScrub" type="range" aria-label="真实历史回放游标"><output id="oRtime"></output><button id="oToEnd">结束</button></div>
<div class="ov-row"><button id="oLive" title="直接向 Orca 宿主请求真实数据，每次链完成后间隔4秒">实时</button><label><input id="oFollow" type="checkbox">跟随活跃 Run</label><span id="oLiveTag" role="status"></span></div>
<p class="ov-note">默认固定上方所选 Run；跟随模式也优先保留当前活跃 Run。Router 不占九席。work=派发存活；回放为有时刻标记的历史区间投影，等待为推断。</p></div>`;var vf=e=>_f.querySelector(e),yf=pf(),bf=structuredClone(Ad(`suite`)),xf=null,Sf=!1,Cf=!1,wf=null,Tf=null,Ef=null,Df=0,Of=0,kf=0,Af=[0,1],jf=!1,Mf=null,Nf=0,Pf=1,Ff=!1,If=new Map,Lf=new Map;function Rf(){jf=!1,clearInterval(Mf),Mf=null,vf(`#oPlay`).textContent=`▶`}function zf(){If.forEach(clearTimeout),If.clear(),Lf.clear()}function Bf(){if(!Sf||Ff)return;let e=yf.getState().runId;if(!(xf&&Tf===e)){zf(),xf&&(xf.dispose(),xf=null,Of++),Tf=e,Ef=null;try{xf=kl({viewport:vf(`#ovViewport`),layout:structuredClone(bf),createOffice:su,managedActors:!0,personCameraOffset:[4.5,2.1,1.2],labels:{pickPerson:`右侧显示真实输入与回报`,selecting:e=>`已选择 ${e}`},onEvent(e){e.type===`selection`&&(Ef=yf.getState().bindings.find(t=>t.slot===e.index)?.id??null,xf?.camera(`person`),Vf())},mountTasks:e=>af({...e,root:_f,initialSource:yf})}),Df++,vf(`#ovFallback`).hidden=!0,xf.pause(matchMedia(`(prefers-reduced-motion: reduce)`).matches)}catch(e){vf(`#ovFallback`).hidden=!1,vf(`#ovFallback`).textContent=`场景加载失败：${e.message}`}}}function Vf(){let e=yf.getState().bindings.find(e=>e.id===Ef),t=vf(`#ovDetail`);if(t.replaceChildren(),vf(`#ovRoster`).querySelectorAll(`[data-id]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.id===Ef))),vf(`#ovComputer`).disabled=!e||e.slot>=9,!e)return;let n=(e,n)=>{let r=document.createElement(`h4`),i=document.createElement(`pre`);r.textContent=e,i.textContent=n||`暂无记录`,t.append(r,i)};n(e.name,`${e.label}\n会话 ${e.terminalId||`缺失，使用 dispatch ID`}\n派发 ${e.dispatchId}`);let r=wf?.nodes.find(t=>t.id===e.dispatchId)?.session;if(r?.terminalId){let e=document.createElement(`button`);e.textContent=`打开真实会话`,e.disabled=r.status!==`active`,e.title=r.status===`active`?`仅点击时请求宿主跳转`:`会话不可打开：${r.status}`,e.onclick=async()=>{e.disabled=!0;try{let t=await orca.plugin.request(`trace.session.open`,{session:r});e.textContent=t.opened?`已跳转`:t.reason||`会话不可打开`}catch{e.textContent=`会话跳转失败`}finally{e.disabled=r.status!==`active`}},t.append(e)}n(`输入`,e.input),n(`回报`,e.output),n(`真实消息（仅当前时刻前）`,e.messages.map(e=>`${Number.isFinite(e.at)?new Date(e.at).toLocaleTimeString(`zh-CN`,{hour12:!1}):`时间未知`} · ${e.type} · ${e.subject||``}\n${e.body||``}`).join(`

`))}function Hf(e){Ef=e.id,e.slot<9&&xf&&(xf.select(e.slot),xf.camera(`person`),xf.renderNow()),Vf()}function Uf(){if(Ff)return;Bf();let e=yf.getState();if(Sf&&xf){for(let t=0;t<9;t++){let n=e.bindings.find(e=>e.slot===t),r=n?.action??`idle`;n?.state===`completed`?((Cf||jf)&&Lf.get(n.id)!==`completed`&&!e.error&&If.set(n.id,setTimeout(()=>{If.delete(n.id),!Ff&&xf&&(xf.setActor(bf.actors[t].instanceId,{action:`idle`}),Sf&&xf.renderNow())},1800)),If.has(n.id)||(r=`idle`)):n&&If.has(n.id)&&(clearTimeout(If.get(n.id)),If.delete(n.id)),xf.setActor(bf.actors[t].instanceId,{visible:!!n,name:n?.name||`空位`,action:r}),n&&Lf.set(n.id,n.state)}xf.suspend(!1),xf.renderNow()}let t=vf(`#ovRoster`);t.replaceChildren();for(let n of e.bindings){let e=document.createElement(`button`),r=document.createElement(`b`),i=document.createElement(`span`);e.className=`ov-worker`,e.dataset.id=n.id,r.textContent=n.name,i.textContent=`${n.slot<9?`工位 ${n.slot+1}`:`超额 / 列表展示`} · ${n.label}`,e.append(r,i),e.onclick=()=>Hf(n),t.append(e)}!Ef&&e.bindings.length&&(Ef=e.bindings[0].id),vf(`#ovState`).textContent=e.error?`读取失败 / unknown · ${e.error}`:`${Cf?`实时`:`真实历史回放`} · Run ${e.runId||`暂无`} · active ${e.active??`unknown`} · ${e.lastUpdated?new Date(e.lastUpdated).toLocaleTimeString(`zh-CN`,{hour12:!1}):`尚无数据`}`,vf(`#ovRouter`).textContent=`Router：${e.router?.name||e.router?.terminalId||`暂无`} · 不占 Worker 席位`,vf(`#ovOverflow`).textContent=e.overflow?`超出九席 ${e.overflow} 人，其中活跃 ${e.overflowActive}；全部保留列表与详情。`:e.bindings.length?``:`暂无此时刻已开始的 Worker，空位隐藏。`,vf(`#oScrub`).min=Af[0],vf(`#oScrub`).max=Af[1],vf(`#oScrub`).value=kf,vf(`#oRtime`).textContent=`${new Date(kf).toLocaleTimeString(`zh-CN`,{hour12:!1})}${Cf?` · 实时`:` · 回放`}`,Vf()}function Wf(){if(!wf||Cf)return;let e=hf(wf,kf);yf.update(e.data,e.summary,kf),Uf()}function Gf(e){if(!e?.run?.id)return!1;let t=wf?.run.id!==e.run.id;return wf=structuredClone(e),Af=mf(wf),Rf(),zf(),t&&(Ef=null),kf=Af[1],Cf?(yf.update(wf,{active:0}),yf.fail(`等待宿主实时校验`),Uf()):Wf(),!0}function Kf(e){Cf=!!e,Rf(),zf();for(let e of[`oPlay`,`oSpeed`,`oScrub`,`oToEnd`])vf(`#${e}`).disabled=Cf;Cf?(yf.fail(`等待宿主实时刷新`),Uf()):wf&&(Af=mf(wf),kf=Af[1],Wf())}function qf(e,t){return Cf?e?(wf=structuredClone(e),Af=mf(wf),kf=Date.now(),yf.update(wf,t),Uf(),!0):(yf.empty(),Uf(),!0):!1}function Jf(e){Sf=!!e,Rf(),Sf?(Uf(),xf?.pause(matchMedia(`(prefers-reduced-motion: reduce)`).matches)):(xf?.pause(!0),xf?.suspend(!0))}function Yf(e){return Cf||!Number.isFinite(e)?!1:(zf(),kf=Math.max(Af[0],Math.min(Af[1],e)),Wf(),!0)}function Xf(){return Cf||!Sf||!wf?!1:jf?(Rf(),!0):(kf>=Af[1]&&Yf(Af[0]),jf=!0,Nf=performance.now(),vf(`#oPlay`).textContent=`⏸`,Mf=setInterval(()=>{let e=performance.now(),t=e-Nf;Nf=e,kf=Math.min(Af[1],kf+t*(Af[1]-Af[0])/6e4*Pf),Wf(),kf>=Af[1]&&Rf()},250),!0)}vf(`#oPlay`).onclick=Xf,vf(`#oScrub`).oninput=e=>{Rf(),Yf(Number(e.target.value))},vf(`#oSpeed`).oninput=e=>{Pf=Number(e.target.value),vf(`#oSpeedVal`).textContent=`${Pf}×`},vf(`#oToEnd`).onclick=()=>{Rf(),Yf(Af[1])},_f.querySelectorAll(`[data-camera]`).forEach(e=>e.onclick=()=>{xf?.camera(e.dataset.camera),xf?.renderNow()}),vf(`#ovComputer`).onclick=()=>{let e=yf.getState().bindings.find(e=>e.id===Ef),t=xf?.tasks.getState().bindings.find(t=>t.actorIndex===e?.slot);t&&(xf.tasks.focus(t.displayId),xf.renderNow())},window.OfficeView={mount:Gf,show:Jf,live:qf,setLive:Kf,seek:Yf,play:Xf,resize(){Sf&&(Bf(),xf?.renderNow())},fail(e){yf.fail(e||`宿主读取失败`),zf(),Uf()},createLiveController:gf,getState(){let e=yf.getState(),t=xf?.getState()??null,n=xf?.tasks.getState().bindings??[];return structuredClone({...e,mode:Cf?`live`:`replay`,projection:Cf?null:`recorded-intervals-as-of`,at:kf,bounds:Af,playing:jf,speed:Pf,shown:Sf,selected:Ef,mounts:Df,disposals:Of,bindings:e.bindings.map(e=>({...e,instanceId:t?.actors[e.slot]?.instanceId??null,stationId:n.find(t=>t.actorIndex===e.slot)?.stationId??null,displayId:n.find(t=>t.actorIndex===e.slot)?.displayId??null,action:t?.actors[e.slot]?.action??null})),scene:t,taskState:xf?.tasks.getState()??null})},dispose(){Ff||(Ff=!0,Rf(),zf(),xf?.dispose(),yf.dispose())}},window.addEventListener(`pagehide`,()=>window.OfficeView.dispose(),{once:!0})})();