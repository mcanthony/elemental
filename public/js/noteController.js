"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _ramda=require("ramda"),_alt=require("./alt"),_alt2=_interopRequireDefault(_alt),_virtualAudioGraph=require("./virtualAudioGraph"),_virtualAudioGraph2=_interopRequireDefault(_virtualAudioGraph),_customVirtualNodesEffectsPingPongDelay=require("./customVirtualNodes/effects/pingPongDelay"),_customVirtualNodesEffectsPingPongDelay2=_interopRequireDefault(_customVirtualNodesEffectsPingPongDelay),_customVirtualNodesEffectsNone=require("./customVirtualNodes/effects/none"),_customVirtualNodesEffectsNone2=_interopRequireDefault(_customVirtualNodesEffectsNone),_customVirtualNodesOscillatorBanksDetuned=require("./customVirtualNodes/oscillatorBanks/detuned"),_customVirtualNodesOscillatorBanksDetuned2=_interopRequireDefault(_customVirtualNodesOscillatorBanksDetuned),_customVirtualNodesOscillatorBanksSine=require("./customVirtualNodes/oscillatorBanks/sine"),_customVirtualNodesOscillatorBanksSine2=_interopRequireDefault(_customVirtualNodesOscillatorBanksSine),_customVirtualNodesOscillatorBanksSupersaw=require("./customVirtualNodes/oscillatorBanks/supersaw"),_customVirtualNodesOscillatorBanksSupersaw2=_interopRequireDefault(_customVirtualNodesOscillatorBanksSupersaw),calculateFrequency=function(e){return 440*Math.pow(2,e/12)};_virtualAudioGraph2["default"].defineNode(_customVirtualNodesEffectsNone2["default"],"none"),_virtualAudioGraph2["default"].defineNode(_customVirtualNodesEffectsPingPongDelay2["default"],"pingPongDelay"),_virtualAudioGraph2["default"].defineNode(_customVirtualNodesOscillatorBanksDetuned2["default"],"detuned"),_virtualAudioGraph2["default"].defineNode(_customVirtualNodesOscillatorBanksSine2["default"],"sine"),_virtualAudioGraph2["default"].defineNode(_customVirtualNodesOscillatorBanksSupersaw2["default"],"supersaw");var currentVirtualAudioGraph=[],playNote=function(e){var t=e.id,u=e.pitch,r=e.modulation,a=_alt2["default"].getStore("EffectStore"),o=_alt2["default"].getStore("InstrumentStore"),i=_alt2["default"].getStore("RootNoteStore"),l=i.getState().rootNote;currentVirtualAudioGraph[0]={output:"output",id:0,node:a.getState().selectedEffect},r=void 0===r?.5:r,currentVirtualAudioGraph=_ramda.reject(_ramda.propEq("id",t),currentVirtualAudioGraph),currentVirtualAudioGraph=_ramda.append({output:["output",0],id:t,node:o.getState().selectedInstrument,params:{frequency:calculateFrequency(u+l),gain:(1-r)/4}},currentVirtualAudioGraph),_virtualAudioGraph2["default"].update(currentVirtualAudioGraph)};exports.playNote=playNote;var stopNote=function(e){var t=e.id;currentVirtualAudioGraph=_ramda.reject(_ramda.propEq("id",t),currentVirtualAudioGraph),_virtualAudioGraph2["default"].update(currentVirtualAudioGraph)};exports.stopNote=stopNote;