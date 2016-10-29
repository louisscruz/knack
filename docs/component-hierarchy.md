## Component Hierarchy

**AppContainer**
- SignUpFormContainer
- SignInFormContainer
- SplashContainer
- ChannelContainer

**SignUpFormContainer**
- SignUpForm

**SignInFormContainer**
- SignInForm

**SplashContainer**
- Header
- Splash
- Footer
- (If logged in, redirect to ChannelContainer)

**ChannelContainer**
- Sidebar
- Channel
- Search (bonus)
- MessagesContainer
  + MessageHeader
  + MessageContainer
    * Message
  + MessageInput

**ChannelsIndex**
- ChannelsSearch (bonus)
- ChannelsSort (bonus)
- ChannelsIndexItem
  + ChannelListIndex
    * ChannelListItem

**DirectMessagesIndexContainer**
- DirectMessagesCreate
  + Pill
- DirectMessagesList
  + DirectMessagesListItem

**NewChannelContainer**
- NewChannel


## Routes

|    Path    |      Component      |
|------------|---------------------|
| "/" (IndexRoute)| "SplashContainer"  |
| "/sign-up" | "SignUpFormContainer" |
| "/sign-in" | "SignInFormContainer" |
| "/messages/:channelName" | "ChannelContainer" |
| "/messages/:channelName/search/:query" (bonus) | "SearchResultsContainer" |
