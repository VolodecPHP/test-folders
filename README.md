# Результати тестового завдання:

## Загальний коментар: 

Загалом реалізував `tree-view`, проте залишилось дуже багато запитань. В реальному проекті для такої задачі потрібно було б зібрати набагато більше даних. Рішення, що імплементував, є не найоптимальнішим, проте на мою думку -- в 95% задач і не потрібно проводити "передчасну оптимізацію". 

Далі коротко пройдусь по кожному з пунктів у завданні і опишу результат:

1) `Написати структуру даних для папок та файлів, яку б ви хотіли отримувати від Backend API (приклад response json-файлу для подальшої роботи з даними).`

Структура у моєму випадку дуже проста -- надсилати і зберігати усе одним шматком. Без оптимізацій, без поділу на саб-дерева. Клієнт в такому випадку несе повну відповідальність за валідацію даних, і надсилає на сервер один великий JSON-об'єкт. Чи оптимально це? Для певного скоупу задач -- так. Не маючи інформації про те, як такий `tree-view` буде використовуватися, неможливо визначити оптимальну стратегію. Якщо це тула, для випадків, коли користувачі мають до 300 файлів, поточне рішення підійде ідеально. Або наприклад у нас на проекті 4 застосунки і 1 бекендер, в такому разі також оптимально винести максимум логіки на фронт. Звісно, якщо ми будуємо застосунок, для перегляду файлів і наші користувачі зазвичай мають по 500-100 файлів, рішення виглядало б зовсім по іншому. В такому разі я б підвантажував дочірні елементи по кліку, або ліниво. Але повторюсь -- не бачу сенсу займатись передчасною оптимізацією, оскільки усі вимоги невідомі.

2) `Реалізувати tree view (розгортаючийся список вкладених папок).`

Тут питання і коментарі відсутні

3) `При кліку на папку відобразити вкладені папки, файли 1-го рівня. - продумати всі
випадки відображення (відсутність стрілки для порожніх папок, індикатор у активному
контейнері).`

Реалізував таку логіку, проте не до кінця зрозумів другу частину. В реальному житті б засинхронізувався з дизайнером / продактом і обговорив б усі можливі варіанти. В цьому тестовому завданні цілком можливо, що щось прогавив

4) `Додати пошук за назвою папок, файлів.`

Додав пошук, але є багато але... Пошук загалом дуже важка штука, і ТЗ до нього може займати кілька пдф сторінок. Тут десятки корнер кейсів. Також повертаюся до використання застосунку. Не надто заморочувався над оптимальністю пошуку. У мене це рекурсивна функція, яка шукає співпадіння. Якщо в середньому у користувачів було б 500+ файлів, можливо таку функцію потрібно було переписати або оптимізувати. Але для малого числа файлів у цьому немає ніякого сенсу

## Nice to have:

5) `Написати тест-кейс на пошук за назвою.`

Увесь пошук був реалізований за принципом - "спочатку тести потім логіка". Тому у цьому випадку написав багато тестів, а потім уже імплементовував пошук

6) `Реалізувати права доступу для кожної папки, файла.`

Права доступа ще одна важка тема. Загалом реалізував на якомусь рівні, але тут також ТЗ може бути на кілька пдф сторінок. Корнер кейсів купа, тому реалізував простенький сценарій, де кожен файл і папка має свій рівень доступу. Також обмежувати користувачів в видаленні / редагуванні і створенні потрібно в першу чергу на стороні сервара, тому клієнтський захист це лише "захист від дурня", бо його доволі легко минути

7) `Розібратися з функціоналом переміщення та видалення папок, файлів.`

Розібратися це реалізувати? Чи описати як б робив? Реалізував лише видалення, бо воно простеньке. Для переміщення використав б готову бібліотеку. Загалом уже маю досвід з таким переміщенням і drag-and-drop, тому думаю це було б не важко зробити. Але на це піде 3-4 години(особлива увага має бути до айфонів і їх багах з перетягуваннями елементів)

8) ` Знайти потенційно вразливі місця з точки зору продуктивності.`

- Через те, що запитами шлеться весь об'єкт -- для користувачів з слабким інтернетом буде відбуватися довгий лоадер при великій кількості файлів. Знову ж таки, це не слабке місце а особливість реалізації, але про це потрібно памятати. Вирішити можна шляхом `patching` окремих гілок дерева, а не надсиланянм усього об'єкту, але на це піде набагато більше часу

- Логіка пошуку на клієнті -- пошук здійснюється на клієнті, тому на слабких девайсах може тормозити при великій кількості файлів. Загалом це відбувається через велику кількість ререндерів. При необхідності і на реальному проекті я б це віддебажив через девтулзи і спробував оптимізувати. Якщо підсумувтати: звернув би увагу на перемалювання і переобчислення стилів

- Для слабших девайсів і для великої кількості файлів можна змінити "бізнес логіку", а саме змінити підхід до пошуку, розгортання і тп. ЯКЩО ЦЕ ПОТРІБНО

Якщо підсумувати: було імплементовано просте рішення, в якому уся логіка у нас знаходиться на клієнті. На сервер надсилається усе дерево. Вантажиться воно також одним шматком. Якщо необхідно оптимізувати це рішення -- можна легко винести окремі гілки дерева в асинхронні запити, і ліниво вантажити їх. Також можна розділити дерево і самі вузли і тримати їх окремо. Так буде більше навантаження на мережу, але набагато менше на девайс користувача. Тому неможливо сказати яка імлпементація правильніша, усе залежить від умов: розміру команди, можливостей користувачів, часу на розробку, того, як застосунок буде використосуватися(з якими об'ємами даних)