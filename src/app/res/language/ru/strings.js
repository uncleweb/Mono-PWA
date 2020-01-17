export default {
    statement: {
        __index: "выписка",
        load_more: "загрузить ещё",
        no_operations_for_last_week: "вы не пользовались этим счётом в последние семь дней",
        still_nothing: "всё ещё пусто",
        warning: "предупреждение",
        requests_throttling: `Этот счёт привязан с помощью персонального токена. 
        Так как monobank накладывает ограничение на частоту получения выписки, данные будут загружаться медленно. 
        Рекомендуется подключить счёт с помощью упрощённой авторизации.`,
        hint_customize: "Не то, что ожидали?",
        hint_customize_text: "Управляйте порядком карт и их внешним видом в меню \"Мои карты\"",
        open: "открыть",
    },
    customization: {
        open: "мои карты",
        card: "карточка",
        bank: "банк",
        look: "тип карты",
        cardholder: "носитель",
        currency: "валюта",
        looks: {
            black: "чёрная",
            grey: "серая",
            pink: "розовая",
            white: "белая",
            iron: "железная",
            yellow: "жёлтая",
        },
        warning: "Из-за ограничений monobank API приложение не может определить тип вашей карты. Тем не менее, вы можете задать его сами",
    },
    menu: "меню",
    auth: {
        __index: "Авторизация",
        you_were_unlogined: "вы деавторизированы",
        reload: "перегрузить",
        login_params_changed: "параметры входа были изменены. Выберите \" Настройки \", если хотите вернуть их в исходное состояние",
        login_promo: "войдите, чтобы использовать все возможности mono PWA",
        log_in: "войти",
        skip_step: "пропустить шаг",
        unknown_auth_method: "неизвестный метод входа",
        success: "успех",
        fail: "Не удалось подтвердить достоверность данных",
        login_data_fetch_fail: "Не удалось получить данные для входа",
        settings: {
            __index: "настройки",
            token: {
                __index: "Использовать собственный токен",
                description: "Приложение будет посылать запросы к monobank напрямую. Вы можете получить токен на портале api.monobank.ua",
                title: "Собственный токен",

                token: "токен",
            },
            domain: {
                __index: "Изменить корпоративный сервер",
                description: "Если вы не доверяете серверу, на который направляются запросы при упрощенной авторизации, вы можете изменить его",
                title: "Изменить сервер",

                unsupported_server: "несовместимый сервер",
                url: "адрес",

                proto_detected: "обнаружен сервер",
                name: "название",
                author: "автор",
                proto_ver: "версия протокола",
                visit_homepage: "домашняя страница",
                server_message: "сообщение от",
                see_link: "открыть ссылку",
            },
            revert: {
                __index: "Продолжить как всегда",
                description: "Отказаться от конфигурирования авторизации и вернуться к умолчаниям",
            },
        },
        stage: {
            link: "ссылка",
            opening: "открываем monobank ...",
            copied: "Ссылка скопирована в буфер обмена, руководствуйтесь ниже указанными шагами",
            auto_link: "Вход должен состояться автоматически. Если же этого не произошло, руководствуйтесь ниже указанными шагами",
            open: "открыть",
            qr: "QR",
            cancel: "отменить",
            authed: "авторизовано",
            error: "произошла ошибка",
            timeout: "время истекло",
            instructions: {
                scan: {
                    __index: "Отсканируйте QR код",
                    description: "Используя любое приложение для сканирования QR кодов на устройстве с установленным monobank (например, Google Lens)",
                },
                follow: {
                    __index: "Перейдите по ссылке",
                    description: "Откройте ссылку, или скопируйте URL адрес в браузер на вашем мобильном устройстве",
                },
                permissions: {
                    __index: "Предоставьте доступ",
                    description: "Подтвердите в окне приложения monobank доступ к некоторым данным",
                },
            },
        },
    },
    p4: {
        __index: "покупка частями",
        partners: "партнёры",
        fetch_fail: "ошибка получения списка партнёров",
        try_later: "попробуйте позже",
        retry: "повторить",
        cached_title: "данные могут быть неактуальными",
        cache_for: "это сохраненная копия по состоянию на",
        online: "заказ онлайн",
        delivery: "с доставкой",
        delivery_exp: "этот индикатор означает, что при покупке частями партнер предоставляет возможность оформить заказ онлайн с доставкой",
        online_exp: "этот индикатор означает, что при покупке частями партнер предоставляет возможность оформить заказ онлайн, но получить его можно лишь посетив магазин",
        categories: "категории",
        category: "категория",
        choose_category: "выберите категорию",
        all: "все",
        no_data: "нет данных для показа",
    },
    currency: {
        __index: "курсы валют",
        one: "валюта",
        numbers: "курс",
        buy: "покупка",
        sell: "продажа",
        refresh: "обновить",
        payment_systems: "курсы платёжных систем",
        result: "результат",
        amount: "количество",
        convert: "конвертер валют",
        refreshing: "обновление...",
        refreshed: "обновлено",
        error_refresh: "ошибка обновления",
        cached_title: "данные могут быть неактуальными",
        cache_for: "это сохраненная копия по состоянию на",
        fetch_fail: "ошибка получения курса валют",
        try_later: "попробуйте позже",
        rerty: "повторить",
    },
    recovery_mode: {
        __index: "Аварийный режим",
        enter: "перезапустите приложение для входа в Аварийный режим",
        now: "Аварийный режим активен",
        back_to_normal: "Перезапустите приложение без специального хеша, чтобы покинуть его",
        idb_fail: {
            warning: "внимание",
            description: "у mono PWA возникли трудности при попытке использования хранилища браузера. Используйте Google Chrome или Mozilla Firefox",
            dl_chrome: "загрузить Chrome",
            dl_ff: "загрузить Firefox",
        },
    },
    units: {
        min: {
            type: "func",
            name: "plural",
            data: ["минута", "минуты", "минут"],
        },
    },
    dateformats: {
        week: {
            __index: "неделя",
            days: {
                __index: "дни недели",
                7: "воскресенье",
                1: "понедельник",
                2: "вторник",
                3: "среда",
                4: "четверг",
                5: "пятница",
                6: "суббота",
            },
        },
        month: {
            __index: "месяц",
            1: "январь",
            2: "февраль",
            3: "март",
            4: "апрель",
            5: "май",
            6: "июнь",
            7: "июль",
            8: "август",
            9: "сентябрь",
            10: "октябрь",
            11: "ноябрь",
            12: "декабрь",
            months: {
                __index: "месяца",
                1: "января",
                2: "февраля",
                3: "марта",
                4: "апреля",
                5: "мая",
                6: "июня",
                7: "июля",
                8: "августа",
                9: "сентября",
                10: "октября",
                11: "ноября",
                12: "декабря",
            },
        },
        relative: {
            today: "сегодня",
            yesterday: "вчера",
            tomorrow: "завтра",
        },
        at: "в",
    },
    settings: {
        __index: "настройки",
        locked_item: "Подсказка: Вы не можете вносить здесь изменения",
        restart_to_apply: "перегрузите для применения изменений",
        errors: {
            no_page: "такой страницы настроек нет",
            layout_failed: "похоже, у нас не вышло загрузить Настройки",
        },
        auth: {
            __index: "авторизация",
            log_in: "войти",
            not_logined_title: "вы не вошли в аккаунт",
            not_logined_text: "войдите, чтобы использовать все функции",
            personal_token: "персональный токен",
            monobank_account: "аккаунт monobank",
            add_account: "добавить аккаунт",
        },
        actions: {
            open_about: "о приложении",
            go_main: "на главную",
            restart: "перегрузить",
        },
        general: {
            __index: "общие",
            information: "информация",
        },
        language: "язык",
        storage: {
            __index: "хранилище",
            used: "использовано",
            of: "из",
            calculating: "расчет",
            cleanup_planned: "при следующем запуске будет выполнена очистка",
            over_quota: "хранилище превысило лимит, но не поддерживает автоматическую очистку",
            dbs: {
                logs: {
                    __index: "отчеты",
                    description: "основная информация о работе приложения для отладки",
                },
                offline_cache: {
                    __index: "автономные данные",
                    description: "сохраненная информация, полученная из Интернета, для работы с ней без подключения к сети",
                },
                accounts: {
                    __index: "аккаунты",
                    description: "ваши авторизированные профили monobank",
                },
                statement_cache: {
                    __index: "выписка",
                    description: "сохранённая копия выписок из ваших аккаунтов",
                },
                card_settings: {
                    __index: "карты",
                    description: "настройки карт, такие как их порядок, цвет и т.д.",
                },
            },
            actions: {
                clear: "очистить",
                export: "экспорт",
                import: "импорт",
                log_out: {
                    __index: "выйти",
                    you_will_log_out: "продолжая, вы выйдете из всех аккаунтов",
                },
            },
        },
        updates: {
            __index: "обновления",
            ready: "обновление уже здесь",
            tell_more: "подробнее",
            later: "позже",
            restart_now: "применить сейчас",
            new_update: "новая версия готова к установке",
        },
        tf: {
            __index: "трансформаторы",
            tf_instances: "экземпляры",
            unlocked: "разблокировано",
            locked: "заблокировано",
            tf_methods: "методы",
        },
    },
    about: {
        __index: "о",
        app: "о программе",
        version: "версия",
        build_date: "дата сборки",
        branch: "ветка",
        debug: "отладка",
        disclaimer_title: "дисклеймер",
        disclaimer: `mono PWA не является официальным приложением и не относится каким-либо образом к monobank. 
Приложение использует общедоступное API и не передаёт данные о использовании на хранение кому-либо. 
Если вы против передачи своих личных данных для поддержания работы сервиса, вы должны отказаться от сервиса упрощённой авторизации. 
Вы всегда в праве использовать авторизацию с помощью персонального токена, чтобы данные передавались 
непосредственно в monobank. Вы берёте на себя ответственность за любые исходящие запросы от имени этого приложения, сделанные 
вами осведомлённо. 
Приложение собирает некоторые деперсонифицированные данные, такие как количество привязанных аккаунтов, наличие приобретенной валюты, 
наиболее частая категория транзакции и т.п., через сервис Google Analytics. Ваши имя, фамилия, уникальные идентификаторы и другие 
чувствительные данные не подлежат передаче кому-либо. Все передаваемые данные используются разработчиком исключительно с целью 
анализа аудитории, улучшая таким образом опыт использования программы. Вы всегда можете отказаться от сбора данных в 
меню "Эксперименты" (/flags) или включив функцию "Do Not Track" в настройках браузера. 
Вы всегда в праве обратиться за исходным кодом приложения по адресу me@sominemo.com, 
изменять, публиковать, исполнять код в любой форме, при этом отвественность за содержимое уже будет лежать именно на вас.`,
    },
    experiments: {
        __index: "эксперименты",
        miscellaneous: "разное",
        warning: "предупреждение",
        harmful_actions: `эти опции экспериментальны и некоторые из них могут вызывать проблемы, нарушать стабильность приложения или вовсе препятствовать его работе.
        После внесения изменений стоит перегрузить приложение.`,
        reload_page: "перегрузить",
        reset_flags: "сбросить",
        list: "список",
        no_exps_placeholder: "сейчас тестировать нечего",
    },
    download_statement: {
        __index: "загрузить выписку",
        download: "начать",
        working: "загрузка",
        disable_offline_mode: "выключите автономный режим",
        from: "от",
        to: "до",
        incorrect_range: "неверный диапазон",
        description: "Загрузка выписки может понадобиться, если вы хотите пользоваться историей операций за определенный период без доступа к сети. Будет сохранено выписку каждого доступного счета.",
    },
    unexpected_error: "ой!",
    select_option: "выберите из списка",
    tap_to_change: "нажмите, чтобы изменить",
    done: "готово",
    select_file: "выберите файл",
    success: "успех",
    failure: "неудача",
    dev_warn: "эта функция находится в стадии разработки",
    preview_warn: "эта функция сейчас тестируется и может работать неправильно",
    close: "закрыть",
    next: "дальше",
    accept: "принять",
    continue: "далее",
    search: "поиск",
    offline_mode: "автономный режим",
    quick_settings: "опции",
    show_minor_part: "показывать копейки",
}
