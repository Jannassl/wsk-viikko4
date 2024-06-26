# wsk-viikko4

# wsk-viikko4

## Valtuutussäännöt

Tämä sovellus käyttää token-pohjaista autentikointia ja valtuutusta. Käyttäjien on sisällytettävä voimassa oleva JWT pyyntöjensä `Authorization` otsikkoon päästäkseen suojattuihin reitteihin. Token luodaan, kun käyttäjä kirjautuu sisään.

Tässä ovat valtuutussäännöt suojatuille reiteille:

- `PUT /api/cat/:id`: Vain kissan omistaja voi päivittää kissan tiedot. Palvelin tarkistaa kissan `owner_id`:n ja dekoodatun JWT:n käyttäjän `id`:n välisen yhteyden. Jos ne eivät täsmää, palvelin vastaa 403 Forbidden -tilalla.

- `DELETE /api/cat/:id`: Vain kissan omistaja voi poistaa kissan. Palvelin tarkistaa kissan `owner_id`:n ja dekoodatun JWT:n käyttäjän `id`:n välisen yhteyden. Jos ne eivät täsmää, palvelin vastaa 403 Forbidden -tilalla.

- `PUT /api/users/:id`: Käyttäjät voivat päivittää vain omia käyttäjätietojaan. Palvelin tarkistaa päivitettävän käyttäjän `id`:n ja dekoodatun JWT:n käyttäjän `id`:n välisen yhteyden. Jos ne eivät täsmää, palvelin vastaa 403 Forbidden -tilalla.
