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
