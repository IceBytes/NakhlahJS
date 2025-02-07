---
title: عوامل مركبة
snippet: في عالم البرمجة، تُستخدم المشغلات أو العوامل لأداء العمليات على البيانات.
order: 5
---

في عالم البرمجة، تُستخدم المشغلات أو العوامل لأداء العمليات على البيانات. تأتي المشغلات بأنواع متعددة، كما ذكرنا في الدروس السابقة مثل `*`, `-`, `=` وغيرها الكثير ذكرناها في الدروس وغيرها لم نذكرها بعد.

سنتعرف في هذا الدرس على العوامل المركبة.

في البرمجة، من الشائع استخدام العوامل لتعديل محتويات المتغير. وتذكر أن كل ما يقع على يمين علامة التساوي يتم تقييمه أولاً، لذا يمكننا أن نقول:

```js
let myVar = 5;
myVar = myVar + 5;
console.log(myVar); // 10
```

لإضافة `5` إلى `myVar`. وبما أن هذا النمط شائع، فهناك عوامل تقوم بإجراء عملية رياضية وتعيين في خطوة واحدة.

أحد هذه العوامل هو العامل المركب `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar); // 6
```

مثل العامل المركب `+=`، `-=‍` يطرح رقمًا من المتغير.

```js
myVar -= 5;
```

وأيضًا، العامل المركب `*=` يضرب المتغير.

```js
myVar *= 5;
```

وأخيرًا، العامل المركب `/=` يقسم المتغير.

```js
myVar /= 5;
```

<div class="quiz">
قم بإنشاء متغير يسمى myVar واجعل قيمته 5. ثم استخدم العامل المركب <code>=+</code> لإضافة <code>10</code> إلى myVar.
</div>