# Тестовое задание на позицию frontend-vue-js-разработчик

# Выполненные задания:

1. Разделил содержимое компонента `ContentBlock` на отдельные компоненты для фильтров (`filterBlock`) и списка пользователей (`usersBlock`).
2. Добавил в структуру данных списка пользователей `users` недостающие для фильтрации параметры, и предусмотрел возможность его динамической загрузки из внешнего `API`
3. Реализовал фильтрацию, используя _Vuex_ так, что бы состояние фильтров было доступно другим компонентам.
4. Добавил визуальное обозначение процесса фильтрации (**preloader**).
5. Добавил в структуру данных пользователя информацию об адресе проживания и вывод её при клике на портрет с визуальным переходом (`transitions`).


## Установка проекта
```
npm install
```

### Компиляция и hot-reloads для разработки
```
npm run serve
```