import{u as V}from"./OptionsContext-BfYRGoPF.js";import{u as D}from"./EnvironmentContext-B6trpcuD.js";import{InternalThemeProvider as Z}from"./index-Da01lrL1.js";import{F as g,o}from"./index-B1-WXTB8.js";import{M as K}from"./Modal-DDHEYkQA.js";import{P as Y}from"./Portal-BOhmOsb1.js";import{b as d,P as q,a as N,C as W}from"./shared-FboW1uRM.js";import{r as c,R as H}from"./index-CwlLXZVB.js";import{j as e,e as J,b as s,F as x,k as Q}from"./common-Yglhtjt-.js";import"./underscore-PzdM3hke.js";import"./AppearanceContext-BxdXKHpj.js";import"./makeLocalizable-Cs4YFt_Y.js";import"./localizationKeys-L95TEc06.js";import"./makeCustomizable-yiQGJRjd.js";import"./url-C0v_GM4r.js";import"./floating-ui.react-BIOAQjdv.js";import"./useScrollLock-DtPRJxpD.js";import"./index-7R-B5nod.js";import"./RouteContext-DWy5wCJs.js";const X="https://dashboard.clerk.com/~/organizations-settings",ee=({caller:i,onSuccess:r,onClose:a})=>{const t=J(),[p,h]=c.useState(!1),[l,u]=c.useState(!1),[w,S]=c.useState(null),[$,j]=c.useState(!1),_=c.useRef(null),f=D(),I=c.useId(),O=V(),y=O.__internal_keyless_claimKeylessApplicationUrl,G=O.__internal_keyless_copyInstanceKeysUrl,T=!!y&&!!G,F=f.authConfig.claimedAt!==null,v=l&&T&&!F,L=!i.startsWith("use"),R=typeof(f==null?void 0:f.organizationSettings.forceOrganizationSelection)<"u",U=()=>{h(!0);const n={enable_organizations:!0};R&&(n.organization_allow_personal_accounts=$),f.__internal_enableEnvironmentSetting(n).then(async()=>{var m,b,P;S(((P=(b=await((m=t.user)==null?void 0:m.getOrganizationMemberships()))==null?void 0:b.data[0])==null?void 0:P.organization.name)??null),u(!0),h(!1)}).catch(()=>{h(!1)})};return e(Y,{children:e(K,{canCloseModal:!1,containerSx:()=>({alignItems:"center"}),initialFocusRef:_,children:s(q,{sx:()=>({display:"flex",flexDirection:"column",width:"30rem",maxWidth:"calc(100vw - 2rem)"}),children:[s(g,{direction:"col",sx:n=>({padding:`${n.sizes.$4} ${n.sizes.$6}`,paddingBottom:n.sizes.$4,gap:n.sizes.$2}),children:[s(g,{as:"header",align:"center",sx:n=>({gap:n.sizes.$2}),children:[e(ae,{isEnabled:l}),e("h1",{css:[d,o`
                    color: white;
                    font-size: 0.875rem;
                    font-weight: 500;
                    outline: none;
                  `],tabIndex:-1,ref:_,children:l?"Organizations feature enabled":"Organizations feature required"})]}),e(g,{direction:"col",align:"start",sx:n=>({gap:n.sizes.$0x5}),children:l?s("p",{css:[d,o`
                      color: #b4b4b4;
                      font-size: 0.8125rem;
                      font-weight: 400;
                      line-height: 1.3;
                    `],children:[v?w?`Organizations are now enabled and a default organization named "${w}" was created. Claim your application to save this configuration and access the full dashboard.`:"Organizations are now enabled! Claim your application to save this configuration and access the full dashboard.":t.user&&w?`The Organizations feature has been enabled for your application. A default organization named "${w}" was created automatically. You can manage or rename it in your`:"The Organizations feature has been enabled for your application. You can manage it in your",!v&&s(x,{children:[" ",e(k,{href:X,target:"_blank",rel:"noopener noreferrer",children:"dashboard"}),"."]})]}):s(x,{children:[s("p",{id:I,css:[d,o`
                        color: #b4b4b4;
                        font-size: 0.8125rem;
                        font-weight: 400;
                        line-height: 1.23;
                      `],children:["Enable Organizations to use"," ",e("code",{css:[d,o`
                          font-size: 0.75rem;
                          color: white;
                          font-family: monospace;
                          line-height: 1.23;
                        `],children:L?`<${i} />`:i})," "]}),e(k,{href:"https://clerk.com/docs/guides/organizations/overview",target:"_blank",rel:"noopener noreferrer",children:"Learn more"})]})}),R&&!l&&e(g,{sx:n=>({marginTop:n.sizes.$2}),direction:"col",children:s(re,{value:$?"optional":"required",onChange:n=>j(n==="optional"),labelledBy:I,children:[e(A,{value:"required",label:s(g,{wrap:"wrap",sx:n=>({columnGap:n.sizes.$2,rowGap:n.sizes.$1}),children:[e("span",{children:"Membership required"}),e(te,{children:"Standard"})]}),description:s(x,{children:[e("span",{className:"block",children:"Users need to belong to at least one organization."}),e("span",{children:"Common for most B2B SaaS applications"})]})}),e(A,{value:"optional",label:"Membership optional",description:"Users can work outside of an organization with a personal account"})]})})]}),e("span",{css:o`
              height: 1px;
              display: block;
              width: calc(100% - 2px);
              margin-inline: auto;
              background-color: #151515;
              box-shadow: 0px 1px 0px 0px #424242;
            `}),e(g,{justify:"center",sx:n=>({padding:`${n.sizes.$4} ${n.sizes.$6}`,gap:n.sizes.$3,justifyContent:"flex-end"}),children:l?v?s(x,{children:[e(z,{variant:"outline",onClick:()=>{r==null||r()},children:t.user?"Continue":"I’ll do it later"}),e(k,{href:y,target:"_blank",rel:"noopener noreferrer",onClick:n=>{var m;if(y){const b=new URL(y);b.searchParams.append("return_url",window.location.href),n.currentTarget.href=b.href}(m=t.__internal_closeEnableOrganizationsPrompt)==null||m.call(t)},css:o`
                      ${B}
                      ${M}
                      color: #fde047;
                      text-decoration: none;
                    `,children:"Claim your application"})]}):e(z,{variant:"solid",onClick:()=>{var n;t.user?r==null||r():(t.redirectToSignIn(),(n=t.__internal_closeEnableOrganizationsPrompt)==null||n.call(t))},children:t.user?"Continue":"Sign in to continue"}):s(x,{children:[e(z,{variant:"outline",onClick:()=>{var n;(n=t==null?void 0:t.__internal_closeEnableOrganizationsPrompt)==null||n.call(t),a==null||a()},children:"I'll remove it myself"}),e(z,{variant:"solid",onClick:U,disabled:p,children:"Enable Organizations"})]})})]})})})},_e=i=>e(Z,{children:e(ee,{...i})}),B=o`
  ${d};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.75rem;
  padding: 0.375rem 0.625rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.12px;
  color: white;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.32);
  white-space: nowrap;
  user-select: none;
  color: white;
  outline: none;

  &:not(:disabled) {
    transition: 120ms ease-in-out;
    transition-property: background-color, border-color, box-shadow, color;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible:not(:disabled) {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`,M=o`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30.5%, rgba(0, 0, 0, 0.05) 100%), #454545;
  box-shadow:
    0 0 3px 0 rgba(253, 224, 71, 0) inset,
    0 0 0 1px rgba(255, 255, 255, 0.04) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.04) inset,
    0 0 0 1px rgba(0, 0, 0, 0.12),
    0 1.5px 2px 0 rgba(0, 0, 0, 0.48);

  &:hover:not(:disabled) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30.5%, rgba(0, 0, 0, 0.15) 100%), #5f5f5f;
    box-shadow:
      0 0 3px 0 rgba(253, 224, 71, 0) inset,
      0 0 0 1px rgba(255, 255, 255, 0.04) inset,
      0 1px 0 0 rgba(255, 255, 255, 0.04) inset,
      0 0 0 1px rgba(0, 0, 0, 0.12),
      0 1.5px 2px 0 rgba(0, 0, 0, 0.48);
  }
`,ne={solid:M,outline:o`
  border: 1px solid rgba(118, 118, 132, 0.25);
  background: rgba(69, 69, 69, 0.1);

  &:hover:not(:disabled) {
    border-color: rgba(118, 118, 132, 0.5);
  }
`},z=c.forwardRef(({variant:i="solid",...r},a)=>e("button",{ref:a,type:"button",css:[B,ne[i]],...r})),te=({children:i})=>e("span",{css:o`
        ${d};
        display: inline-flex;
        align-items: center;
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-size: 0.6875rem;
        font-weight: 500;
        line-height: 1.23;
        background-color: #ebebeb;
        color: #2b2b34;
        white-space: nowrap;
      `,children:i}),[oe,ie]=Q("RadioGroupContext"),re=({value:i,onChange:r,children:a,labelledBy:t})=>{const p=c.useId(),h=H.useMemo(()=>({value:{name:p,value:i,onChange:r}}),[p,i,r]);return e(oe.Provider,{value:h,children:e(g,{role:"radiogroup",direction:"col",gap:3,"aria-orientation":"vertical","aria-labelledby":t,children:a})})},C="1rem",E="0.5rem",A=({value:i,label:r,description:a})=>{const{name:t,value:p,onChange:h}=ie(),l=c.useId(),u=i===p;return s(g,{direction:"col",gap:1,children:[s("label",{css:o`
          ${d};
          display: flex;
          align-items: flex-start;
          gap: ${E};
          cursor: pointer;
          user-select: none;

          &:has(input:focus-visible) > span:first-of-type {
            outline: 2px solid white;
            outline-offset: 2px;
          }

          &:hover:has(input:not(:checked)) > span:first-of-type {
            background-color: rgba(255, 255, 255, 0.08);
          }

          &:hover:has(input:checked) > span:first-of-type {
            background-color: rgba(108, 71, 255, 0.8);
            background-color: color-mix(in srgb, #6c47ff 80%, transparent);
          }
        `,children:[e("input",{type:"radio",name:t,value:i,checked:u,onChange:()=>h(i),"aria-describedby":a?l:void 0,css:o`
            ${d};
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          `}),e("span",{"aria-hidden":"true",css:o`
            ${d};
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: ${C};
            height: ${C};
            margin-top: 0.125rem;
            flex-shrink: 0;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.3);
            background-color: transparent;
            transition: 120ms ease-in-out;
            transition-property: border-color, background-color, box-shadow;

            ${u&&o`
              border-width: 2px;
              border-color: #6c47ff;
              background-color: #6c47ff;
              background-color: color-mix(in srgb, #6c47ff 100%, transparent);
              box-shadow: 0 0 0 2px rgba(108, 71, 255, 0.2);
            `}

            &::after {
              content: '';
              position: absolute;
              width: 0.375rem;
              height: 0.375rem;
              border-radius: 50%;
              background-color: white;
              opacity: ${u?1:0};
              transform: scale(${u?1:0});
              transition: 120ms ease-in-out;
              transition-property: opacity, transform;
            }
          `}),e("span",{css:[d,o`
              font-size: 0.875rem;
              font-weight: 500;
              line-height: 1.25;
              color: white;
            `],children:r})]}),a&&e("span",{id:l,css:[d,o`
              padding-inline-start: calc(${C} + ${E});
              font-size: 0.75rem;
              line-height: 1.33;
              color: #c3c3c6;
              text-wrap: pretty;
            `],children:a})]})},k=c.forwardRef(({children:i,css:r,...a},t)=>e("a",{ref:t,...a,css:[d,o`
            color: #a8a8ff;
            font-size: inherit;
            font-weight: 500;
            line-height: 1.3;
            font-size: 0.8125rem;
            min-width: 0;
          `,r],children:i})),ae=({isEnabled:i})=>{const[r,a]=c.useState(0);c.useLayoutEffect(()=>{if(i){a(u=>u===0?180:0);return}const l=setInterval(()=>{a(u=>u===0?180:0)},2e3);return()=>clearInterval(l)},[i]);let t="idle",p="warning";i&&(r===0?(t="success",p="warning"):(p="success",t="idle"));const h=l=>{switch(l){case"idle":return e(W,{});case"success":return e(N,{css:o`
              width: 1.25rem;
              height: 1.25rem;
            `});case"warning":return s("svg",{css:o`
              width: 1.25rem;
              height: 1.25rem;
            `,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.2",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10Z",fill:"#EAB308"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z",fill:"#EAB308"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 6C10.5523 6 11 6.44772 11 7V9C11 9.55228 10.5523 10 10 10C9.44772 10 9 9.55228 9 9V7C9 6.44772 9.44772 6 10 6Z",fill:"#EAB308"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 12C10.5523 12 11 12.4477 11 13V13.01C11 13.5623 10.5523 14.01 10 14.01C9.44772 14.01 9 13.5623 9 13.01V13C9 12.4477 9.44772 12 10 12Z",fill:"#EAB308"})]})}};return e("div",{css:o`
        perspective: 1000px;
        width: 1.25rem;
        height: 1.25rem;
      `,children:s("div",{css:o`
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
          transform: rotateY(${r}deg);

          @media (prefers-reduced-motion: reduce) {
            transition: none;
          }
        `,children:[e("span",{"aria-hidden":!0,css:o`
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-font-smoothing: antialiased;
            transform: rotateY(0deg);
          `,children:h(t)}),e("span",{"aria-hidden":!0,css:o`
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-font-smoothing: antialiased;
          `,children:h(p)})]})})};export{_e as EnableOrganizationsPrompt};
