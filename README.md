# team-project-react-nodejs-backend

team-project-react-nodejs-backend

https://test-team-project-react-nodejs-production.up.railway.app

Логін відбувається при реєстрації (логіка реєстрації з підвердженням email
закоментована (поле verify ставиться одразу true)); Роут (/forgot_password)
відправляє на пошту новий пароль; Роут (/refreshtoken) рефрешить accessToken за
допомогою refreshToken (refreshToken приходить в cookies); Роут (/verify)
повторна відправка листа для верифікації мейлу (робочий але не використовується
); Роут (//verify/:verificationToken) верифікація мейлу (робочий але не
використовується ); Щоб всі роути запрацювали треба в контролері
registrationUser треба розкоментувати Option with mail confirmation (все що вище
Option with mail confirmation - видалити.)
