# Manual Regression Tests for JS SDK

## Functional

##### 1. Face photo webcam capture
(on Google Chrome, Firefox, Safari, IE11 and Microsoft Edge browsers)

0. Given webcam is connected to the computer
1. Go through the flow to face capture
    - browser should ask for enabling the webcam
2. Accept the webcam to be used on browser
    - photo capture frame should display preview from webcam
    - user should be able to upload a picture anyway
3. Take photo with a webcam
    - 3-second counter should start and then photo should be taken
    - confirmation screen should show up containing photo that was taken
    - user should be able to retake or continue with taken photo

##### 2. Document photo webcam capture
(on Google Chrome, Firefox, Safari, IE11 and Microsoft Edge browsers)

0. Given webcam is connected to the computer
1. Open link with additional GET parameter `?useWebcam=true`
2. Go through the flow to document capture
    - browser should ask for enabling the webcam
3. Accept the webcam to be used on browser
    - photo capture frame should display preview from webcam
    - user should be able to upload a picutre anyway
4. Place document in front of camera so that it aligns the edges of document capture frame
    - document should be auto-captured
    - confirmation screen should show up containing a photo that was taken
    - user should be able to retake or continue with taken photo

##### 3. Cross-device with SMS
(on Google Chrome, Firefox, Safari, IE11 and Microsoft Edge browsers)

0. Given user is upload document page
1. Click on link to start cross-device flow
    - user should see `Continue your verification on mobile` screen
    - user should be able to provide mobile number from any country
    - user should see the option to send SMS
    - user should see option to copy link
2. Type valid mobile number connected to mobile test device and send
    - user should see `Check your mobile` screen
    - user should see option to resend link
    - user should receive SMS on a mobile device
3. Open link on mobile device
    - user should see `Upload front of document` screen
    - user should be able to upload a document from a mobile device

##### 4. Cross-device resend SMS
(on Google Chrome, Firefox, Safari, IE11 and Microsoft Edge browsers)

0. Given user is on first page of cross-device flow
1. Type valid mobile number connected to mobile test device and send
    - user should see `Check your mobile` screen
    - user should see option to resend link
2. Click `Resend link`
    - user should see `Continue your verification on mobile` screen again
    - user should be able to provide mobile number again
    - user should see the option to send SMS

##### 5. Cross-device errors
(on one of the browsers)

0. Given user is on first page of cross-device flow
1. Type invalid mobile number and click send
    - user should see an validation error
    - user should persist on the same screen

##### 6. Check happy path flow on other browsers
(on Safari, Firefox, IE11 and Microsoft Edge browsers)

Go through the flow looking for layout/usability inconsitencies between browsers:
1. Select one of the documents
    - everything should be displayed properly and layout should not be broken
2. Upload document
    - everything should be displayed properly and layout should not be broken
3. Upload face photo / video
    - everything should be displayed properly and layout should not be broken

## Non-functional

##### 1. Check analytics tracking
(on one browser)

0. Having JS SDK project open in Woopra
1. Go through the normal flow for any document
    - all events should be tracked
    - no events should be duplicated
2. Now repeat the same for cross-device; go through the flow for any document
    - all events should be tracked
    - no events should be duplicated

##### 2. NPM packages installation

0. Given local `.node_modules` folder is removed (not existing)
1. Run `npm install`
    - dependencies should be installed successfully
