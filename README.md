# Место

# Спринт 8: Webpack

**Сдан на вторую проверку после академа**: 27.01.2020

[Ссылка на проект в Pages](https://space-boss.github.io/mesto/)


* Углубление работы с классами и модулями. Основной функционал страницы разбит на классы и вынесен из index.js.
* Создан отдельный файл с константами, теперь они не прописываются в index.js/классах а добавляются туда через импорт
* Сборка проекта на вебпаке. Адаптация изображений в html и js для обработки вебпаком.


##  History

# Спринт 7: ООП

**Сдан на вторую проверку**: 30.11.2020


Основые исправления:
* механика открытия увеличенной картинки вынесена из класса карточки в script.js
* исправлены методы закрытия и открытия попапов
* исправлены названия ряда функций



**Сдан на первую проверку**: 26.11.2020

Рефакторинг кода в сторону использования объектов - карточки и валидации форм.

Карточка принимает следующие функции как методы: создание элемента из шаблона, создание карточки с заголовком и изображением которые будут передаваться из массива,
слушатели событий, добавление лайка, удаление карточек, открытие попапа с увеличенной фотографией места.

Конструктор объекта валидации принимает на вход настройки с элементами валидируемой формы, имеет методы показа и скрытия сообщения об ошибке, установку слушателей событий, проверку валидности вводимых данных и переключения статуса кнопки.




# Спринт 6: Валидация форм и закрытие попапа


**Сдан на третью проверку**: 01.11.2020

[Ссылка на проект в Pages](https://space-boss.github.io/mesto/)

Исправления:

* Попап с увеличенной картинкой места открывается при клике на кнопку с картинкой
* Подкорректировано форматирование (пробелы и ; после функций)
* Устранен дублирующийся код в логике открытия и закрытия попапов
* Исправлена ошибка в установке слушателя при закрытии попапа на esc



**Сдан на вторую проверку**: 31.10.2020

Основные исправления:

* Устранены недочеты в форматировании кода
* Исправлена верстка лейбла с сообщением об ошибке - уведомление корректно отображается при нескольких
  строках текста и на маленьких разрешениях
* Картинки карточек являются интерактивными элементами визуально
* Исправлен функционал закрытия попапа: обработчик событий при нажатии esc срабатывает только на открытом попапе


**Сдан на первую проверку**: 30.10.2020

Основной объем задания был посвящен валидации форм попапов "О себе" и "Новое место" с помощью java script.

* Формы проходят проверку на соответствие требованиям к полям в html
* Сверстаны и подключены уведомления об ошибках, заполненные браузерным текстом
* Кнопка оправления формы меняет состояние в зависимости от того, прошла ли форма проверку
* Код валидации форм универсален, переменные классов переданы в функции как ключи обработчика событий
* Доработаны опции закрытия попапа - теперь зыкрыть окно можно нажатием на фон или кнопку esc



## Спринт 5: Добавление функционала в проект

**Сдан на первую проверку**: 20.10.2020


Расширение функционала проекта, созданного в рамках четвертого спринта Практикума.
Продолжение работы с элементами DOM и добавлением элементов в верстку с помощью java script.

Добавлены следующие возможности:
* Добавление кастомных карточек с фотографией и заголовком места в массив,
* Удаление карточек
* Проставление лайков местам (пока что без создания отдельного списка с фаворитами)
* Увеличение изображения места

Пока что данные манипуляции проходят только во время сессии в браузере, без доступа к бэкэнду.



##  Спринт 4: Место

**Сдан на третью проверку**: 03.09.2020

Внесены исправления в соответствии с замечаниями в теле кода.


**Сдан на вторую проверку**: 01.09.2020

Основные исправления:
* Исправлена структура js-файла, в процесс объявления и вызова переменных внесен порядок
* При внесении изменений в поля "имя" и "о себе" новые параметры отражаются в плейсхолдерах формы
* Внесена ясность в верстку кнопок
* Попап корректно отображается в том числе на низких разрешениях, кнопка закрытия не уплывает за границы экрана
* Изменена верстка профиля пользователя, грид вместо флексбокс верстки



**Сдан на первую проверку**: 25.08.2020
(cкорее всего автору придется уйти в академ, но очень хочется сдать хотя бы первую и вторую работы)

Вероятные доработки:
* Улучшение верски блока с профилем пользователя и оптимизация позиционирования элементов (кнопка редактирования информации о пользователе)
* Проверка кода на неиспользуемые элементы
* Тренировка работы с ветками Гита




