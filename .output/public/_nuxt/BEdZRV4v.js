const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DactZI6-.js","./DC2SF8P_.js","./Dzgiq_US.js","./BwfotnYB.js","./entry.j8eOG4HX.css","./C1PrRzea.js"])))=>i.map(i=>d[i]);
import{d as j,q as Ae,s as ut,o as T,j as W,w as Z,b as ve,t as I,i as p,v as Y,x as Fe,_ as Le,y as ct,z as ee,c as B,a as f,f as Ue,A as ft,u as ye,B as dt,k as S,F as he,r as pe,C as Se,e as te,T as De,D as ze,E as mt,m as Pe,n as Ce}from"./BwfotnYB.js";import Be from"./DR0OH4Qe.js";import{u as ke}from"./D_89MBDE.js";const vt=j({__name:"CustomLink",props:{href:{},title:{}},setup(m){const s=m,D=Ae(),w=ut();return(c,v)=>{const d=Fe;return T(),W(d,{class:Y(["custom-link no-underline relative text-base font-semibold text-inherit w-fit",{active:p(D).fullPath===s.href}]),to:p(w)(`${s.href}`)},{default:Z(()=>[ve(I(s.title),1)]),_:1},8,["class","to"])}}}),ht=Object.assign(Le(vt,[["__scopeId","data-v-c36cf56a"]]),{__name:"CustomLink"}),pt=j({__name:"FluidCursor",props:{simResolution:{default:128},dyeResolution:{default:1440},captureResolution:{default:512},densityDissipation:{default:3.5},velocityDissipation:{default:2},pressure:{default:.1},pressureIterations:{default:20},curl:{default:3},splatRadius:{default:.2},splatForce:{default:6e3},shading:{type:Boolean,default:!0},colorUpdateSpeed:{default:10},backColor:{default:()=>({r:.5,g:0,b:0})},transparent:{type:Boolean,default:!0},class:{type:[Boolean,null,String,Object,Array]}},setup(m){const s=m;function D(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}const w=Ue(null);return ct(()=>{const c=w.value;if(!c)return;const v=[D()],d={SIM_RESOLUTION:s.simResolution,DYE_RESOLUTION:s.dyeResolution,CAPTURE_RESOLUTION:s.captureResolution,DENSITY_DISSIPATION:s.densityDissipation,VELOCITY_DISSIPATION:s.velocityDissipation,PRESSURE:s.pressure,PRESSURE_ITERATIONS:s.pressureIterations,CURL:s.curl,SPLAT_RADIUS:s.splatRadius,SPLAT_FORCE:s.splatForce,SHADING:s.shading,COLOR_UPDATE_SPEED:s.colorUpdateSpeed,BACK_COLOR:s.backColor,TRANSPARENT:s.transparent},{gl:t,ext:h}=ae(c);if(!t||!h)return;h.supportLinearFiltering||(d.DYE_RESOLUTION=256,d.SHADING=!1);function ae(e){const r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let o=e.getContext("webgl2",r);if(o||(o=e.getContext("webgl",r)||e.getContext("experimental-webgl",r)),!o)throw new Error("Unable to initialize WebGL.");const i="drawBuffers"in o;let n=!1,a=null;i?(o.getExtension("EXT_color_buffer_float"),n=!!o.getExtension("OES_texture_float_linear")):(a=o.getExtension("OES_texture_half_float"),n=!!o.getExtension("OES_texture_half_float_linear")),o.clearColor(0,0,0,1);const u=i?o.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0;let E,y,N;return i?(E=L(o,o.RGBA16F,o.RGBA,u),y=L(o,o.RG16F,o.RG,u),N=L(o,o.R16F,o.RED,u)):(E=L(o,o.RGBA,o.RGBA,u),y=L(o,o.RGBA,o.RGBA,u),N=L(o,o.RGBA,o.RGBA,u)),{gl:o,ext:{formatRGBA:E,formatRG:y,formatR:N,halfFloatTexType:u,supportLinearFiltering:n}}}function L(e,r,o,i){if(!se(e,r,o,i)){if("drawBuffers"in e){const n=e;switch(r){case n.R16F:return L(n,n.RG16F,n.RG,i);case n.RG16F:return L(n,n.RGBA16F,n.RGBA,i);default:return null}}return null}return{internalFormat:r,format:o}}function se(e,r,o,i){const n=e.createTexture();if(!n)return!1;e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,4,4,0,o,i,null);const a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function X(e){if(!e.length)return 0;let r=0;for(let o=0;o<e.length;o++)r=(r<<5)-r+e.charCodeAt(o),r|=0;return r}function _(e,r){if(!r)return e;let o="";for(const i of r)o+=`#define ${i}
`;return o+e}function A(e,r,o=null){const i=_(r,o),n=t.createShader(e);return n?(t.shaderSource(n,i),t.compileShader(n),n):null}function K(e,r){if(!e||!r)return null;const o=t.createProgram();return o?(t.attachShader(o,e),t.attachShader(o,r),t.linkProgram(o),o):null}function k(e){const r={},o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<o;i++){const n=t.getActiveUniform(e,i);n&&(r[n.name]=t.getUniformLocation(e,n.name))}return r}class z{program;uniforms;constructor(r,o){this.program=K(r,o),this.uniforms=this.program?k(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class g{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(r,o){this.vertexShader=r,this.fragmentShaderSource=o,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(r){let o=0;for(const n of r)o+=X(n);let i=this.programs[o];if(i==null){const n=A(t.FRAGMENT_SHADER,this.fragmentShaderSource,r);i=K(this.vertexShader,n),this.programs[o]=i}i!==this.activeProgram&&(i&&(this.uniforms=k(i)),this.activeProgram=i)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const C=A(t.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;
    
        void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),Ne=A(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
    
        void main () {
          gl_FragColor = texture2D(uTexture, vUv);
        }
      `),Ie=A(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;
    
        void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),Oe=`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
        uniform vec2 texelSize;
    
        vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
        }
    
        void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
            vec3 lc = texture2D(uTexture, vL).rgb;
            vec3 rc = texture2D(uTexture, vR).rgb;
            vec3 tc = texture2D(uTexture, vT).rgb;
            vec3 bc = texture2D(uTexture, vB).rgb;
    
            float dx = length(rc) - length(lc);
            float dy = length(tc) - length(bc);
    
            vec3 n = normalize(vec3(dx, dy, length(texelSize)));
            vec3 l = vec3(0.0, 0.0, 1.0);
    
            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
            c *= diffuse;
          #endif
    
          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
        }
      `,Xe=A(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;
    
        void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
        }
      `),Me=A(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;
    
        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);
    
          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    
          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }
    
        void main () {
          #ifdef MANUAL_FILTERING
            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
            vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
        }
      `,h.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ve=A(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;
    
        void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;
    
          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }
    
          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),Ye=A(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;
    
        void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),Ge=A(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;
    
        void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;
    
          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;
    
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),He=A(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;
    
        void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),$e=A(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;
    
        void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),U=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const r=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(o,i=!1)=>{t&&(o?(t.viewport(0,0,o.width,o.height),t.bindFramebuffer(t.FRAMEBUFFER,o.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let F,l,le,ue,O;const ce=new z(C,Ne),q=new z(C,Ie),R=new z(C,Xe),x=new z(C,Me),J=new z(C,Ve),Q=new z(C,Ye),P=new z(C,Ge),M=new z(C,He),V=new z(C,$e),G=new g(C,Oe);function H(e,r,o,i,n,a){t.activeTexture(t.TEXTURE0);const u=t.createTexture();t.bindTexture(t.TEXTURE_2D,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,o,e,r,0,i,n,null);const E=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,E),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,u,0),t.viewport(0,0,e,r),t.clear(t.COLOR_BUFFER_BIT);const y=1/e,N=1/r;return{texture:u,fbo:E,width:e,height:r,texelSizeX:y,texelSizeY:N,attach($){return t.activeTexture(t.TEXTURE0+$),t.bindTexture(t.TEXTURE_2D,u),$}}}function fe(e,r,o,i,n,a){const u=H(e,r,o,i,n,a),E=H(e,r,o,i,n,a);return{width:e,height:r,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,read:u,write:E,swap(){const y=this.read;this.read=this.write,this.write=y}}}function We(e,r,o,i,n,a,u){const E=H(r,o,i,n,a,u);return ce.bind(),ce.uniforms.uTexture&&t.uniform1i(ce.uniforms.uTexture,e.attach(0)),U(E,!1),E}function xe(e,r,o,i,n,a,u){return e.width===r&&e.height===o||(e.read=We(e.read,r,o,i,n,a,u),e.write=H(r,o,i,n,a,u),e.width=r,e.height=o,e.texelSizeX=1/r,e.texelSizeY=1/o),e}function re(){const e=_e(d.SIM_RESOLUTION),r=_e(d.DYE_RESOLUTION),o=h.halfFloatTexType,i=h.formatRGBA,n=h.formatRG,a=h.formatR,u=h.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),F?F=xe(F,r.width,r.height,i.internalFormat,i.format,o,u):F=fe(r.width,r.height,i.internalFormat,i.format,o,u),l?l=xe(l,e.width,e.height,n.internalFormat,n.format,o,u):l=fe(e.width,e.height,n.internalFormat,n.format,o,u),le=H(e.width,e.height,a.internalFormat,a.format,o,t.NEAREST),ue=H(e.width,e.height,a.internalFormat,a.format,o,t.NEAREST),O=fe(e.width,e.height,a.internalFormat,a.format,o,t.NEAREST)}function ge(){const e=[];d.SHADING&&e.push("SHADING"),G.setKeywords(e)}function _e(e){const r=t.drawingBufferWidth,o=t.drawingBufferHeight,i=r/o,n=i<1?1/i:i,a=Math.round(e),u=Math.round(e*n);return r>o?{width:u,height:a}:{width:a,height:u}}function b(e){const r=window.devicePixelRatio||1;return Math.floor(e*r)}ge(),re();let Te=Date.now(),oe=0;function ie(){const e=je();Ke()&&re(),qe(e),Je(),Qe(e),Ze(null),requestAnimationFrame(ie)}function je(){const e=Date.now();let r=(e-Te)/1e3;return r=Math.min(r,.016666),Te=e,r}function Ke(){const e=b(c.clientWidth),r=b(c.clientHeight);return c.width!==e||c.height!==r?(c.width=e,c.height=r,!0):!1}function qe(e){oe+=e*d.COLOR_UPDATE_SPEED,oe>=1&&(oe=lt(oe,0,1),v.forEach(r=>{r.color=ne()}))}function Je(){for(const e of v)e.moved&&(e.moved=!1,tt(e))}function Qe(e){t.disable(t.BLEND),Q.bind(),Q.uniforms.texelSize&&t.uniform2f(Q.uniforms.texelSize,l.texelSizeX,l.texelSizeY),Q.uniforms.uVelocity&&t.uniform1i(Q.uniforms.uVelocity,l.read.attach(0)),U(ue),P.bind(),P.uniforms.texelSize&&t.uniform2f(P.uniforms.texelSize,l.texelSizeX,l.texelSizeY),P.uniforms.uVelocity&&t.uniform1i(P.uniforms.uVelocity,l.read.attach(0)),P.uniforms.uCurl&&t.uniform1i(P.uniforms.uCurl,ue.attach(1)),P.uniforms.curl&&t.uniform1f(P.uniforms.curl,d.CURL),P.uniforms.dt&&t.uniform1f(P.uniforms.dt,e),U(l.write),l.swap(),J.bind(),J.uniforms.texelSize&&t.uniform2f(J.uniforms.texelSize,l.texelSizeX,l.texelSizeY),J.uniforms.uVelocity&&t.uniform1i(J.uniforms.uVelocity,l.read.attach(0)),U(le),q.bind(),q.uniforms.uTexture&&t.uniform1i(q.uniforms.uTexture,O.read.attach(0)),q.uniforms.value&&t.uniform1f(q.uniforms.value,d.PRESSURE),U(O.write),O.swap(),M.bind(),M.uniforms.texelSize&&t.uniform2f(M.uniforms.texelSize,l.texelSizeX,l.texelSizeY),M.uniforms.uDivergence&&t.uniform1i(M.uniforms.uDivergence,le.attach(0));for(let o=0;o<d.PRESSURE_ITERATIONS;o++)M.uniforms.uPressure&&t.uniform1i(M.uniforms.uPressure,O.read.attach(1)),U(O.write),O.swap();V.bind(),V.uniforms.texelSize&&t.uniform2f(V.uniforms.texelSize,l.texelSizeX,l.texelSizeY),V.uniforms.uPressure&&t.uniform1i(V.uniforms.uPressure,O.read.attach(0)),V.uniforms.uVelocity&&t.uniform1i(V.uniforms.uVelocity,l.read.attach(1)),U(l.write),l.swap(),x.bind(),x.uniforms.texelSize&&t.uniform2f(x.uniforms.texelSize,l.texelSizeX,l.texelSizeY),!h.supportLinearFiltering&&x.uniforms.dyeTexelSize&&t.uniform2f(x.uniforms.dyeTexelSize,l.texelSizeX,l.texelSizeY);const r=l.read.attach(0);x.uniforms.uVelocity&&t.uniform1i(x.uniforms.uVelocity,r),x.uniforms.uSource&&t.uniform1i(x.uniforms.uSource,r),x.uniforms.dt&&t.uniform1f(x.uniforms.dt,e),x.uniforms.dissipation&&t.uniform1f(x.uniforms.dissipation,d.VELOCITY_DISSIPATION),U(l.write),l.swap(),!h.supportLinearFiltering&&x.uniforms.dyeTexelSize&&t.uniform2f(x.uniforms.dyeTexelSize,F.texelSizeX,F.texelSizeY),x.uniforms.uVelocity&&t.uniform1i(x.uniforms.uVelocity,l.read.attach(0)),x.uniforms.uSource&&t.uniform1i(x.uniforms.uSource,F.read.attach(1)),x.uniforms.dissipation&&t.uniform1f(x.uniforms.dissipation,d.DENSITY_DISSIPATION),U(F.write),F.swap()}function Ze(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),et(e)}function et(e){const r=t.drawingBufferWidth,o=t.drawingBufferHeight;G.bind(),d.SHADING&&G.uniforms.texelSize&&t.uniform2f(G.uniforms.texelSize,1/r,1/o),G.uniforms.uTexture&&t.uniform1i(G.uniforms.uTexture,F.read.attach(0)),U(e,!1)}function tt(e){const r=e.deltaX*d.SPLAT_FORCE,o=e.deltaY*d.SPLAT_FORCE;Re(e.texcoordX,e.texcoordY,r,o,e.color)}function rt(e){const r=ne();r.r*=10,r.g*=10,r.b*=10;const o=10*(Math.random()-.5),i=30*(Math.random()-.5);Re(e.texcoordX,e.texcoordY,o,i,r)}function Re(e,r,o,i,n){R.bind(),R.uniforms.uTarget&&t.uniform1i(R.uniforms.uTarget,l.read.attach(0)),R.uniforms.aspectRatio&&t.uniform1f(R.uniforms.aspectRatio,c.width/c.height),R.uniforms.point&&t.uniform2f(R.uniforms.point,e,r),R.uniforms.color&&t.uniform3f(R.uniforms.color,o,i,0),R.uniforms.radius&&t.uniform1f(R.uniforms.radius,ot(d.SPLAT_RADIUS/100)),U(l.write),l.swap(),R.uniforms.uTarget&&t.uniform1i(R.uniforms.uTarget,F.read.attach(0)),R.uniforms.color&&t.uniform3f(R.uniforms.color,n.r,n.g,n.b),U(F.write),F.swap()}function ot(e){const r=c.width/c.height;return r>1&&(e*=r),e}function de(e,r,o,i){e.id=r,e.down=!0,e.moved=!1,e.texcoordX=o/c.width,e.texcoordY=1-i/c.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=ne()}function me(e,r,o,i){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=r/c.width,e.texcoordY=1-o/c.height,e.deltaX=nt(e.texcoordX-e.prevTexcoordX),e.deltaY=at(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=i}function it(e){e.down=!1}function nt(e){const r=c.width/c.height;return r<1&&(e*=r),e}function at(e){const r=c.width/c.height;return r>1&&(e/=r),e}function ne(){const e=st(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function st(e,r,o){let i=0,n=0,a=0;const u=Math.floor(e*6),E=e*6-u,y=o*(1-r),N=o*(1-E*r),$=o*(1-(1-E)*r);switch(u%6){case 0:i=o,n=$,a=y;break;case 1:i=N,n=o,a=y;break;case 2:i=y,n=o,a=$;break;case 3:i=y,n=N,a=o;break;case 4:i=$,n=y,a=o;break;case 5:i=o,n=y,a=N;break}return{r:i,g:n,b:a}}function lt(e,r,o){const i=o-r;return(e-r)%i+r}window.addEventListener("mousedown",e=>{const r=v[0],o=b(e.clientX),i=b(e.clientY);de(r,-1,o,i),rt(r)});function be(e){const r=v[0],o=b(e.clientX),i=b(e.clientY),n=ne();ie(),me(r,o,i,n),document.body.removeEventListener("mousemove",be)}document.body.addEventListener("mousemove",be),window.addEventListener("mousemove",e=>{const r=v[0],o=b(e.clientX),i=b(e.clientY),n=r.color;me(r,o,i,n)});function Ee(e){const r=e.targetTouches,o=v[0];for(let i=0;i<r.length;i++){const n=b(r[i].clientX),a=b(r[i].clientY);ie(),de(o,r[i].identifier,n,a)}document.body.removeEventListener("touchstart",Ee)}document.body.addEventListener("touchstart",Ee),window.addEventListener("touchstart",e=>{const r=e.targetTouches,o=v[0];for(let i=0;i<r.length;i++){const n=b(r[i].clientX),a=b(r[i].clientY);de(o,r[i].identifier,n,a)}},!1),window.addEventListener("touchmove",e=>{const r=e.targetTouches,o=v[0];for(let i=0;i<r.length;i++){const n=b(r[i].clientX),a=b(r[i].clientY);me(o,n,a,o.color)}},!1),window.addEventListener("touchend",e=>{const r=e.changedTouches,o=v[0];for(let i=0;i<r.length;i++)it(o)}),ee(()=>s.simResolution,e=>{d.SIM_RESOLUTION=e,re()}),ee(()=>s.dyeResolution,e=>{d.DYE_RESOLUTION=e,re()}),ee(()=>s.shading,e=>{d.SHADING=e,ge()}),ie()}),(c,v)=>(T(),B("div",{class:Y(["pointer-events-none fixed inset-0 z-50 size-full",[s.class]])},[f("canvas",{id:"fluid",ref_key:"canvasRef",ref:w,class:"block size-full",style:{"will-change":"contents",contain:"strict"}},null,512)],2))}}),xt=Object.assign(pt,{__name:"FluidCursor"}),gt=["aria-checked","disabled"],_t=j({__name:"SwitchComponent",props:{modelValue:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue"],setup(m,{emit:s}){const D=m,w=s;function c(){D.disabled||w("update:modelValue",!D.modelValue)}return(v,d)=>(T(),B("button",{"aria-label":"animation toggler",type:"button",role:"switch","aria-checked":m.modelValue,disabled:m.disabled,class:Y(["relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-transparent p-0.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#339af0] disabled:cursor-not-allowed disabled:opacity-60",m.modelValue?"bg-[#339af0]":"bg-gray-300 dark:bg-gray-600"]),onClick:c},[f("span",{class:Y(["block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200",m.modelValue?"ltr:translate-x-5 rtl:-translate-x-5":"translate-x-0"])},null,2)],10,gt))}}),we=Object.assign(_t,{__name:"SwitchComponent"}),Tt=()=>ft("color-mode").value,Rt={class:"flex items-center justify-between py-4 sticky top-0 bg-white dark:bg-zinc-800 z-50 shadow-[0_1px_0_rgba(17,17,26,0.1)] w-full"},bt={class:"max-w-5xl w-full flex items-center justify-between mx-auto px-4"},Et={class:"flex items-center justify-start gap-4"},yt={class:"hidden lg:flex items-center justify-end gap-4 cursor-pointer"},St={class:"hidden lg:flex items-center gap-3"},Dt={class:"text-sm font-semibold text-neutral-600 dark:text-neutral-300"},wt={class:"hidden lg:flex items-center justify-end gap-4 cursor-pointer"},At={key:0,class:"fixed top-0 right-0 h-full w-73 bg-white dark:bg-zinc-800 z-40 lg:hidden shadow-xl pt-20 px-6 overflow-y-auto"},Ft={class:"flex flex-col gap-3 mb-6"},Lt={class:"text-sm font-semibold text-neutral-600 dark:text-neutral-300"},Ut={class:"flex flex-wrap gap-3"},zt={class:"flex items-center justify-between gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600"},Pt={class:"text-sm font-semibold text-neutral-600 dark:text-neutral-300"},Ct={class:"flex flex-col gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600"},Bt={class:"text-sm font-semibold text-neutral-600 dark:text-neutral-300"},kt={class:"flex items-center gap-4"},Nt=j({__name:"Navbar",setup(m){const{animationEnabled:s}=ke(),D=Tt(),{locales:w}=ye(),{t:c}=ye(),v=dt(),d=ze(()=>w.value),t=X=>{D.preference=X},h=Ue(!1),ae=()=>{h.value=!h.value},L=()=>{h.value=!1},se=Ae();return ee(()=>se.fullPath,()=>{L()}),ee(h,X=>{X?document.body.style.overflow="hidden":document.body.style.overflow=""}),(X,_)=>{const A=ht,K=Fe,k=Be,z=xt;return T(),B("div",Rt,[f("div",bt,[f("div",Et,[S(A,{href:"/",title:X.$t("home")},null,8,["title"])]),f("div",yt,[(T(!0),B(he,null,pe(p(d),g=>(T(),W(K,{key:g.code,to:p(v)(g.code),class:"relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors","active-class":"language-active"},{default:Z(()=>[ve(I(g.langName),1)]),_:2},1032,["to"]))),128))]),f("div",St,[f("span",Dt,I(p(c)("enableAnimations")),1),S(we,{modelValue:p(s),"onUpdate:modelValue":_[0]||(_[0]=g=>Se(s)?s.value=g:null)},null,8,["modelValue"])]),f("div",wt,[S(k,{name:"ic:round-nights-stay",size:"1.5rem",class:"text-neutral-800 dark:text-slate-200",onClick:_[1]||(_[1]=g=>t("dark"))}),S(k,{name:"material-symbols:light-mode-outline-rounded",size:"1.5rem",class:"text-neutral-800 dark:text-slate-200",onClick:_[2]||(_[2]=g=>t("light"))}),S(k,{name:"material-symbols:monitor-outline",size:"1.5rem",class:"text-neutral-800 dark:text-slate-200",onClick:_[3]||(_[3]=g=>t("system"))})]),f("button",{class:"lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 hover:cursor-pointer","aria-label":"Toggle menu",onClick:ae},[f("span",{class:Y(["burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out",{"rotate-45 translate-y-1.5":p(h)}])},null,2),f("span",{class:Y(["burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5",{"opacity-0":p(h)}])},null,2),f("span",{class:Y(["burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5",{"-rotate-45 -translate-y-2":p(h)}])},null,2)])]),S(De,{name:"fade"},{default:Z(()=>[p(h)?(T(),B("div",{key:0,class:"fixed inset-0 bg-black/50 z-40 lg:hidden",onClick:L})):te("",!0)]),_:1}),S(De,{name:"slide"},{default:Z(()=>[p(h)?(T(),B("div",At,[f("div",Ft,[f("span",Lt,I(p(c)("languages")),1),f("div",Ut,[(T(!0),B(he,null,pe(p(d),g=>(T(),W(K,{key:g.code,to:p(v)(g.code),class:"relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors","active-class":"language-active",onClick:L},{default:Z(()=>[ve(I(g.langName),1)]),_:2},1032,["to"]))),128))])]),f("div",zt,[f("span",Pt,I(p(c)("enableAnimations")),1),S(we,{modelValue:p(s),"onUpdate:modelValue":_[4]||(_[4]=g=>Se(s)?s.value=g:null)},null,8,["modelValue"])]),f("div",Ct,[f("span",Bt,I(p(c)("theme")),1),f("div",kt,[f("button",{class:"p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors",onClick:_[5]||(_[5]=g=>t("dark"))},[S(k,{name:"ic:round-nights-stay",size:"1.5rem",class:"text-neutral-800 dark:text-slate-200"})]),f("button",{class:"p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors",onClick:_[6]||(_[6]=g=>t("light"))},[S(k,{name:"material-symbols:light-mode-outline-rounded",size:"1.5rem",class:"text-neutral-800 dark:text-slate-200"})]),f("button",{class:"p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors",onClick:_[7]||(_[7]=g=>t("system"))},[S(k,{name:"material-symbols:monitor-outline",size:"1.5rem",class:"text-neutral-800 dark:text-slate-200"})])])])])):te("",!0)]),_:1}),p(s)?(T(),W(z,{key:0})):te("",!0)])}}}),It=Object.assign(Le(Nt,[["__scopeId","data-v-1ea4d09b"]]),{__name:"Navbar"}),Ot={class:"px-3 md:px-0 w-full pb-4 pt-6 md:pt-12 md:pb-8"},Xt={class:"text-center mb-4"},Mt={class:"flex items-center justify-center gap-4"},Vt=["href","aria-label"],Yt=j({__name:"Footer",setup(m){const s=[{platformName:"GitHub",link:"https://github.com/abdurrahmanseyidoglu",icon:"github"},{platformName:"LinkedIn",link:"https://www.linkedin.com/in/abdurrahmanseyidoglu/",icon:"linkedin"},{platformName:"X",link:"https://x.com/ll_alsayed",icon:"x"}];return(D,w)=>{const c=Be;return T(),B("footer",Ot,[f("p",Xt,I(D.$t("copyRight"))+" "+I(new Date().getFullYear()),1),f("div",Mt,[(T(),B(he,null,pe(s,v=>f("a",{key:v.link,href:v.link,target:"_blank",rel:"noopener noreferrer","aria-label":v.platformName},[S(c,{name:`grommet-icons:${v.icon}`,size:"1.5rem",class:"text-neutral-800 dark:text-slate-200"},null,8,["name"])],8,Vt)),64))])])}}}),Gt=Object.assign(Yt,{__name:"Footer"}),Ht=()=>{const m=new Date().getMonth();return{isWinter:ze(()=>m===11||m===0||m===1)}},$t=Pe(()=>Ce(()=>import("./DactZI6-.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(m=>m.default||m)),Wt=Pe(()=>Ce(()=>import("./C1PrRzea.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url).then(m=>m.default||m)),jt={class:"relative bg-white dark:bg-zinc-800 min-h-screen text-neutral-800 dark:text-slate-200"},Kt={class:"max-w-5xl mx-auto px-4 min-h-screen"},Zt=j({__name:"default",setup(m){const{animationEnabled:s}=ke(),{isWinter:D}=Ht();return(w,c)=>{const v=It,d=$t,t=Wt,h=Gt;return T(),B("div",jt,[S(v),p(s)&&p(D)?(T(),W(d,{key:0,color:"ADD8E6",class:"absolute inset-0","min-radius":.2,"max-radius":5,speed:.5})):te("",!0),p(s)&&!p(D)?(T(),W(t,{key:w.$colorMode.value,class:"absolute inset-0",quantity:200,ease:100,color:w.$colorMode.value==="dark"?"#FFF":"#000",staticity:30,refresh:""},null,8,["color"])):te("",!0),f("div",Kt,[f("main",null,[mt(w.$slots,"default")])]),S(h)])}}});export{Zt as default};
