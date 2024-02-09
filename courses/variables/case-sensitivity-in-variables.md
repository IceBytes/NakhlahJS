---
title: فهم حساسية الحالة في المتغيرات
snippet: في JavaScript، جميع المتغيرات وأسماء الوظائف حساسة لحالة الأحرف
order: 4
---

في JavaScript، جميع المتغيرات وأسماء الوظائف حساسة لحالة الأحرف. وهذا يعني أن
التسمية مهمة.

`MYVAR` ليس هو نفسه `MyVar` أو `myvar`. من الممكن أن يكون لديك عدة متغيرات مميزة
بنفس الاسم ولكن بحالة مختلفة. يُوصى بشدة بعدم استخدام ميزة اللغة هذه، من أجل
الوضوح.

## طريقة التسمية المفضلة

طريقة التسمية المفضلة في مجتمع JavaScript هي ال`camelCase`. يمكنك التعرف على
ال`camelCase` عبر
[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Camel_case).

أمثلة التسمية في ال`camelCase`:

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

<div class="quiz">
قم بطباعة المتغير الذي يحقق تسمية ال`camelCase`.
</div>