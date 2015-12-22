function RootComponent(){};

RootComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'root-component-selector',
  }),
  new angular.ViewAnnotation({
	templateUrl: 'app/home.html'
  })
];

document.addEventListener('DOMContentLoaded', function () {
  angular.bootstrap(RootComponent);
});