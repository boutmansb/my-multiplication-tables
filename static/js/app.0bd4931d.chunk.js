(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{67:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var s=n(7),l=n.n(s),r=n(40),a=n(0),o=n.n(a),c=n(3),u=n(5),i=n(6),b=n(10),d=n(1);function j(e){var t=o.a.useState(e.selectedTables.indexOf(e.value)>-1),n=l()(t,2),s=n[0],r=n[1];return!0===s?Object(d.jsx)(b.a,{style:f.tableSelectedButton,onPress:function(){r(!1),e.onDeselectTablePress(e.value)},children:Object(d.jsx)(u.a,{style:f.buttonText,children:e.value.toString()})}):Object(d.jsx)(b.a,{style:f.tableSelectButton,onPress:function(){r(!0),e.onSelectTablePress(e.value)},children:Object(d.jsx)(u.a,{style:f.buttonText,children:e.value.toString()})})}var f=c.a.create({tableSelectButton:{backgroundColor:"blue",padding:20,borderRadius:5,margin:5},tableSelectedButton:{backgroundColor:"green",padding:20,borderRadius:5,margin:5},buttonText:{fontSize:20,color:"#fff"}}),x=n(68);function T(e){var t=o.a.useState(null),n=l()(t,2),s=n[0],r=n[1];return Object(d.jsxs)(i.a,{children:[Object(d.jsxs)(u.a,{style:h.exercise,children:[e.multiplier," x ",e.root," ="]}),Object(d.jsx)(x.a,{style:h.input,onChangeText:r,value:s,placeholder:"resultaat",keyboardType:"numeric"}),!0===e.result?Object(d.jsx)(u.a,{style:h.success,children:"Correct"}):!1===e.result?Object(d.jsx)(u.a,{style:h.fail,children:"Fout"}):void 0,null!==e.result?Object(d.jsx)(b.a,{style:h.button,onPress:function(){r(""),e.handleNextPress()},children:Object(d.jsx)(u.a,{style:h.buttonText,children:"Volgende"})}):Object(d.jsx)(b.a,{style:h.button,onPress:function(){return e.handleInputCheck(s)},children:Object(d.jsx)(u.a,{style:h.buttonText,children:"Klaar."})})]})}var h=c.a.create({exercise:{color:"#888",fontSize:21,fontWeight:"bold",marginBottom:15},button:{backgroundColor:"blue",padding:20,borderRadius:5,margin:5},buttonText:{fontSize:20,color:"#fff"},input:{height:40,margin:12,borderWidth:1,padding:10},success:{color:"green"},fail:{color:"red"}});function O(e){var t=o.a.useState(function(){var t,n=[];for(t in e.selectedTables)for(var s=1;s<=10;s++)n.push({root:e.selectedTables[t],multiplier:s,result:null});return function(e){var t,n=e.length;for(;0!=n;){t=Math.floor(Math.random()*n),n--;var s=[e[t],e[n]];e[n]=s[0],e[t]=s[1]}return e}(n)}()),n=l()(t,2),s=n[0],r=n[1],a=o.a.useState(0),c=l()(a,2),j=c[0],f=c[1],x=o.a.useState(null),h=l()(x,2),O=h[0],S=h[1],v=o.a.useState(s[j].multiplier),y=l()(v,2),P=y[0],p=y[1],m=o.a.useState(s[j].root),k=l()(m,2),C=k[0],D=k[1];function R(){s.length-1>j?(f(j+1),S(null),p(s[j+1].multiplier),D(s[j+1].root)):e.saveFinalExercises(s)}function z(e){var t=s,n=t[j],l=n.multiplier*n.root;n.result=l==e,t[j]=n,r(t),S(n.result)}return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b.a,{style:g.button,onPress:function(){return e.handleReturnToStartScreen()},children:Object(d.jsx)(u.a,{style:g.buttonText,children:"Terug naar begin"})}),Object(d.jsx)(u.a,{style:g.instructions,children:"Hier komen dan de oefeningen!"}),function(){if(s!==[])return Object(d.jsx)(T,{multiplier:P,root:C,result:O,handleNextPress:R,handleInputCheck:z})}()]})}var g=c.a.create({instructions:{color:"#888",fontSize:18,marginBottom:15},button:{backgroundColor:"blue",padding:20,borderRadius:5,margin:5},buttonText:{fontSize:20,color:"#fff"}});function S(e){function t(e,t,n){return!0===e.result}return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(u.a,{style:v.instructions,children:"Hier komen dan de resultaten van de ingevulde oefeningen!"}),Object(d.jsx)(u.a,{style:v.instructions,children:function(){var n=e.result.length;return"Je score is "+e.result.filter(t).length+"/"+n+"."}()}),Object(d.jsx)(b.a,{style:v.button,onPress:function(){return e.handleReturnToStartScreen()},children:Object(d.jsx)(u.a,{style:v.buttonText,children:"Terug naar begin!"})})]})}var v=c.a.create({instructions:{color:"#888",fontSize:18,marginBottom:15},button:{backgroundColor:"blue",padding:20,borderRadius:5,margin:5},buttonText:{fontSize:20,color:"#fff"}});function y(){var e=o.a.useState([]),t=l()(e,2),n=t[0],s=t[1],a=o.a.useState("selection"),c=l()(a,2),f=c[0],x=c[1],T=o.a.useState([]),h=l()(T,2),g=h[0],v=h[1];function y(e){-1===n.indexOf(e)&&n.push(e)}function p(e){n.splice(n.indexOf(e),1)}function m(){s([]),x("selection")}return"selection"===f?Object(d.jsxs)(i.a,{style:P.container,children:[Object(d.jsx)(u.a,{style:P.instructions,children:"Selecteer de tafels die je wilt oefenen."}),Object(d.jsxs)(i.a,{style:P.tablesSelector,children:[Object(d.jsx)(j,{value:1,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:2,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:3,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:4,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:5,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:6,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:7,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:8,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:9,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p}),Object(d.jsx)(j,{value:10,selectedTables:n,onSelectTablePress:y,onDeselectTablePress:p})]}),Object(d.jsx)(b.a,{style:P.button,onPress:function(){return x("exercise")},children:Object(d.jsx)(u.a,{style:P.buttonText,children:"Invullen!"})}),Object(d.jsx)(r.a,{style:"auto"})]}):"exercise"===f?Object(d.jsxs)(i.a,{style:P.container,children:[Object(d.jsx)(O,{selectedTables:n,saveFinalExercises:function(e){v(e),x("results")},handleReturnToStartScreen:m}),Object(d.jsx)(r.a,{style:"auto"})]}):"results"===f?Object(d.jsxs)(i.a,{style:P.container,children:[Object(d.jsx)(S,{result:g,handleReturnToStartScreen:m}),Object(d.jsx)(r.a,{style:"auto"})]}):void 0}var P=c.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},tablesSelector:{backgroundColor:"#fff",alignItems:"center",justifyContent:"center",flexDirection:"row"},instructions:{color:"#888",fontSize:18,marginBottom:15},button:{backgroundColor:"blue",padding:20,borderRadius:5,margin:5},buttonText:{fontSize:20,color:"#fff"}})},69:function(e,t,n){e.exports=n(92)}},[[69,1,2]]]);
//# sourceMappingURL=app.0bd4931d.chunk.js.map