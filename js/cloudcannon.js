window.CloudCannon?onLiveEditorLoad(window.CloudCannon):document.addEventListener("cloudcannon:load",function(n){onLiveEditorLoad(n.detail.CloudCannon)});function onLiveEditorLoad(n){n.enableEvents()}document.addEventListener("cloudcannon:update",async function(n){useNewPageProps(n.detail.CloudCannon)});async function useNewPageProps(n){const e=await n.value();if(console.log(e),"title"in e){const t=document.getElementById("post-title");t.innerText=e.title}}