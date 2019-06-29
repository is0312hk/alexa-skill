/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');

const GetNewFactHandler = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'GetNewFactIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('肉じゃがの作り方を説明します。')
      .reprompt('材料と分量、作る手順を選んでください')
      .withSimpleCard(SKILL_NAME, '材料と分量、作る手順を選んでください')
      .getResponse();
  },
};

const Handler = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'foodIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('牛肉、じゃがいも、玉ねぎ、砂糖、醤油、酒です')
      .reprompt('分量と作り方を選んでください')
      .withSimpleCard(SKILL_NAME,'牛肉、じゃがいも、玉ねぎ、砂糖、醤油、酒です' )
      .getResponse();
  },
};

const Handler1 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'meatintent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('200から300gです')
      .reprompt('他に聞きたいことはありますか')
      .withSimpleCard(SKILL_NAME, '200から300gです')
      .getResponse();
  },
};

const Handler2 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'potatointent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('4個です')
      .reprompt('他に聞きたいことはありますか')
      .withSimpleCard(SKILL_NAME,'4個です' )
      .getResponse();
  },
};

const Handler3 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'onionintent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('2個です')
      .reprompt('他に聞きたいことはありますか')
      .withSimpleCard(SKILL_NAME,'2個です' )
      .getResponse();
  },
};

const Handler4 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'sugarintent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('小さじ1です')
      .reprompt('他に聞きたいことはありますか')
      .withSimpleCard(SKILL_NAME,'小さじ1です' )
      .getResponse();
  },
};

const Handler5 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'sakeintent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('50ccです')
      .reprompt('他に聞きたいことはありますか')
      .withSimpleCard(SKILL_NAME,'50ccです' )
      .getResponse();
  },
};

const Handler6 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'soysauceintent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('大さじ1です')
      .reprompt('他に聞きたいことはありますか')
      .withSimpleCard(SKILL_NAME,'大さじ1です' )
      .getResponse();
  },
};

const Handlermake = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'makeintent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('玉ねぎはざく切りに、ジャガイモは1/4に切って下さい')
      .reprompt('続きを聞く場合は2番と言ってください')
      .withSimpleCard(SKILL_NAME,'玉ねぎはざく切りに、ジャガイモは1/4に切って下さい' )
      .getResponse();
  },
};

const Handlermake1 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'make2intent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('熱した鍋に油を入れてください')
      .reprompt('続きを聞く場合は3番と言ってください')
      .withSimpleCard(SKILL_NAME,'熱した鍋に油を入れてください' )
      .getResponse();
  },
};

const Handlermake2 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'make3intent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('玉ねぎ、牛肉の順に炒め、軽く火が通ったら砂糖を加えます')
      .reprompt('続きを聞く場合は4番と言ってください')
      .withSimpleCard(SKILL_NAME,'玉ねぎ、牛肉の順に炒め、軽く火が通ったら砂糖を加えます' )
      .getResponse();
  },
};

const Handlermake3 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'make4intent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('玉ねぎと牛肉の表面に火が通ったら、ジャガイモを入れて炒めます')
      .reprompt('続きを聞く場合は5番と言ってください')
      .withSimpleCard(SKILL_NAME,'玉ねぎと牛肉の表面に火が通ったら、ジャガイモを入れて炒めます' )
      .getResponse();
  },
};

const Handlermake4 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'make5intent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('残りの調味料を入れて、落し蓋をして、中火で10分から15分煮詰めます。')
      .reprompt('続きを聞く場合は6番と言ってください')
      .withSimpleCard(SKILL_NAME,'残りの調味料を入れて、落し蓋をして、中火で10分から15分煮詰めます。' )
      .getResponse();
  },
};

const Handlermake5 = {
    canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
    || (request.type === 'IntentRequest'
    && request.intent.name === 'make6intent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('ジャガイモに火が通ったら完成です')
      .reprompt('もう一度聞く場合は番号を言ってください')
      .withSimpleCard(SKILL_NAME,'ジャガイモに火が通ったら完成です' )
      .getResponse();
  },
};
const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('よくわかりません。')
      .reprompt('材料、分量、作り方を選んでください')
      .getResponse();
  },
};

const SKILL_NAME = '肉じゃが';
const HELP_MESSAGE = '材料、分量、作り方を選んでください';
const HELP_REPROMPT = '用がなければバイバイと話してください';
const STOP_MESSAGE = 'またね';
const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    Handler,
    Handler1,
    Handler2,
    Handler3,
    Handler4,
    Handler5,
    Handler6,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
