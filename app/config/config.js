 export let GLOBAL_CONFIG = {
  dev:{...{
    title: "Escape Room Quiz",
    primaryColor: "#36a3bf",
    primaryColorText: "#ffffff",
    secondaryColor: "#333333",
    secondaryColorText: "#ffffff",
    backgroundColor: "#ffffff",
    generalTextColor: '#000000',
    logo: undefined,
    moodleXmlPath: undefined,
    feedback: false,
    randomQuestions: true,
    debug:true,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    // locale: "es",
    adaptive:true,
    finish_screen:true,
    finalMessage: "The content has ended. You may close this window.",
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.8,
    },
    n:5,
  },...window.config},
  production:{...{
    title: "Escape Room Quiz",
    primaryColor: "#36a3bf",
    primaryColorText: "#ffffff",
    secondaryColor: "#333333",
    secondaryColorText: "#ffffff",
    backgroundColor: "#ffffff",
    generalTextColor: '#000000',
    logo: undefined,
    moodleXmlPath: undefined,
    feedback: false,
    randomQuestions: true,
    debug:false,
    debug_scorm_api:false,
    debug_scorm_api_window:false,
    available_locales:["en", "es"],
    adaptive:true,
    finish_screen:true,
    finalMessage: "The content has ended. You may close this window.",
    scorm:{
      completion_threshold:0.5,
      score_threshold:0.8,
    },
    n:5,
  },...window.config},
};

let processConfig = (function(){
  let env = process.env.NODE_ENV || 'dev';
  if(typeof GLOBAL_CONFIG[env] === "undefined"){
    env = "dev";
  }
  GLOBAL_CONFIG = GLOBAL_CONFIG[env];

  GLOBAL_CONFIG.debug_scorm_api = ((GLOBAL_CONFIG.debug) && (GLOBAL_CONFIG.debug_scorm_api));
  GLOBAL_CONFIG.debug_scorm_api_window = ((GLOBAL_CONFIG.debug_scorm_api) && (GLOBAL_CONFIG.debug_scorm_api_window));
})();