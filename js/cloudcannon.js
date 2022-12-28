// https://cloudcannon.com/documentation/articles/using-live-editing-with-vanilla-js/?ssg=Jekyll

if (!window.CloudCannon) {
  document.addEventListener('cloudcannon:load', function (e) {
    onLiveEditorLoad(e.detail.CloudCannon);
  });
} else {
  onLiveEditorLoad(window.CloudCannon);
}

function onLiveEditorLoad(CloudCannon) {
  CloudCannon.enableEvents();
}

// Editing code

document.addEventListener('cloudcannon:update', async function (e) {
  useNewPageProps(e.detail.CloudCannon);
});

async function useNewPageProps(CloudCannon) {
  const latestValue = await CloudCannon.value();
  console.log(latestValue);
  CloudCannon.set('title', latestValue);
}
