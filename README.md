## Inicialización de Firebase Hosting

```shell
❯ firebase init hosting

		 ######## #### ########  ######## ########     ###     ######  ########
		 ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
		 ######    ##  ########  ######   ########  #########  ######  ######
		 ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
		 ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

	/home/yeshua/Documents/S1_ABRIL25_AGOSTO_25/PRUEBAS/PARCIAL_TRES/Lab2

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

✔ Please select an option: Use an existing project
✔ Select a default Firebase project for this directory: lab2-cd (lab2-cd)
i  Using project lab2-cd (lab2-cd)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

✔ What do you want to use as your public directory? public
✔ Configure as a single-page app (rewrite all urls to /index.html)? No
✔ Set up automatic builds and deploys with GitHub? Yes
i  public/404.html is unchanged
✔ File public/index.html already exists. Overwrite? No
i  Skipping write of public/index.html

i  Detected a .git folder at /home/yeshua/Documents/S1_ABRIL25_AGOSTO_25/PRUEBAS/PARCIAL_TRES/Lab2
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=466449828&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

✔  Success! Logged into GitHub as YeshuaChiliquingaAmaya

✔ For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) YeshuaChiliquingaAmaya/Laboratorio2_Pruebas_de_Software_P3

✔  Created service account github-action-1033851690 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_LAB2_CD.
i  You can manage your secrets at https://github.com/YeshuaChiliquingaAmaya/Laboratorio2_Pruebas_de_Software_P3/settings/secrets.

✔ Set up the workflow to run a build script before every deploy? Yes
✔ What script should be run before every deploy? npm ci

✔  Created workflow file /home/yeshua/Documents/S1_ABRIL25_AGOSTO_25/PRUEBAS/PARCIAL_TRES/Lab2/.github/workflows/firebase-hosting-pull-request.yml
✔ Set up automatic deployment to your site's live channel when a PR is merged? Yes
✔ What is the name of the GitHub branch associated with your site's live channel? main

✔  Created workflow file /home/yeshua/Documents/S1_ABRIL25_AGOSTO_25/PRUEBAS/PARCIAL_TRES/Lab2/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

✔  Wrote configuration info to firebase.json
✔  Wrote project information to .firebaserc

✔  Firebase initialization complete!
```
# Laboratorio2_Pruebas_de_Software_P3
