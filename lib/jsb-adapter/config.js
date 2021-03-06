// Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.  
 
const renderer = window.renderer;
let _stageOffset = 0;
let _name2stageID = {};

var config = {
  addStage: function (name) {
    // already added
    if (_name2stageID[name] !== undefined) {
      return;
    }

    let stageID = 1 << _stageOffset;
    _name2stageID[name] = stageID;

    _stageOffset += 1;

    renderer.addStage(name);
  },

  stageID: function (name) {
    let id = _name2stageID[name];
    if (id === undefined) {
      return -1;
    }
    return id;
  },

  stageIDs: function (nameList) {
    let key = 0;
    for (let i = 0; i < nameList.length; ++i) {
      let id = _name2stageID[nameList[i]];
      if (id !== undefined) {
        key |= id;
      }
    }
    return key;
  }
};

export default config;