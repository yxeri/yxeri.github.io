!function e(t,n,r){function o(i,l){if(!n[i]){if(!t[i]){var a="function"==typeof require&&require;if(!l&&a)return a(i,!0);if(s)return s(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return o(n?n:e)},u,u.exports,e,t,n,r)}return n[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(){"use strict";function e(e){for(var t=e.elements,n=0;n<t.length;n++)t[n].classList.add("collapse")}function t(e){for(var t=e.elements,n=function(e){var n=t[e];n.addEventListener("click",function(){n.parentElement.classList.toggle("collapse")})},r=0;r<t.length;r++)n(r)}var n=document.getElementsByClassName("topArticle"),r=document.getElementsByClassName("topSection"),o=document.getElementsByTagName("header");e({elements:n}),e({elements:r}),t({elements:o})},{}]},{},[1]);