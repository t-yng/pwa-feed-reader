<template>
  <div class="feed-add plus-icon"></div>
</template>

<style>
.plus-icon {
    height: 16px;
    width: 2px;
}

.plus-icon::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
}

.plus-icon,
.plus-icon::before {
  background-color: #959595;
  border-radius: 2px;
}
</style>
