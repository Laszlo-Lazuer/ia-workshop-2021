(this["webpackJsonpia-workshop-2021"]=this["webpackJsonpia-workshop-2021"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(1),i=a.n(n),o=a(8),c=a.n(o),r=(a(31),a(6)),A=(a(32),a(54)),l=a(53),d=Object(n.createContext)(null);a(33);var h=function(){var e=Object(n.useContext)(d),t=e.step,a=e.setStep;return Object(s.jsx)("div",{className:"landing-page",children:Object(s.jsx)(A.a,{id:"readyCar",heading:"",className:"ia-card",children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h2",{className:"card-statement",children:"Are you ready for an interview?"})}),Object(s.jsx)("div",{children:Object(s.jsx)(l.a,{className:"cta",label:"Start",onClick:function(){return a(t+1)},variant:"brand"})})]})})})},u=a(13),j=a(55);a(45);var b=function(){var e=Object(n.useContext)(d),t=e.step,a=e.setStep,i=e.questionArray,o=Object(n.useState)(1),c=Object(r.a)(o,2),h=c[0],b=c[1],g=Object(n.useState)(1),p=Object(r.a)(g,2),O=p[0],m=p[1],x=Object(n.useState)(100),y=Object(r.a)(x,2),w=y[0],v=y[1],f=Object(n.useState)(!0),N=Object(r.a)(f,2),U=N[0],W=N[1],k=Object(n.useState)(!1),q=Object(r.a)(k,2),B=q[0],K=q[1],H=Object(n.useState)(30),Z=Object(r.a)(H,2),C=Z[0],P=Z[1],I=Object(n.useState)(!1),D=Object(r.a)(I,2),M=D[0],S=D[1],Q=function(){S(!M),U&&W(!1),K(!1)},F=function(){P(30),S(!1),K(!0)},z=i["".concat(h)];Object(n.useEffect)((function(){var e=null;return M?(e=setInterval((function(){P(C>1?C-1:F)}),1e3),v(C/30*100)):M||0===C||clearInterval(e),function(){return clearInterval(e)}}),[M,C]);var R=C<10?"0".concat(C):"".concat(C),Y=B?"Next Question":"Skip Question";return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(A.a,{id:"questionCard",heading:"",className:"ia-card",children:Object(s.jsx)("div",{className:"card-content",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(u.a,{iconPath:"/assets/icons",children:Object(s.jsx)("div",{className:"slds-grid slds-grid_pull-padded slds-grid_vertical-align-center",children:Object(s.jsxs)("div",{className:"slds-col_padded",style:{position:"relative"},children:[Object(s.jsx)(j.a,{size:"large",value:w,flowDirection:"drain"}),Object(s.jsx)("p",{style:{width:"20px",position:"absolute",top:"3px",left:"19px",fontSize:"17px",textAlign:"center"},children:B?"-":R})]})})})}),Object(s.jsxs)("div",{className:"quiz-content",children:[B?Object(s.jsx)("p",{className:"card-statement",children:"Time is up!"}):Object(s.jsx)("p",{className:"card-statement",children:O>15?"You're Hired!":"Q".concat(O,": ").concat(z)}),Object(s.jsxs)("div",{className:"ctas",children:[Object(s.jsx)(l.a,{disabled:O>15,className:"cta1",label:U?"Begin":Y,onClick:U?Q:function(){i.splice(h,1),m(O+1);var e=i.length-1,t=Math.floor(0+Math.random()*(e-0));b(t),B?Q():P(30)},variant:"outline-brand"}),Object(s.jsx)(l.a,{className:"cta2",label:"Done",onClick:function(){return a(t+1)},variant:"brand"})]})]})]})})})})};a(46);var g=function(){var e=Object(n.useContext)(d).setStep;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(A.a,{id:"summaryCard",heading:"",className:"ia-card",children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsxs)("div",{className:"summary-content",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"data:image/png;base64,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",alt:"",className:"summary-icon"})}),Object(s.jsx)("div",{className:"logo-copy",children:Object(s.jsx)("p",{children:"Thanks for stopping by!"})})]}),Object(s.jsx)("div",{className:"summary-cta",style:{display:"flex"},children:Object(s.jsx)(l.a,{label:"Restart",onClick:function(){return e(1)},variant:"brand"})})]})})})};var p=function(){var e,t=Object(n.useState)("hello from context"),a=Object(r.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(1),A=Object(r.a)(c,2),l=A[0],u=A[1],j="";switch(l){case 1:e=Object(s.jsx)(h,{}),j="This is a rapid fire exercise to help you to be on your feet when you talk about interview. At the bottom there will be a question for you and you have 30 secs to answer it. This will help you to be on your toes to answer them in a fast order.";break;case 2:e=Object(s.jsx)(b,{}),j="Read the question and relax and think about your answer. Make sure you keep in under 30 sec. You can always practice more.";break;case 3:e=Object(s.jsx)(g,{}),j="Well, now you have a experience under your belt and what can I say. You did it, this is the first start to really practice your questions. You can always come back and try again.";break;default:console.log("error")}return Object(s.jsx)(d.Provider,{value:{message:i,setMessage:o,step:l,setStep:u,questions:{1:"What are three positive things your last boss would say about you?",2:"Describe your design process and what methods you follow?",3:"What are the some of the biggest challenges you face as a UX designer?",4:"What are some of the biggest trends in the UX Design industry right now?",5:"When a client says, \u201cI don\u2019t like this design\u201d What do you do?",6:"Can you walk me through a design example where you set out to solve a business problem?",7:"How do you know when a project is finish?",8:"What are the difference between designing for desktop and mobile devices?",9:"What are the biggest challenges as a UX designer?",10:"Have you worked in the lean or agile process environment before?",11:"How did you get into UX Design?",12:"What tools do you use?",13:"Why are interested in this company?",14:"What makes you want to leave your current job?",15:"What do you do when you are struggling to find inspiration?",16:"How do you help someone understand your perspective if they are not on the same page with the design?"},questionArray:["What are three positive things your last boss would say about you?","Describe your design process and what methods you follow?","What are the some of the biggest challenges you face as a UX designer?","What are some of the biggest trends in the UX Design industry right now?","When a client says, \u201cI don\u2019t like this design\u201d What do you do?","Can you walk me through a design example where you set out to solve a business problem?","How do you know when a project is finish?","What are the difference between designing for desktop and mobile devices?","What are the biggest challenges as a UX designer?","Have you worked in the lean or agile process environment before?","How did you get into UX Design?","What tools do you use?","Why are interested in this company?","What makes you want to leave your current job?","What do you do when you are struggling to find inspiration?","How do you help someone understand your perspective if they are not on the same page with the design?"]},children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"header-content",children:[Object(s.jsx)("h1",{className:"app-title",children:"Interview Questions"}),Object(s.jsxs)("div",{className:"header-content--sub",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAnCAYAAACFSPFPAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAI6ADAAQAAAABAAAAJwAAAABNPOVnAAADWUlEQVRYCe1YT0gUURh/b2bYzTLHP/0DKQpTA6FQWz14qYOWRQdDKYOCEKJDXSKyIMFIOnjoZBCG5CU7mHkILfOgBh6Uwi6mZn8ORqUSOqu76+7OzOt9M06+2Z1x180VD/vBm/fN9/c33/u+WWbxPCFpSELLBIxIlyEweBF9mV7gLz3su7GwFKxSVZSFEMGGl9WOMf6xxcn31Fa46qvKMz2aTWj4EEc8P0/B2NEKFlRQ09nsDyqVdqZ2ckHgRjpul5Yd3L1d0R/SCAoeBg87QtxKFbR780XSK1R1p9cVCxAIJstqfk3TwHktL1y0vHCBxZZKQgIIXw9PJd1/OXLF61eKCCEpacnOtv6G08+XPdHPeV8xBI6VPD65mOZ9piWXRHTs7qvqucXABYw591YnP1R3Nv9JedFen9DUNZbS3PupR1FIrpHM7Q38ojwFo5OsonSDj2WXFZKh+2llQW6vfJzKShBSkCQr5bVtw9VfZxdPcK19Y3UsEN2J0E0/opU9FhiGDyGiiCAoMnZDAzvkb+2bqOP8QVLKKoDHCDvYM+Ux8oXarOWex9hD249On4RgpwyNbybak6WCqpJ9ZjFCAYUcApkoigScD+fsbB8a/V2oququUNtI93TE53IyUx+xdkZ8VgY4cObFdq18rII+g1pRciCv4VzhtEkedsNOAyjZCQkz1o7oevOHPZ2D30fpodFJNlOYQFNTw+7hqUa9XyChsUBr9BLwekPqOwvE2l6SJKzFtQAC0azBUIU/IJ9x3ex/MDDuX+6fyMnCwUEKHfDA+IwD4kFckFqR9TExlhyHJ5McwpuUbY6PTg7pr3VGH4n1K2oyHeUjvoB8kvZF9mr29KW3OkEAz1IQ1uqG66C1PaZ1iL3mEAkwdiUz9cytyjx09VQucgjxL1iA/uA97p5AjS9G/2EzZa0py94QIJAdHhjysWQC0/J2EgHijSDIA/lYivieYY3jzZsqE+9kkeInwNhVKDHaUJnEaNv1h5U8MU1WVQHZpqpMYrThSBKjDVWIljZVA3P0W/hPtMjjaQc4OIHHQ/FMEm1swMEV52TU078o/usvj2gT2tph7HVlpd7jBzue+t5/m+malZb206/HHdTBaeu0zgpaBLdD4N8dzU6/3HKt4PNfg9BmF5LNNy4AAAAASUVORK5CYII=",alt:"",className:"main-icon"})}),Object(s.jsxs)("div",{className:"app-badge",style:{marginBottom:"48px",marginLeft:"9px"},children:[Object(s.jsx)("p",{className:"badge-text",children:"Got Questions?"}),Object(s.jsx)("p",{className:"badge-text",children:"We've got practice..."})]})]})]}),Object(s.jsx)("div",{className:"app-statement",children:Object(s.jsx)("p",{children:j})}),Object(s.jsx)("div",{className:"content-wrapper",children:e})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),i(e),o(e)}))};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),O()}},[[47,1,2]]]);
//# sourceMappingURL=main.4bc0b495.chunk.js.map