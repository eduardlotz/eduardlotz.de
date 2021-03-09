"use strict";

var cursor = document.querySelector('#cursor');
var cursorCircle = cursor.querySelector('.cursor__circle');
var mouse = {
  x: -100,
  y: -100
}; // mouse pointer's coordinates

var pos = {
  x: 0,
  y: 0
}; // cursor's coordinates

var speed = 0.1; // between 0 and 1

var updateCoordinates = function updateCoordinates(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  var maxSqueeze = 0.15;
  var accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}

var updateCursor = function updateCursor() {
  var diffX = Math.round(mouse.x - pos.x);
  var diffY = Math.round(mouse.y - pos.y);
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  var angle = getAngle(diffX, diffY);
  var squeeze = getSqueeze(diffX, diffY);
  var scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
  var rotate = 'rotate(' + angle + 'deg)';
  var translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
var cursorModifiers = document.querySelectorAll('[cursor-class]');
cursorModifiers.forEach(function (curosrModifier) {
  curosrModifier.addEventListener('mouseenter', function () {
    var className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  curosrModifier.addEventListener('mouseleave', function () {
    var className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});