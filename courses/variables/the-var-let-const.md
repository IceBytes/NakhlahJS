---
title: الاختلافات بين var، let، const
snippet: إحدى أكبر مشكلات الإعلان عن المتغيرات
order: 5
---

إحدى أكبر مشكلات الإعلان عن المتغيرات باستخدام الكلمة الأساسية `var` هي أنه
يمكنك بسهولة استبدال إعلانات المتغيرات:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

في الكود أعلاه، تم تعريف متغير في الأصل باسم `James`، ثم تم تجاوزه ليكون
`David`. ثم تعرض وحدة التحكم السلسلة `David`.

إذا كنت تستخدم تطبيقًا صغيرًا، فقد لا تواجه هذا النوع من المشكلات. ولكن عندما تصبح
قاعدة التعليمات البرمجية الخاصة بك أكبر، قد تقوم عن طريق الخطأ بالكتابة فوق
متغير لم تكن تقصد القيام به. نظرًا لأن هذا السلوك لا يؤدي إلى حدوث خطأ، يصبح
البحث عن الأخطاء وإصلاحها أكثر صعوبة.

تم تقديم كلمة رئيسية تسمى `let` في `ES6`، وهو تحديث رئيسي لجافا سكريبت، لحل هذه
المشكلة المحتملة مع الكلمة الأساسية `var`. ستتعرف على ميزات `ES6` الأخرى في
التحديات اللاحقة.

## التعمق في let

```js
let camper = "James";
let camper = "David"; // حدوث خطأ
```

إذا قمت باستبدال `var` إلى `let` بالتعليمات السابقة، فسيؤدي ذلك إلى حدوث خطأ
يمكن رؤية الخطأ في وحدة التحكم عبر تشغيل التعليمات.

لذا، على عكس `var`، عند استخدام `let`، لا يمكن الإعلان عن متغير يحمل نفس الاسم
إلا مرة واحدة.

## const تعريف متغير للقراءة فقط

let ليست هي الطريقة الجديدة الوحيدة للإعلان عن المتغيرات. في `ES6`، يمكنك أيضًا
الإعلان عن المتغيرات باستخدام الكلمة const.

يحتوي `const` على جميع الميزات الرائعة التي يتيحها `let`، بالإضافة إلى الميزة
الإضافية المتمثلة في أن المتغيرات المعلنة باستخدام `const` تكون للقراءة فقط.
إنها قيمة ثابتة، مما يعني أنه بمجرد تعيين متغير باستخدام `const`، لا يمكن إعادة
تعيينه.

```js
const PASSWORD = 123;
PASSWORD = 987; // حدوث خطأ بسبب إعادة تعيينه
```

ستعرض وحدة التحكم خطأً بسبب إعادة تعيين قيمة PASSWORD.

يجب عليك دائمًا تسمية المتغيرات التي لا تريد إعادة تعيينها باستخدام الكلمة
الأساسية `const`. يساعد هذا عندما تحاول عن طريق الخطأ إعادة تعيين متغير من
المفترض أن يظل ثابتًا.

<mark>
من الشائع للمطورين استخدام معرفات المتغيرات الكبيرة للقيم غير القابلة للتغيير
والأحرف الصغيرة أو CamelCase للقيم القابلة للتغيير
</mark>

## الخلاصة

```js
var x = 5; // تعريف متغير
var x = 15; // اعاده تعريف متغير
x = 10; // اعاده تعيين قيمه

// يمكن اعاده تعريف متغير  ( var )
// لايمكن اعاده تعريف متغير ( let )
// لايمكن اعاده تعريف متغير ( const )

// يمكن اعاده تعيين قيمه  ( var )
// يمكن اعاده تعيين قيمه  ( let )
// لايمكن اعاده تعيين قيمه ( const )
```

<div class="quiz">
لا يوجد أي إختبارات لهذا الدرس فقط قم بالضغط على إختبار من ثم إن

تقل للدرس التالي
</div>
 صحح الأخطاء الإملائية هنا