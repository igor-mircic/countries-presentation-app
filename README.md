# Countrie Presentation App

Projekat koristi:

- Angular v12.0.5
- Node v14.17.1

## Opis

Countries Presentation App je aplikacija koja se izradjuje u okviru [Ingsoftware](https://www.ingsoftware.com/) front-end testa.

U nastavku se nalaze zahtevi i sve informacije potrebne da se ova aplikacija implementira.

## Zahtevi

Glavni cilj je integracija sa API-jem [REST Countries API](https://restcountries.eu) koji obezbedjuje informacije o drzavama i prikaz istih po navedenom dizajnu.

Moguca je upotreba bilo kog Javascript frameworka poput [React](https://reactjs.org) ili [Vue](https://vuejs.org), ili Vanila JS pristup. Takodje, kandidat ima potpunu autonomiju prilikom odabira paketa i biblioteka koje ce se koristiti za implementaciju HTTP request-ova i stilizovanje aplikacije.

Korisnici ove aplikacije treba da:

- Vidi sve drzave sa API-ja na pocetnoj stranici
- Pretrazuju zemlje pomocu `input` polja
- Filtriraju drzave po regionu
- Vide detaljne informacije o drzavi u novoj stranici, kojoj pristupaju klikom na zeljenu drzavu
- Odaberu drzavu za prikaz kroz sekciju `Border Countries` na stranici sa detaljima
- Imaju mogucnost promene iz Light u dark temu i obrnuto

## Dodatne informacije

Zadatak je izrada aplikacije po dizajnu koji se nalazi u `.design` folderu.

Tamo se nalazi desktop i mobilna verzija dizajna.

Dizajn je u JPG formatu, sto znaci da je potrebno koristiti svoj sud kada su u pitanju `font-size`, `padding` i `margin`.

Ne postoje dodatne slike, shodno tome da zastave drzava dolaze putem [REST Countries API](https://restcountries.eu), a pozeljno je korisiti neku biblioteku za ikonice.

Informacije poput boja i fontova nalaze se u `style-guide.md` fajlu.

## Plan rada

Potrebno je definisati plan rada sa kojim se kandidat oseca najkomfornije. U nastavku se nalazi predlog plana, ali nije obavezno pratiti isti.

1. Inicijalizacija projekta kao public repozitorijum na [GitHub] (https://github.com/) ili [GitLab] (https://gitlab.com/)
2. Pregled dizajna i planiranje implementacije. Ovaj korak je prilicno bitan kako bi se moglo unapred razmisljati o CSS kodu za visestruku upotrebu.
3. Pre nego sto se doda bilo koji stil, potrebno je struktuirati sadrzaj pomoću HTML-a. Prvo pisanje HTML-a moze pomoci da se paznja usmeri na stvaranje dobro strukturiranog sadrzaja.
4. Zapisivanje osnovnih stilova za projekat, ukljucujuci opste stilove, poput `font-family` i` font-size`.
5. Dodavanje stilova od vrha stranice iduci ka dole. Predlog je potpuno zavrsiti jednu celinu i onda preci na sledecu.

**Srecno!** 🚀
