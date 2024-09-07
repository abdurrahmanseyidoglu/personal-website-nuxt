---
title: مقارنة بين var و let و const
description:  مقارنة بين var و let و const
date: 2024-09-07
cover: let-const-var.jpeg
tags:
  - JS
  - Front-End
---

## مقارنة بين `var` و `let` و `const`

في JavaScript، يمكن إعلان المتغيرات باستخدام ثلاثة كلمات رئيسية: `var` و `let` و `const`. لكل من هذه الكلمات خصائص مميزة تتعلق بالنطاق، وإعادة الإعلان، وإعادة التعيين، والرفع. فهم هذه الاختلافات أمر بالغ الأهمية لكتابة كود نظيف وخالي من الأخطاء.

### 1. النطاق

- **`var`**: 
  - **النطاق**: `var` له نطاق محلي داخل الدالة أو نطاق عالمي. هذا يعني أنه إذا تم إعلان متغير باستخدام `var` داخل دالة، فلن يكون متاحًا خارج تلك الدالة. ومع ذلك، إذا تم إعلانه خارج أي دالة، يمكن الوصول إليه في أي مكان في الكود.
  
  ```javascript
  var globalVar = "أنا متغير عام";

  function testVar() {
      var localVar = "أنا متغير محلي";
      console.log(globalVar); //يمكن الوصول له
      console.log(localVar);   //يمكن الوصول له
  }

  testVar();
  console.log(globalVar); //يمكن الوصول له
  console.log(localVar);   // ReferenceError: localVar is not defined
  ```

- **`let`** و **`const`**: 
  - **النطاق**: كلا من `let` و `const` لهما نطاق محلي. هذا يعني أنهما متاحان فقط داخل الكتلة الأقرب (المحددة بواسطة `{}`)، مثل الحلقات أو الشروط.
  
  ```javascript
  if (true) {
      let blockScopedLet = "أنا محلي في الكتلة";
      const blockScopedConst = "أنا أيضًا محلي في الكتلة";
      console.log(blockScopedLet);   //يمكن الوصول له
      console.log(blockScopedConst);  //يمكن الوصول له
  }

  console.log(blockScopedLet);   // ReferenceError: blockScopedLet is not defined
  console.log(blockScopedConst);  // ReferenceError: blockScopedConst is not defined
  ```

### 2. إعادة الإعلان وإعادة التعيين

- **`var`**:
  - **إعادة الإعلان**: يمكن إعادة إعلان المتغيرات التي تم إعلانها باستخدام `var` في نفس النطاق دون أي أخطاء.
  - **إعادة التعيين**: يمكن إعادة تعيين المتغيرات بقيم جديدة.
  
  ```javascript
  var x = 10;
  var x = 20; // لا يوجد خطأ
  x = 30; // تمت إعادة التعيين
  console.log(x); // 30
  ```

- **`let`**:
  - **إعادة الإعلان**: لا يمكن إعادة إعلان المتغيرات التي تم إعلانها باستخدام `let` في نفس النطاق. محاولة القيام بذلك ستؤدي إلى خطأ.
  - **إعادة التعيين**: يمكن إعادة تعيين المتغيرات بقيم جديدة.
  
  ```javascript
  let y = 10;
  // let y = 20; // SyntaxError: Identifier 'y' has already been declared
  y = 30; // تمت إعادة التعيين
  console.log(y); // 30
  ```

- **`const`**:
  - **إعادة الإعلان**: لا يمكن إعادة إعلان المتغيرات التي تم إعلانها باستخدام `const` في نفس النطاق.
  - **إعادة التعيين**: لا يمكن إعادة تعيين المتغيرات بعد تعيينها لأول مرة. وهذا يجعل `const` مناسبًا للثوابت.
  
  ```javascript
  const z = 10;
  // const z = 20; // SyntaxError: Identifier 'z' has already been declared
  // z = 30; // TypeError: Assignment to constant variable.
  console.log(z); // 10
  ```

### 3. الرفع (Hoisting)

- **`var`**: 
  - يتم رفع المتغيرات المعلنة باستخدام `var` إلى أعلى نطاقها ويتم تهيئتها إلى `undefined`. هذا يعني أنه يمكنك الإشارة إليها قبل إعلانها في الكود.
  
  ```javascript
  console.log(a); // undefined
  var a = 5;
  console.log(a); // 5
  ```

- **`let`** و **`const`**: 
  - يتم رفع كلا من `let` و `const` أيضًا، لكن لا يتم تهيئتهما. الوصول إليهما قبل إعلانهما يؤدي إلى `ReferenceError`.
  
  ```javascript
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  console.log(b); // 10

  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 20;
  console.log(c); // 20
  ```

### جدول ملخص

| الكلمة الرئيسية | النطاق                 | إعادة الإعلان         | إعادة التعيين          | الرفع                                      |
|-----------------|-----------------------|-----------------------|-----------------------|-------------------------------------------|
| `var`           | محلي/عالمي            | نعم                   | نعم                   | مرفوعة ومهيأة إلى `undefined`              |
| `let`           | محلي                  | لا                    | نعم                   | مرفوعة ولكن غير مهيأة                      |
| `const`         | محلي                  | لا                    | لا                    | مرفوعة ولكن غير مهيأة                      |

### أفضل الممارسات

- **استخدم `const`** بشكل افتراضي للمتغيرات التي لا ينبغي أن تتغير. يساعد ذلك في الحفاظ على الثبات ويسهل فهم الكود.

- **استخدم `let`** عندما تعرف أن قيمة المتغير ستتغير، مثل في الحلقات أو الشروط.

- **تجنب استخدام `var`** في JavaScript الحديثة، حيث يمكن أن يؤدي إلى الارتباك بسبب نطاقه المحلي وسلوك الرفع.

من خلال فهم الاختلافات بين `var` و `let` و `const`، يمكنك كتابة كود JavaScript أنظف وأكثر توقعًا.