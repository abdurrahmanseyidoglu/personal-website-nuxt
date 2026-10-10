const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BYITeOGG.js","./DToykkJH.js","./DpT0O-Yp.js","./B8IuF8Bu.js"])))=>i.map(i=>d[i]);
import{t as e}from"./D9sxDuRF.js";import{Ut as t}from"./CvXBJccO.js";import{$ as n,B as r,Ct as i,J as a,K as o,L as s,P as c,V as l,_ as u,b as d,ct as f,d as p,f as m,i as h,m as g,nt as _,p as v,u as y,v as b,wt as x,y as S}from"./DToykkJH.js";import{d as C,h as ee,i as te,l as w,n as T,p as E,r as D,t as O}from"#entry";import{t as k}from"./9_CJjSDL.js";var A=Object.assign(O(d({__name:`CustomLink`,props:{href:{},title:{}},setup(e){let t=e,n=ee(),r=T();return(e,o)=>{let c=w;return s(),m(c,{class:i([`custom-link no-underline relative text-base font-semibold text-inherit w-fit`,{active:f(n).fullPath===t.href}]),to:f(r)(`${t.href}`)},{default:a(()=>[u(x(t.title),1)]),_:1},8,[`class`,`to`])}}}),[[`__scopeId`,`data-v-09308759`]]),{__name:`CustomLink`}),j=Object.assign(d({__name:`FluidCursor`,props:{simResolution:{default:128},dyeResolution:{default:1440},captureResolution:{default:512},densityDissipation:{default:3.5},velocityDissipation:{default:2},pressure:{default:.1},pressureIterations:{default:20},curl:{default:3},splatRadius:{default:.2},splatForce:{default:6e3},shading:{type:Boolean,default:!0},colorUpdateSpeed:{default:10},backColor:{default:()=>({r:.5,g:0,b:0})},transparent:{type:Boolean,default:!0},class:{type:[Boolean,null,String,Object,Array]}},setup(e){let t=e;function n(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}let r=_(null);return c(()=>{let e=r.value;if(!e)return;let i=[n()],a={SIM_RESOLUTION:t.simResolution,DYE_RESOLUTION:t.dyeResolution,CAPTURE_RESOLUTION:t.captureResolution,DENSITY_DISSIPATION:t.densityDissipation,VELOCITY_DISSIPATION:t.velocityDissipation,PRESSURE:t.pressure,PRESSURE_ITERATIONS:t.pressureIterations,CURL:t.curl,SPLAT_RADIUS:t.splatRadius,SPLAT_FORCE:t.splatForce,SHADING:t.shading,COLOR_UPDATE_SPEED:t.colorUpdateSpeed,PAUSED:!1,BACK_COLOR:t.backColor,TRANSPARENT:t.transparent},{gl:s,ext:c}=l(e);if(!s||!c)return;c.supportLinearFiltering||(a.DYE_RESOLUTION=256,a.SHADING=!1);function l(e){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=e.getContext(`webgl2`,t);if(n||=e.getContext(`webgl`,t)||e.getContext(`experimental-webgl`,t),!n)throw Error(`Unable to initialize WebGL.`);let r=`drawBuffers`in n,i=!1,a=null;r?(n.getExtension(`EXT_color_buffer_float`),i=!!n.getExtension(`OES_texture_float_linear`)):(a=n.getExtension(`OES_texture_half_float`),i=!!n.getExtension(`OES_texture_half_float_linear`)),n.clearColor(0,0,0,1);let o=r?n.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0,s,c,l;return r?(s=u(n,n.RGBA16F,n.RGBA,o),c=u(n,n.RG16F,n.RG,o),l=u(n,n.R16F,n.RED,o)):(s=u(n,n.RGBA,n.RGBA,o),c=u(n,n.RGBA,n.RGBA,o),l=u(n,n.RGBA,n.RGBA,o)),{gl:n,ext:{formatRGBA:s,formatRG:c,formatR:l,halfFloatTexType:o,supportLinearFiltering:i}}}function u(e,t,n,r){if(!d(e,t,n,r)){if(`drawBuffers`in e){let n=e;switch(t){case n.R16F:return u(n,n.RG16F,n.RG,r);case n.RG16F:return u(n,n.RGBA16F,n.RGBA,r);default:return null}}return null}return{internalFormat:t,format:n}}function d(e,t,n,r){let i=e.createTexture();if(!i)return!1;e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,n,r,null);let a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function f(e){if(!e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function p(e,t){if(!t)return e;let n=``;for(let e of t)n+=`#define ${e}\n`;return n+e}function m(e,t,n=null){let r=p(t,n),i=s.createShader(e);return i?(s.shaderSource(i,r),s.compileShader(i),i):null}function h(e,t){if(!e||!t)return null;let n=s.createProgram();return n?(s.attachShader(n,e),s.attachShader(n,t),s.linkProgram(n),n):null}function g(e){let t={},n=s.getProgramParameter(e,s.ACTIVE_UNIFORMS);for(let r=0;r<n;r++){let n=s.getActiveUniform(e,r);n&&(t[n.name]=s.getUniformLocation(e,n.name))}return t}class _{program;uniforms;constructor(e,t){this.program=h(e,t),this.uniforms=this.program?g(this.program):{}}bind(){this.program&&s.useProgram(this.program)}}class v{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(e){let t=0;for(let n of e)t+=f(n);let n=this.programs[t];if(n==null){let r=m(s.FRAGMENT_SHADER,this.fragmentShaderSource,e);n=h(this.vertexShader,r),this.programs[t]=n}n!==this.activeProgram&&(n&&(this.uniforms=g(n)),this.activeProgram=n)}bind(){this.activeProgram&&s.useProgram(this.activeProgram)}}let y=m(s.VERTEX_SHADER,`
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
      `),b=m(s.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
    
        void main () {
          gl_FragColor = texture2D(uTexture, vUv);
        }
      `),x=m(s.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;
    
        void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),S=m(s.FRAGMENT_SHADER,`
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
      `),C=m(s.FRAGMENT_SHADER,`
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
      `,c.supportLinearFiltering?null:[`MANUAL_FILTERING`]),ee=m(s.FRAGMENT_SHADER,`
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
      `),te=m(s.FRAGMENT_SHADER,`
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
      `),w=m(s.FRAGMENT_SHADER,`
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
      `),T=m(s.FRAGMENT_SHADER,`
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
      `),E=m(s.FRAGMENT_SHADER,`
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
      `),D=(()=>{let e=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,e),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),s.STATIC_DRAW);let t=s.createBuffer();return s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t),s.bufferData(s.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),s.STATIC_DRAW),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(0),(e,t=!1)=>{s&&(e?(s.viewport(0,0,e.width,e.height),s.bindFramebuffer(s.FRAMEBUFFER,e.fbo)):(s.viewport(0,0,s.drawingBufferWidth,s.drawingBufferHeight),s.bindFramebuffer(s.FRAMEBUFFER,null)),t&&(s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT)),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0))}})(),O,k,A,j,M,N=new _(y,b),P=new _(y,x),F=new _(y,S),I=new _(y,C),L=new _(y,ee),R=new _(y,te),z=new _(y,w),B=new _(y,T),V=new _(y,E),H=new v(y,`
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
      `);function U(e,t,n,r,i,a){s.activeTexture(s.TEXTURE0);let o=s.createTexture();s.bindTexture(s.TEXTURE_2D,o),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,n,e,t,0,r,i,null);let c=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,c),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,o,0),s.viewport(0,0,e,t),s.clear(s.COLOR_BUFFER_BIT),{texture:o,fbo:c,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach(e){return s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,o),e}}}function W(e,t,n,r,i,a){let o=U(e,t,n,r,i,a),s=U(e,t,n,r,i,a);return{width:e,height:t,texelSizeX:o.texelSizeX,texelSizeY:o.texelSizeY,read:o,write:s,swap(){let e=this.read;this.read=this.write,this.write=e}}}function ne(e,t,n,r,i,a,o){let c=U(t,n,r,i,a,o);return N.bind(),N.uniforms.uTexture&&s.uniform1i(N.uniforms.uTexture,e.attach(0)),D(c,!1),c}function G(e,t,n,r,i,a,o){return e.width===t&&e.height===n||(e.read=ne(e.read,t,n,r,i,a,o),e.write=U(t,n,r,i,a,o),e.width=t,e.height=n,e.texelSizeX=1/t,e.texelSizeY=1/n),e}function K(){let e=J(a.SIM_RESOLUTION),t=J(a.DYE_RESOLUTION),n=c.halfFloatTexType,r=c.formatRGBA,i=c.formatRG,o=c.formatR,l=c.supportLinearFiltering?s.LINEAR:s.NEAREST;s.disable(s.BLEND),O=O?G(O,t.width,t.height,r.internalFormat,r.format,n,l):W(t.width,t.height,r.internalFormat,r.format,n,l),k=k?G(k,e.width,e.height,i.internalFormat,i.format,n,l):W(e.width,e.height,i.internalFormat,i.format,n,l),A=U(e.width,e.height,o.internalFormat,o.format,n,s.NEAREST),j=U(e.width,e.height,o.internalFormat,o.format,n,s.NEAREST),M=W(e.width,e.height,o.internalFormat,o.format,n,s.NEAREST)}function q(){let e=[];a.SHADING&&e.push(`SHADING`),H.setKeywords(e)}function J(e){let t=s.drawingBufferWidth,n=s.drawingBufferHeight,r=t/n,i=r<1?1/r:r,a=Math.round(e),o=Math.round(e*i);return t>n?{width:o,height:a}:{width:a,height:o}}function Y(e){let t=window.devicePixelRatio||1;return Math.floor(e*t)}q(),K();let X=Date.now(),Z=0;function Q(){let e=re();ie()&&K(),ae(e),oe(),se(e),ce(null),requestAnimationFrame(Q)}function re(){let e=Date.now(),t=(e-X)/1e3;return t=Math.min(t,.016666),X=e,t}function ie(){let t=Y(e.clientWidth),n=Y(e.clientHeight);return e.width!==t||e.height!==n?(e.width=t,e.height=n,!0):!1}function ae(e){Z+=e*a.COLOR_UPDATE_SPEED,Z>=1&&(Z=be(Z,0,1),i.forEach(e=>{e.color=$()}))}function oe(){for(let e of i)e.moved&&(e.moved=!1,ue(e))}function se(e){s.disable(s.BLEND),R.bind(),R.uniforms.texelSize&&s.uniform2f(R.uniforms.texelSize,k.texelSizeX,k.texelSizeY),R.uniforms.uVelocity&&s.uniform1i(R.uniforms.uVelocity,k.read.attach(0)),D(j),z.bind(),z.uniforms.texelSize&&s.uniform2f(z.uniforms.texelSize,k.texelSizeX,k.texelSizeY),z.uniforms.uVelocity&&s.uniform1i(z.uniforms.uVelocity,k.read.attach(0)),z.uniforms.uCurl&&s.uniform1i(z.uniforms.uCurl,j.attach(1)),z.uniforms.curl&&s.uniform1f(z.uniforms.curl,a.CURL),z.uniforms.dt&&s.uniform1f(z.uniforms.dt,e),D(k.write),k.swap(),L.bind(),L.uniforms.texelSize&&s.uniform2f(L.uniforms.texelSize,k.texelSizeX,k.texelSizeY),L.uniforms.uVelocity&&s.uniform1i(L.uniforms.uVelocity,k.read.attach(0)),D(A),P.bind(),P.uniforms.uTexture&&s.uniform1i(P.uniforms.uTexture,M.read.attach(0)),P.uniforms.value&&s.uniform1f(P.uniforms.value,a.PRESSURE),D(M.write),M.swap(),B.bind(),B.uniforms.texelSize&&s.uniform2f(B.uniforms.texelSize,k.texelSizeX,k.texelSizeY),B.uniforms.uDivergence&&s.uniform1i(B.uniforms.uDivergence,A.attach(0));for(let e=0;e<a.PRESSURE_ITERATIONS;e++)B.uniforms.uPressure&&s.uniform1i(B.uniforms.uPressure,M.read.attach(1)),D(M.write),M.swap();V.bind(),V.uniforms.texelSize&&s.uniform2f(V.uniforms.texelSize,k.texelSizeX,k.texelSizeY),V.uniforms.uPressure&&s.uniform1i(V.uniforms.uPressure,M.read.attach(0)),V.uniforms.uVelocity&&s.uniform1i(V.uniforms.uVelocity,k.read.attach(1)),D(k.write),k.swap(),I.bind(),I.uniforms.texelSize&&s.uniform2f(I.uniforms.texelSize,k.texelSizeX,k.texelSizeY),!c.supportLinearFiltering&&I.uniforms.dyeTexelSize&&s.uniform2f(I.uniforms.dyeTexelSize,k.texelSizeX,k.texelSizeY);let t=k.read.attach(0);I.uniforms.uVelocity&&s.uniform1i(I.uniforms.uVelocity,t),I.uniforms.uSource&&s.uniform1i(I.uniforms.uSource,t),I.uniforms.dt&&s.uniform1f(I.uniforms.dt,e),I.uniforms.dissipation&&s.uniform1f(I.uniforms.dissipation,a.VELOCITY_DISSIPATION),D(k.write),k.swap(),!c.supportLinearFiltering&&I.uniforms.dyeTexelSize&&s.uniform2f(I.uniforms.dyeTexelSize,O.texelSizeX,O.texelSizeY),I.uniforms.uVelocity&&s.uniform1i(I.uniforms.uVelocity,k.read.attach(0)),I.uniforms.uSource&&s.uniform1i(I.uniforms.uSource,O.read.attach(1)),I.uniforms.dissipation&&s.uniform1f(I.uniforms.dissipation,a.DENSITY_DISSIPATION),D(O.write),O.swap()}function ce(e){s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.enable(s.BLEND),le(e)}function le(e){let t=e?e.width:s.drawingBufferWidth,n=e?e.height:s.drawingBufferHeight;H.bind(),a.SHADING&&H.uniforms.texelSize&&s.uniform2f(H.uniforms.texelSize,1/t,1/n),H.uniforms.uTexture&&s.uniform1i(H.uniforms.uTexture,O.read.attach(0)),D(e,!1)}function ue(e){let t=e.deltaX*a.SPLAT_FORCE,n=e.deltaY*a.SPLAT_FORCE;fe(e.texcoordX,e.texcoordY,t,n,e.color)}function de(e){let t=$();t.r*=10,t.g*=10,t.b*=10;let n=10*(Math.random()-.5),r=30*(Math.random()-.5);fe(e.texcoordX,e.texcoordY,n,r,t)}function fe(t,n,r,i,o){F.bind(),F.uniforms.uTarget&&s.uniform1i(F.uniforms.uTarget,k.read.attach(0)),F.uniforms.aspectRatio&&s.uniform1f(F.uniforms.aspectRatio,e.width/e.height),F.uniforms.point&&s.uniform2f(F.uniforms.point,t,n),F.uniforms.color&&s.uniform3f(F.uniforms.color,r,i,0),F.uniforms.radius&&s.uniform1f(F.uniforms.radius,pe(a.SPLAT_RADIUS/100)),D(k.write),k.swap(),F.uniforms.uTarget&&s.uniform1i(F.uniforms.uTarget,O.read.attach(0)),F.uniforms.color&&s.uniform3f(F.uniforms.color,o.r,o.g,o.b),D(O.write),O.swap()}function pe(t){let n=e.width/e.height;return n>1&&(t*=n),t}function me(t,n,r,i){t.id=n,t.down=!0,t.moved=!1,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=$()}function he(t,n,r,i){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=n/e.width,t.texcoordY=1-r/e.height,t.deltaX=_e(t.texcoordX-t.prevTexcoordX),t.deltaY=ve(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=i}function ge(e){e.down=!1}function _e(t){let n=e.width/e.height;return n<1&&(t*=n),t}function ve(t){let n=e.width/e.height;return n>1&&(t/=n),t}function $(){let e=ye(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function ye(e,t,n){let r=0,i=0,a=0,o=Math.floor(e*6),s=e*6-o,c=n*(1-t),l=n*(1-s*t),u=n*(1-(1-s)*t);switch(o%6){case 0:r=n,i=u,a=c;break;case 1:r=l,i=n,a=c;break;case 2:r=c,i=n,a=u;break;case 3:r=c,i=l,a=n;break;case 4:r=u,i=c,a=n;break;case 5:r=n,i=c,a=l}return{r,g:i,b:a}}function be(e,t,n){let r=n-t;return r===0?t:(e-t)%r+t}window.addEventListener(`mousedown`,e=>{let t=i[0];me(t,-1,Y(e.clientX),Y(e.clientY)),de(t)});function xe(e){let t=i[0],n=Y(e.clientX),r=Y(e.clientY),a=$();Q(),he(t,n,r,a),document.body.removeEventListener(`mousemove`,xe)}document.body.addEventListener(`mousemove`,xe),window.addEventListener(`mousemove`,e=>{let t=i[0],n=Y(e.clientX),r=Y(e.clientY),a=t.color;he(t,n,r,a)});function Se(e){let t=e.targetTouches,n=i[0];for(let e=0;e<t.length;e++){let r=Y(t[e].clientX),i=Y(t[e].clientY);Q(),me(n,t[e].identifier,r,i)}document.body.removeEventListener(`touchstart`,Se)}document.body.addEventListener(`touchstart`,Se),window.addEventListener(`touchstart`,e=>{let t=e.targetTouches,n=i[0];for(let e=0;e<t.length;e++){let r=Y(t[e].clientX),i=Y(t[e].clientY);me(n,t[e].identifier,r,i)}},!1),window.addEventListener(`touchmove`,e=>{let t=e.targetTouches,n=i[0];for(let e=0;e<t.length;e++)he(n,Y(t[e].clientX),Y(t[e].clientY),n.color)},!1),window.addEventListener(`touchend`,e=>{let t=e.changedTouches,n=i[0];for(let e=0;e<t.length;e++)ge(n)}),o(()=>t.simResolution,e=>{a.SIM_RESOLUTION=e,K()}),o(()=>t.dyeResolution,e=>{a.DYE_RESOLUTION=e,K()}),o(()=>t.shading,e=>{a.SHADING=e,q()}),Q()}),(e,n)=>(s(),g(`div`,{class:i([`pointer-events-none fixed inset-0 z-50 size-full`,[t.class]])},[p(`canvas`,{id:`fluid`,ref_key:`canvasRef`,ref:r,class:`block size-full`,style:{"will-change":`contents`,contain:`strict`}},null,512)],2))}}),{__name:`FluidCursor`}),M=()=>C(`color-mode`).value,N=[`aria-checked`,`disabled`],P=Object.assign(d({__name:`SwitchComponent`,props:{modelValue:{type:Boolean},disabled:{type:Boolean}},emits:[`update:modelValue`],setup(e,{emit:t}){let n=e,r=t;function a(){n.disabled||r(`update:modelValue`,!n.modelValue)}return(t,n)=>(s(),g(`button`,{"aria-label":`animation toggler`,type:`button`,role:`switch`,"aria-checked":e.modelValue,disabled:e.disabled,class:i([`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-transparent p-0.5 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#339af0] disabled:cursor-not-allowed disabled:opacity-60`,e.modelValue?`bg-[#339af0]`:`bg-gray-300 dark:bg-gray-600`]),onClick:a},[p(`span`,{class:i([`block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200`,e.modelValue?`ltr:translate-x-5 rtl:-translate-x-5`:`translate-x-0`])},null,2)],10,N))}}),{__name:`SwitchComponent`}),F={class:`flex items-center justify-between py-4 sticky top-0 bg-white dark:bg-zinc-800 z-50 shadow-[0_1px_0_rgba(17,17,26,0.1)] w-full`},I={class:`max-w-5xl w-full flex items-center justify-between mx-auto px-4`},L={class:`flex items-center justify-start gap-4`},R={class:`hidden lg:flex items-center justify-end gap-4 cursor-pointer`},z={class:`hidden lg:flex items-center gap-3`},B={class:`text-sm font-semibold text-neutral-600 dark:text-neutral-300`},V={class:`hidden lg:flex items-center justify-end gap-4 cursor-pointer`},H={key:0,class:`fixed top-0 right-0 h-full w-73 bg-white dark:bg-zinc-800 z-40 lg:hidden shadow-xl pt-20 px-6 overflow-y-auto`},U={class:`flex flex-col gap-3 mb-6`},W={class:`text-sm font-semibold text-neutral-600 dark:text-neutral-300`},ne={class:`flex flex-wrap gap-3`},G={class:`flex items-center justify-between gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600`},K={class:`text-sm font-semibold text-neutral-600 dark:text-neutral-300`},q={class:`flex flex-col gap-3 py-4 border-t border-neutral-200 dark:border-zinc-600`},J={class:`text-sm font-semibold text-neutral-600 dark:text-neutral-300`},Y={class:`flex items-center gap-4`},X=Object.assign(O(d({__name:`Navbar`,setup(c){let{animationEnabled:l}=k(),d=M(),{locales:S}=te(),{t:C}=te(),T=D(),E=y(()=>S.value),O=e=>{d.preference=e},N=_(!1),X=()=>{N.value=!N.value},Z=()=>{N.value=!1},Q=ee();return o(()=>Q.fullPath,()=>{Z()}),o(N,e=>{e?document.body.style.overflow=`hidden`:document.body.style.overflow=``}),(o,c)=>{let d=A,_=w,y=e,S=j;return s(),g(`div`,F,[p(`div`,I,[p(`div`,L,[b(d,{href:`/`,title:o.$t(`home`)},null,8,[`title`])]),p(`div`,R,[(s(!0),g(h,null,r(f(E),e=>(s(),m(_,{key:e.code,to:f(T)(e.code),class:`relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors`,"active-class":`language-active`},{default:a(()=>[u(x(e.langName),1)]),_:2},1032,[`to`]))),128))]),p(`div`,z,[p(`span`,B,x(f(C)(`enableAnimations`)),1),b(P,{modelValue:f(l),"onUpdate:modelValue":c[0]||=e=>n(l)?l.value=e:null},null,8,[`modelValue`])]),p(`div`,V,[b(y,{name:`ic:round-nights-stay`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`,onClick:c[1]||=e=>O(`dark`)}),b(y,{name:`material-symbols:light-mode-outline-rounded`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`,onClick:c[2]||=e=>O(`light`)}),b(y,{name:`material-symbols:monitor-outline`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`,onClick:c[3]||=e=>O(`system`)})]),p(`button`,{class:`lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 hover:cursor-pointer`,"aria-label":`Toggle menu`,onClick:X},[p(`span`,{class:i([`burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out`,{"rotate-45 translate-y-1.5":f(N)}])},null,2),p(`span`,{class:i([`burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5`,{"opacity-0":f(N)}])},null,2),p(`span`,{class:i([`burger-line block w-6 h-0.5 bg-neutral-800 dark:bg-slate-200 rounded transition-all duration-300 ease-in-out mt-1.5`,{"-rotate-45 -translate-y-2":f(N)}])},null,2)])]),b(t,{name:`fade`},{default:a(()=>[f(N)?(s(),g(`div`,{key:0,class:`fixed inset-0 bg-black/50 z-40 lg:hidden`,onClick:Z})):v(``,!0)]),_:1}),b(t,{name:`slide`},{default:a(()=>[f(N)?(s(),g(`div`,H,[p(`div`,U,[p(`span`,W,x(f(C)(`languages`)),1),p(`div`,ne,[(s(!0),g(h,null,r(f(E),e=>(s(),m(_,{key:e.code,to:f(T)(e.code),class:`relative px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors`,"active-class":`language-active`,onClick:Z},{default:a(()=>[u(x(e.langName),1)]),_:2},1032,[`to`]))),128))])]),p(`div`,G,[p(`span`,K,x(f(C)(`enableAnimations`)),1),b(P,{modelValue:f(l),"onUpdate:modelValue":c[4]||=e=>n(l)?l.value=e:null},null,8,[`modelValue`])]),p(`div`,q,[p(`span`,J,x(f(C)(`theme`)),1),p(`div`,Y,[p(`button`,{class:`p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors`,onClick:c[5]||=e=>O(`dark`)},[b(y,{name:`ic:round-nights-stay`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`})]),p(`button`,{class:`p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors`,onClick:c[6]||=e=>O(`light`)},[b(y,{name:`material-symbols:light-mode-outline-rounded`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`})]),p(`button`,{class:`p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors`,onClick:c[7]||=e=>O(`system`)},[b(y,{name:`material-symbols:monitor-outline`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`})])])])])):v(``,!0)]),_:1}),f(l)?(s(),m(S,{key:0})):v(``,!0)])}}}),[[`__scopeId`,`data-v-1ea4d09b`]]),{__name:`Navbar`}),Z={class:`px-3 md:px-0 w-full pb-4 pt-6 md:pt-12 md:pb-8`},Q={class:`text-center mb-4`},re={class:`flex items-center justify-center gap-4`},ie=[`href`,`aria-label`],ae=Object.assign(d({__name:`Footer`,setup(t){let n=[{platformName:`GitHub`,link:`https://github.com/abdurrahmanseyidoglu`,icon:`github`},{platformName:`LinkedIn`,link:`https://www.linkedin.com/in/abdurrahmanseyidoglu/`,icon:`linkedin`},{platformName:`X`,link:`https://x.com/ll_alsayed`,icon:`x`}];return(t,i)=>{let a=e;return s(),g(`footer`,Z,[p(`p`,Q,x(t.$t(`copyRight`))+` `+x(new Date().getFullYear()),1),p(`div`,re,[(s(),g(h,null,r(n,e=>p(`a`,{key:e.link,href:e.link,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e.platformName},[b(a,{name:`grommet-icons:${e.icon}`,size:`1.5rem`,class:`text-neutral-800 dark:text-slate-200`},null,8,[`name`])],8,ie)),64))])])}}}),{__name:`Footer`}),oe=()=>{let e=new Date().getMonth();return{isWinter:y(()=>e===11||e===0||e===1)}},se=S(()=>E(()=>import(`./BYITeOGG.js`).then(e=>e.default||e),__vite__mapDeps([0,1,2]),import.meta.url)),ce=S(()=>E(()=>import(`./B8IuF8Bu.js`).then(e=>e.default||e),__vite__mapDeps([3,1,2]),import.meta.url)),le={class:`relative bg-white dark:bg-zinc-800 min-h-screen text-neutral-800 dark:text-slate-200`},ue={class:`max-w-5xl mx-auto px-4 min-h-screen`},de=d({__name:`default`,setup(e){let{animationEnabled:t}=k(),{isWinter:n}=oe();return(e,r)=>{let i=X,a=se,o=ce,c=ae;return s(),g(`div`,le,[b(i),f(t)&&f(n)?(s(),m(a,{key:0,color:`ADD8E6`,class:`absolute inset-0`,"min-radius":.2,"max-radius":5,speed:.5})):v(``,!0),f(t)&&!f(n)?(s(),m(o,{key:e.$colorMode.value,class:`absolute inset-0`,quantity:200,ease:100,color:e.$colorMode.value===`dark`?`#FFF`:`#000`,staticity:30,refresh:``},null,8,[`color`])):v(``,!0),p(`div`,ue,[p(`main`,null,[l(e.$slots,`default`)])]),b(c)])}}});export{de as default};