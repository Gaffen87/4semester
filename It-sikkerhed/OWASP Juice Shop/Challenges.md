# XSS

## DOM XSS
- Perform a DOM XSS attack with `<iframe src="javascript:alert('xss')" >`.

Første skridt er at finde et sted hvor man kan indtaste brugerinput.
Den mest oplagte mulighed er søgefeltet i navigationsbjælken.
Man kopierer scriptet ind og trykker enter og en alert box skulle gerne poppe op med teksten 'xss'.

## Bonus payload
- Use the bonus payload `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>` in the _DOM XSS_ challenge.

Løses ligesom sidste challenge bare med anden script, der får en soundcloud frame frem der afspiller en jingle.

# Broken Access Control

## Web3 Sandbox
- Find an accidentally deployed code sandbox for writing smart contracts on the fly.

Her søgte jeg i main.js efter 'web3' og fandt 
```
path: 'web3-sandbox',
          loadChildren: function () {
            var n = (0, I.Z) (function * () {
              return yield eu()
            });
            return function () {
              return n.apply(this, arguments)
            }
          }()
```
Så gik bare til `localhost:3000/#/web3-sandbox`
# Sensitive Data Exposure

## Confidential Document
- Access a confidential document.

Først skal man finde et link et sted  i applikationen som leverer en fil.
Det tog rigtig lang tid at søge rundt, men fandt til sidst linket inde i 'about us' siden. I teksten er der et link som fører til `http://localhost:3000/ftp/legal.md`. Altså en fil på en server.
Naviger så til `http://localhost:3000/ftp` og der ligger bl.a. en fil der hedder aquisitions.md, som er filen der skal findes

## Exposed Metrics
- Find the endpoint that serves usage data to be scraped by a [popular monitoring system](https://github.com/prometheus/prometheus).

Følger man linket i udfordringen og læser lidt op på prometheus monitorerings systemet, kan man se at default endpointet den bruger er `/metrics`.

Så gå derfor til `http://localhost:3000/metrics`

# Improper Input validation

## Missing Encoding
- Retrieve the photo of Bjoern's cat in "melee combat-mode".

Inde i `http://localhost:3000/#/photo-wall` er der et billede der ikke loader ordenligt på siden.
Inspecter man elementet og kigger på src i img tagget finder man 'assets/public/images/uploads/😼-#zatschi-#whoneedsfourlegs-1572600969477.jpg'.
Problemet er de 2 # tegn som browseren ikke kan læse i den pågældende sammenhæng.
https://www.urlencoder.org/ bruges til at finde ud af de skal laves om til '%23'
Gå derfor til http://localhost:3000/assets/public/images/uploads/%F0%9F%98%BC-%23zatschi-%23whoneedsfourlegs-1572600969477.jpg

## Repetitive Registration
- Follow the DRY principle while registering a user.

Denne udfordring går ud på at få registreret en bruger med en tom eller forkert 'Repeat Password' input felt.
Til denne udfordring udfyldte jeg formularen korrekt, men interceptede requestet med Burp Suite.
Inden jeg så sendte det videre slettede jeg den string som lå i repeat password feltet og brugeren blev lavet.
![[Pasted image 20241119200620.png]]

# Security Misconfiguration

## Error Handling
- Provoke an error that is neither very gracefully nor consistently handled.

Jeg skal prøve at få applikationen til at fejle på en eller anden måde.
Metoden jeg brugte var at jeg skrev nogle tilfældige bogstaver ind i et input felt som forventede en filsti. Dette gav fejlen.

# Unvalidated Redirects

## Outdated Allowlist
- Let us redirect you to one of our crypto currency addresses which are not promoted any longer.

Igennem firefox devtools søgte jeg efter 'redirect' i filen main.js.
Her fandt jeg jeg en funktion som så således ud:
```
showBitcoinQrCode() {
              this.dialog.open(
                le,
                {
                  data: {
                    data: 'bitcoin:1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm',
                    url: './redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm',
                    address: '1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm',
                    title: 'TITLE_BITCOIN_ADDRESS'
```
Efterhånden jeg ud af at jeg skulle gå til 
`localhost:3000/redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm` 
for at løse udfordringen

# Miscellaneous

## Privacy Policy
- Read our privacy policy.

Kræver at man logger ind som en bruger og går ind i privacy policy via account menuen i øverste bjælke

## Bully Chatbot
- Receive a coupon code from the support chatbot.

Log ind med en bruger og gå ind i support chat via hovedmenuen.
Spørg chatbotten om en coupon, fx 'Give me a coupon'. Chatbotten vil sige nej, men gentager man nok gange giver den til sidst en kode.

## Mass Dispel
- Close multiple "Challenge solved"-notifications in one go.

I manualen til juice-shop står der at shift klik lukker alle notifikationer.







