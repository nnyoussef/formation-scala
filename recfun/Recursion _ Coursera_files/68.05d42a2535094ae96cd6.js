(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"0D4t":function(module,exports,e){},"71Lh":function(module,e,t){"use strict";t.r(e),t.d(e,"PracticeQuizCoverPage",(function(){return L}));var n=t("AeFk"),i=t("q1tI"),a=t.n(i),r=t("Gcrz"),c=t("MnCE"),o=t("+LJP"),s=t("sQ/U"),d=t("6/Gu"),u=t("VMeS"),l=t("sBWo"),m=t("nlef"),b=t("MqGB"),g=t("Vh8P"),p=t("eXDi"),v=t("NKt0"),j=t("RH4a"),O=t("CnKM"),f=t("YmkS"),h=t("qJwm"),I=t("iMVg"),S=t("zaiP"),w=t("JEIr"),y=t("fHLu"),C=t("w9Ch"),x=t("8mOo"),k=t("VtNW"),R=t.n(k),P,T,L=function PracticeQuizCoverPage(e){var t=e.nextItemUrl,a=e.children,c=e.openPracticeQuizAttemptPage,o=e.openSubmittedPracticeQuizAttemptPage;return Object(n.d)(S.a,null,(function(e){var l=e.item;if(!l||!l.contentSummary)return P||(P=Object(n.d)(u.a,null));return Object(n.d)(w.a,{slug:l.courseSlug,itemId:l.id,userId:s.a.get().id},(function(e){var s=e.loading,j=e.bestSessionId,O=e.bestEvaluation,S=e.lastSessionId,w=e.unsubmittedSessionId,x=e.refetch;if(!l||!l.contentSummary||s)return T||(T=Object(n.d)(u.a,null));if("quiz"===l.contentSummary.typeName){var k,P,L=(l.contentSummary.definition||{}).passingFraction,E=Object(C.a)(O),A=E?E>=L:void 0,z=l.isCumulativeGraded;return Object(n.d)(d.a,{container:!0},Object(n.d)(d.a,{item:!0,xs:12},Object(n.d)(v.a,{assignmentTypeName:R()("Practice Quiz"),item:l,subHeader:Object(n.d)(I.a,{itemId:null==l?void 0:l.id,courseId:null==l?void 0:l.courseId,courseSlug:null==l?void 0:l.courseSlug,learningObjectiveIds:null==l?void 0:l.learningObjectiveIds})})),Object(n.d)(d.a,{item:!0,xs:12},Object(n.d)(b.b,{stepTitle:R()("Submit your assignment"),rightSideView:Object(n.d)(r.a,null,(function(e){return Object(n.d)(g.a,{startAttempt:S||w?void 0:c,resumeAttempt:w?function(){Object(y.a)(e),c()}:void 0,retryAttempt:function retryAttempt(){Object(y.a)(e),c()}})})),statusIconType:j?b.a.check:void 0,statusIconTitle:j?R()("Activity Completed"):void 0}),Object(n.d)(b.b,{stepTitle:R()("Receive grade"),stepDetails:Object(n.d)(m.a,{passingFraction:L,isCumulativeGraded:z,isRequiredItem:l.isRequiredForPassing}),rightSideView:Object(n.d)(r.a,null,(function(e){return Object(n.d)(p.a,{itemGrade:"number"==typeof E?{grade:E,isPassed:A||!1,isOverridden:!1,latePenaltyRatio:null}:null,viewFeedback:S?function(){Object(y.a)(e),o()}:void 0,isViewFeedbackButtonLinkStyle:!!w})})),statusIconType:Object(b.d)(A,z),statusIconTitle:Object(b.c)(A,z)})),Object(n.d)("div",{css:function css(e){return Object(n.c)({marginTop:e.spacing(12)})}},Object(n.d)(f.a,{computedItem:l,itemFeedbackType:h.c.Quiz})),a&&x&&i.cloneElement(a,{refetchPracticeQuizCoverPageData:function refetchPracticeQuizCoverPageData(){return x().then((function(){return l.refetch()}))},nextItemUrl:t}))}return null}))}))},E=Object(c.b)(x.a,Object(o.a)((function(e){return{openPracticeQuizAttemptPage:function openPracticeQuizAttemptPage(){e.push({name:"practice-quiz-attempt",params:e.params})},openSubmittedPracticeQuizAttemptPage:function openSubmittedPracticeQuizAttemptPage(){e.push({name:"practice-quiz-view-attempt",params:e.params})}}})),O.b,j.c)(L);e.default=Object(l.a)(E)},"8mOo":function(module,e,t){"use strict";var n=t("MnCE"),i=t("8cuT"),a=Object(n.b)(Object(i.a)(["CourseStore"],(function(e,t){var n,i=e.CourseStore,a=t.itemMetadata,r,c,o=i.getMaterials().getNeighbors(a).nextItemMetadataOrItemGroup;return{nextItemUrl:null!==(n=null==o?void 0:o.getLink())&&void 0!==n?n:""}})));e.a=a},JEIr:function(module,e,t){"use strict";var n=t("3tO9"),i=t.n(n),a=t("VkAN"),r=t.n(a),c=t("q1tI"),o=t.n(c),s=t("Gcrz"),d=t("UYTu"),u,l=Object(d.a)(u||(u=r()(['\n  query evaluationsQuery($itemId: String!, $userId: Int!, $slug: String!, $body: String!) {\n    evaluationsQuery(body: $body, itemId: $itemId, userId: $userId, slug: $slug)\n      @rest(\n        type: "RestEvaluations"\n        path: "opencourse.v1/user/{args.userId}/course/{args.slug}/item/{args.itemId}/quiz/evaluations"\n        method: "POST"\n        bodyKey: "body"\n      ) {\n      contentResponseBody @type(name: "RestPracticeQuizQuestionDataResponseBody")\n    }\n  }\n']))),m=function Evaluations(e){var t=e.slug,n=e.userId,a=e.itemId,r=e.children,o={slug:t,itemId:a,userId:n},d={contentRequestBody:{}};return c.createElement(s.c,{query:l,variables:i()(i()({},o),{},{body:d}),fetchPolicy:"network-only"},(function(e){var t,n=e.loading,i=e.data,a=e.refetch,c=e.client;if(n)return r({loading:n});var o=(null==i?void 0:null===(t=i.evaluationsQuery)||void 0===t?void 0:t.contentResponseBody)||{},s=o.bestEvaluation,d=o.bestSessionId,u=o.lastEvaluation,l=o.lastSessionId,m=o.unsubmittedSessionId;return r({loading:!1,bestSessionId:d,bestEvaluation:s,lastEvaluation:u,lastSessionId:l,unsubmittedSessionId:m,refetch:a,client:c})}))};e.a=m},MqGB:function(module,e,t){"use strict";t.d(e,"a",(function(){return O})),t.d(e,"d",(function(){return f})),t.d(e,"c",(function(){return h}));var n=t("lSNA"),i=t.n(n),a=t("J2iB"),r=t.n(a),c=t("AeFk"),o=t("q1tI"),s=t.n(o),d=t("kgYC"),u=t("8Hdl"),l=t("PSZr"),m=t("IXUt"),b=t("d3Ej"),g=t.n(b),p=function getRootStyles(e,t){return Object(c.c)(i()({padding:e.spacing(24,0),borderBottom:"1px solid ".concat(e.palette.gray[300]),display:"flex",justifyContent:"space-between",position:"relative",flexWrap:"wrap",flexDirection:t?"row-reverse":"row",":last-child":{paddingBottom:e.spacing(48)}},e.breakpoints.down("sm"),{flexDirection:"column"}))},v=function statusIcon(e){return Object(c.c)({marginRight:e.spacing(8),lineHeight:2})},j=function stepTitle(e){return Object(c.c)({display:"flex",marginBottom:e.spacing(8)})},O={check:"check",warning:"warning"},f=function getStatusIconTypeForGradeRow(e,t,n){if(r()(e))return null;if(!e&&(!t||n&&t))return O.warning;return O.check},h=function getStatusIconTitleForGradeRow(e,t){if(r()(e))return;if(!e&&!t)return g()("Activity Incomplete");return g()("Activity Completed")},I=function CoverPageRow(e){var t=e.stepTitle,n=e.stepDetails,i=e.rightSideView,a=e.statusIconType,r=e.statusIconTitle,o=Object(d.a)();return Object(c.d)("div",{css:p(o,!t),"data-e2e":"CoverPageRow"},t&&Object(c.d)("div",{"data-e2e":"CoverPageRow__left-side-view"},Object(c.d)("div",{css:j(o),"data-e2e":"CoverPageRow__step-title"},a&&Object(c.d)("div",{css:v(o)},a===O.check&&Object(c.d)(l.a,{size:"medium",color:"success",title:r}),a===O.warning&&Object(c.d)(m.a,{size:"medium",color:"error",title:r})),Object(c.d)(u.a,{variant:"h3bold"},t)),Object(c.d)("div",{"data-e2e":"CoverPageRow__step-details"},n)),Object(c.d)("div",{"data-e2e":"CoverPageRow__right-side-view"},i))};e.b=I},NKt0:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),c=t.n(r),o=t("JJfJ"),s=t("kgYC"),d=t("8Hdl"),u=t("PB6g"),l=t("1lFr"),m,b,g=function header(e){return Object(a.c)(m||(m=i()(["\n    margin: ",";\n    "," {\n      margin: ",";\n    }\n    "," {\n      margin: ",";\n    }\n  "])),e.spacing(32,0),e.breakpoints.up("sm"),e.spacing(48,0,32,0),e.breakpoints.up("md"),e.spacing(48,0))},p=function subHeader(e){return Object(a.c)(b||(b=i()(["\n    margin-top: ",";\n    "," {\n      margin-top: ",";\n    }\n  "])),e.spacing(8),e.breakpoints.up("md"),e.spacing(4))},v=function CoverPageHeader(e){var t=e.assignmentTypeName,n=e.item,i=(n=void 0===n?{}:n).timeCommitment,c=n.name,m=n.courseId,b=e.subHeader,v=Object(s.a)();return Object(a.d)("div",{css:g(v),"data-e2e":"CoverPageHeader"},Object(a.d)(d.a,{variant:"d2",component:"h1"},c,m&&Object(a.d)(l.a,{courseId:m})),Object(a.d)(d.a,{variant:"body2",component:"div",css:p(v)},t,!!i&&Object(a.d)(r.Fragment,null,Object(a.d)(u.b,{tagName:"span"},Object(o.x)(i,!0)),Object(a.d)("span",{"aria-hidden":!0}," • ",Object(o.x)(i)))),b&&Object(a.d)("div",{css:p(v)},b))};e.a=v},Vh8P:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("lSNA"),r=t.n(a),c=t("UB5X"),o=t.n(c),s=t("AeFk"),d=t("q1tI"),u=t.n(d),l=t("kvW3"),m=t("JJfJ"),b=t("ZJgU"),g=t("kgYC"),p=t("8Hdl"),v=t("H7bS"),j=t("RSmF"),O=t("kWps"),f=t("d3Ej"),h=t.n(f),I,S=function styles(e){return{submissionTime:Object(s.c)({marginTop:e.spacing(8),marginBottom:-8}),root:Object(s.c)(r()({},e.breakpoints.down("sm"),{marginTop:e.spacing(12)})),actionButtonStyle:Object(s.c)(r()({display:"flex",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})),retryInfo:Object(s.c)({marginTop:e.spacing(12)}),timeLimitText:Object(s.c)({marginTop:e.spacing(12)})}},w=function renderActionButton(e,t){return Object(s.d)(b.a,{size:"medium",variant:"primary",onClick:t,"aria-labelledby":e,"data-test":"action-button"},e)},y=function CoverPageRowRightSideActions(e){var t=e.startAttempt,n=e.restartAttempt,a=e.resumeAttempt,r=e.retryAttempt,c=e.submissionTime,d=e.showTimer,u=e.timeLimit,f=e.timerId,y=e.attemptsLeft,C=e.secondsLeftInLatestAttempt,x=e.attemptLimitTimeLeft,k=null,R=Object(g.a)(),P=S(R),T=o()(x)||"number"==typeof y&&y<=0;return t?k=w(h()("Start assignment"),t):n?k=w(h()("Restart assignment"),n):a?k=w(h()("Resume assignment"),a):r&&(k=Object(s.d)(b.a,{size:"medium",variant:"ghost","data-test":"action-button","aria-labelledby":h()("Try again"),component:"a",onClick:r,disabled:T},h()("Try again"))),Object(s.d)("div",{css:P.root},Object(s.d)("div",{css:P.actionButtonStyle},k),T&&o()(x)&&Object(s.d)("div",{css:P.retryInfo,"data-test":"retry-info"},Object(s.d)(p.a,{variant:"body2",component:"span",color:"supportText"},Object(s.d)(l.b,{message:h()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:Object(s.d)("strong",null,Object(m.x)(x))}))),c&&Object(s.d)("div",{css:P.submissionTime,"data-test":"submission-time-detail"},Object(s.d)(p.a,{variant:"h4bold",component:"span",color:"supportText"},h()("Submitted"))," ",Object(s.d)(p.a,{variant:"body2",component:"span",color:"supportText"},O.a.getFormattedDeadline(c))),o()(u)&&t&&Object(s.d)("div",null,Object(s.d)(p.a,{variant:"body2"},Object(s.d)(v.a,{size:"medium",color:"default",css:Object(s.c)(I||(I=i()(["\n                transform: translateY(4px);\n              "])))}),Object(s.d)("span",{css:P.timeLimitText},Object(s.d)(l.b,{message:h()("You will have {timeLimit} to finish"),timeLimit:Object(m.x)(u,!0)})))),d&&o()(C)&&Object(s.d)(j.a,{timerId:f,remainingTimeInMs:1e3*C,displayRemaining:!0}))};e.a=y},dlMe:function(module,exports,e){e("0D4t")},eXDi:function(module,e,t){"use strict";var n=t("VkAN"),i=t.n(n),a=t("UB5X"),r=t.n(a),c=t("AeFk"),o=t("q1tI"),s=t.n(o),d=t("kvW3"),u=t("kgYC"),l=t("8Hdl"),m=t("ZJgU"),b=t("PB6g"),g=t("bOpO"),p=t("hbUA"),v=t("d3Ej"),j=t.n(v),O,f,h,I,S,w,y=function root(e){return Object(c.c)(O||(O=i()(["\n    display: flex;\n    justify-content: space-between;\n    min-width: 300px;\n    min-height: 48px;\n    padding-left: ",";\n    border-left: 1px solid ",";\n    "," {\n      border: none;\n      padding-left: 0;\n      flex-direction: column;\n      margin-left: 0;\n      margin-top: ",";\n    }\n  "])),e.spacing(24),e.palette.gray[300],e.breakpoints.down("sm"),e.spacing(24))},C=function viewFeedbackButton(e){return Object(c.c)(f||(f=i()(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    "," {\n      margin-top: ",";\n    }\n\n    margin-bottom: ",";\n  "])),e.breakpoints.down("sm"),e.spacing(24),e.spacing(8))},x=function gradeContainer(e){return Object(c.c)(h||(h=i()(["\n    margin-right: ",";\n    "," {\n      margin-bottom: ",";\n      margin-top: ",";\n    }\n  "])),e.spacing(16),e.breakpoints.down("sm"),e.spacing(8),e.spacing(8))},k=function CoverPageRowRightSideGrade(e){var t=e.itemGrade,n=e.computedScore,i=e.maxScore,a=e.viewFeedback,o=e.isViewFeedbackButtonLinkStyle,s=e.isCumulativeGraded,d=e.reviewsExpected,b=void 0===d?0:d,g=e.reviewsReceived,p=void 0===g?0:g,v=e.showKeepHighScoreMsg,O=void 0===v||v,f=e.isRequired,h=void 0!==f&&f,I=Object(u.a)(),S=t||{},w=S.grade,k=S.isPassed,P=r()(w)&&!!k&&(!s||h&&s);return Object(c.d)("div",{css:y(I),"data-e2e":"CoverPageRowRightSideGrade"},Object(c.d)("div",{css:x(I),"data-e2e":"CoverPageRowRightSideGrade__grade-info"},Object(c.d)(l.a,{variant:"h3bold","data-e2e":"CoverPageRowRightSideGrade__grade-label"},j()("Your grade")),Object(c.d)(l.a,{variant:"h1",component:"div",color:P?"success":"error","data-test":"grade-percent","data-e2e":"CoverPageRowRightSideGrade__grade-percent"},Object(c.d)(R,{itemGrade:t,computedScore:n,maxScore:i,reviewsExpected:b,reviewsReceived:p}))),r()(w)&&a&&Object(c.d)("div",{css:C(I),"data-e2e":"CoverPageRowRightSideGrade__view-feedback-section"},Object(c.d)(m.a,{variant:o?"ghost":"primary",onClick:a,"data-test":"feedback-button"},j()("View Feedback")),O&&Object(c.d)(l.a,{variant:"body2",color:"supportText"},j()("We keep your highest score"))))},R=function CoverPageRowGradeDetail(e){var t=e.itemGrade,n=e.computedScore,a=e.maxScore,o=e.reviewsExpected,s=void 0===o?0:o,m=e.reviewsReceived,v=void 0===m?0:m,O,f=(t||{}).grade,h=Object(u.a)();if(r()(f))return Object(c.d)("div",{css:Object(c.c)(I||(I=i()(["\n          display: flex;\n        "]))),"data-e2e":"CoverPageRowRightSideGrade__grade-percent-container"},Object(p.b)(f),Object(c.d)(g.a,{itemGrade:t,computedScore:n,maxScore:a}));if(s>0&&v>0)return Object(c.d)(l.a,{variant:"body2"},Object(c.d)(d.b,{message:j()("In progress, {reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:s,reviewsReceived:v}));return Object(c.d)(l.a,{variant:"h1",component:"p",color:"supportText",css:Object(c.c)(S||(S=i()(["\n        padding: ",";\n      "])),h.spacing(8,0,0,0)),"data-test":"no-grade-text","data-e2e":"CoverPageRowRightSideGrade__no-grade"},w||(w=Object(c.d)("span",{"aria-hidden":"true"},"-")),Object(c.d)(b.b,{tagName:"span"},j()("Not available")))};e.a=k},fHLu:function(module,e,t){"use strict";t.d(e,"a",(function(){return a}));var n=t("S0QZ"),i=function clearQuizApolloCache(e){Object(n.a)(e.cache,["RestQuizSessionMetadata","RestQuizSessionMetadataElement","RestQuizQuestionData","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState","$ROOT_QUERY.ChangedResponse"])},a=function clearPracticeQuizApolloCache(e){Object(n.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=i},iMVg:function(module,e,t){"use strict";var n=t("J4zp"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),c=t("ZJgU"),o=t("oe9u"),s=t("22Sa"),d=t("8Hdl"),u=t("3tO9"),l=t.n(u),m=t("8cuT"),b=t("EqTq"),g=t("4XvD"),p=function buildLearningObjectiveToItemIds(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach((function(n){e[n].learningObjectives.forEach((function(e){t[e]?t[e].push(n):t[e]=[n]}))})),t},v=function buildFilteredComputedItems(e,t,n){return e.filter((function(e){if(t&&t.includes(e.id)||n&&e.weekNumber>n)return!1;return!0}))},j=t("TdzE"),O=t("Faqi"),f,h=Object(b.a)("LearningObjectiveWithItemsData"),I=function LearningObjectivesWithItemsData(e){var t=e.itemId,n=e.courseSlug,i=void 0===n?"":n,a=e.learningObjectiveIds,c=e.removeParentItem,o=e.removeFutureItems,s=e.buildComputedItem,d=e.children;return(r.createElement("div",{className:h()},r.createElement(O.a,{slug:i},(function(e){var n=e.courseMaterialsItems,i=e.itemToLearningObjectives,u=null==n?void 0:n.map((function(e){return e.id})),m=p(i);return u?r.createElement(g.a,{learningObjectiveIds:a},(function(e){var n=e.learningObjectives,i=t?s(t):void 0,a=i&&c?[i.id]:void 0,r=i&&o?i.weekNumber:void 0,b=null==n?void 0:n.map((function(e){var t=m[e.id].sort((function(e,t){return u.indexOf(e)-u.indexOf(t)})).map((function(e){return s(e)})),n=v(t,a,r);return l()(l()({},e),{},{computedItems:n})}));return d({learningObjectives:b})})):f||(f=r.createElement("div",null))}))))},S,w=Object(m.a)(["CourseStore","ProgressStore","CourseScheduleStore","SessionStore","CourseViewGradeStore"],(function(e){var t=e.CourseStore,n=e.ProgressStore,i=e.CourseScheduleStore,a=e.SessionStore,r=e.CourseViewGradeStore;return{buildComputedItem:function buildComputedItem(e){return Object(j.a)({itemMetadata:t.getMaterials().getItemMetadata(e),CourseStore:t,ProgressStore:n,CourseScheduleStore:i,SessionStore:a,CourseViewGradeStore:r})}}}))(I),y=t("4Ss+"),C=t("HDKb"),x=t("5mFy"),k=t("7Dw/"),R=t("FHuh"),P=t("dlMe"),T=Object(b.a)("LearningObjectiveItem"),L,E=function LearningObjectiveItem(e){var t=e.computedItem;return(r.createElement("div",{className:T()},r.createElement(R.a,{computedItem:t,trackingName:"learning_objective_review_link",openInNewWindow:!0,iconSize:40})))},A=t("x3GX"),z=t("vrZb"),B=t.n(z),D,F=function LearningObjectivesWithItemsList(e){var t=e.learningObjectives,n=Object(A.b)();if(!t||0===t.length)return null;return(r.createElement(y.a,{multiExpand:!0,"data-e2e":"LearningObjectivesWithItemsList",defaultExpanded:null!=t&&t[0].computedItems&&t[0].computedItems.length>0?[0]:[]},t.map((function(e){var t,i=e.id,a=e.description,c=e.computedItems;return r.createElement(C.a,{key:"learning-objective-".concat(i),"data-e2e":"LearningObjectivesWithItemsList__objective"},r.createElement(x.a,{label:a,supportText:n.formatMessage(B()("{numItems, plural, =0 {Nothing} one {# material} other {# materials}} to review"),{numItems:null!==(t=null==c?void 0:c.length)&&void 0!==t?t:0})}),r.createElement(k.a,null,null!=c&&c.length?null==c?void 0:c.map((function(e){return r.createElement("div",{key:"learning-objective-item-".concat(i,"-").concat(e.id),"data-e2e":"LearningObjectivesWithItemsList__item"},r.createElement(E,{computedItem:e}))})):r.createElement("div",null,B()("There are no additional materials to review for this learning objective"))))}))))},G={root:function root(e){return Object(a.c)({marginBottom:e.spacing(48)})},instructions:function instructions(e){return Object(a.c)({marginTop:e.spacing(8)})},learningObjectiveContainer:function learningObjectiveContainer(e){return Object(a.c)({marginTop:e.spacing(32)})}},Q,q=function LearningObjectivesContent(e){var t=e.itemId,n=e.courseSlug,i=void 0===n?"":n,r=e.learningObjectiveIds;return Object(a.d)("div",{css:G.root},Object(a.d)(d.a,{variant:"h1semibold",component:"h2"},B()("Review Learning Objectives")),Object(a.d)(d.a,{variant:"body2",css:G.instructions},B()("Review concepts related to your current learning objectives")),Object(a.d)("div",{css:G.learningObjectiveContainer},Object(a.d)(w,{itemId:t,courseSlug:i,learningObjectiveIds:r,removeParentItem:!0,removeFutureItems:!0},(function(e){var t=e.learningObjectives;return Object(a.d)(F,{learningObjectives:t})}))))},N,M={linkButton:Object(a.c)({marginLeft:-16})},J=function LearningObjectivesButton(e){var t=e.itemId,n=e.courseSlug,d=e.learningObjectiveIds,u=Object(r.useState)(),l=i()(u,2),m=l[0],b=l[1],g=function toggleTunnelVision(){return b(!m)};if(null==d||!d.length)return null;return Object(a.d)("div",{"data-e2e":"LearningObjectivesButton"},Object(a.d)(c.a,{variant:"ghost",css:M.linkButton,onClick:g,"data-test":"review-button"},B()("Review Learning Objectives")),m&&Object(a.d)(s.b,{"data-test":"tunnel-vision-wrapper",onClose:g,headerLeft:Object(a.d)(o.b,{headerText:B()("Review Learning Objectives"),itemTypeText:B()("Review materials")}),headerRight:N||(N=Object(a.d)("div",null))},Object(a.d)(q,{"data-test":"learning-objectives-content",itemId:t,courseSlug:n,learningObjectiveIds:d})))},V=e.a=J},nlef:function(module,e,t){"use strict";var n=t("lSNA"),i=t.n(n),a=t("UB5X"),r=t.n(a),c=t("AeFk"),o=t("q1tI"),s=t.n(o),d=t("kvW3"),u=t("JJfJ"),l=t("kgYC"),m=t("xBnS"),b=t("izmZ"),g=t("d3Ej"),p=t.n(g),v=function root(e){return Object(c.c)(i()({display:"flex",flexDirection:"column"},e.breakpoints.only("xs"),{flexDirection:"column"}))},j=function row(e){return Object(c.c)(i()({display:"flex",flexDirection:"row",marginBottom:e.spacing(8)},e.breakpoints.only("xs"),{flexDirection:"column",marginBottom:0}))},O=function CoverPageDetails(e){var t=e.deadline,n=e.attemptsCompleted,i=void 0===n?0:n,a=e.attemptsLeft,o=e.attemptsRateCount,s=e.attemptsRateInterval,g=e.passingFraction,O=e.isCumulativeGraded,f=e.lastSubmittedAt,h=e.isRequiredItem,I=void 0!==h&&h,S=Object(l.a)(),w=r()(a)?a+i:null;return Object(c.d)("div",{css:v(S)},Object(c.d)("div",{css:j(S)},t&&Object(c.d)(m.a,{label:p()("Due"),details:Object(u.w)(t,u.i),ariaDetails:Object(u.w)(t,u.b)}),r()(a)&&Object(c.d)(m.a,{label:p()("Attempts"),details:Object(c.d)(d.b,{message:p()("{attemptsLeft, number} left ({attemptsMax, number} total attempts)"),attemptsLeft:Math.max(a,0),attemptsMax:w})}),r()(o)&&r()(s)&&Object(c.d)(m.a,{label:p()("Attempts"),details:Object(c.d)(d.b,{message:p()("{count, number} every {duration}"),count:o,duration:Object(u.x)(s,!0)})}),r()(g)&&(!O||I)&&Object(c.d)(m.a,{label:p()("To Pass"),details:Object(c.d)(d.a,{message:p()("{percent} or higher"),percent:Object(c.d)(b.a,{value:g,maxFractionDigits:0})})})),f&&Object(c.d)("div",{css:j(S)},Object(c.d)(m.a,{label:p()("Submitted"),details:Object(u.w)(f,u.i),ariaDetails:Object(u.w)(f,u.b)})))};e.a=O},xBnS:function(module,e,t){"use strict";var n=t("lSNA"),i=t.n(n),a=t("AeFk"),r=t("q1tI"),c=t.n(r),o=t("kgYC"),s=t("8Hdl"),d=t("PB6g"),u=function root(e){return Object(a.c)({whiteSpace:"nowrap","& + &":i()({marginLeft:e.spacing(16)},e.breakpoints.down("xs"),{marginLeft:0})})},l=function label(e){return Object(a.c)({marginRight:e.spacing(8)})},m=function CoverPagePhaseDetail(e){var t=e.label,n=e.details,i=e.ariaDetails,r=Object(o.a)();return Object(a.d)("div",{css:u(r),"data-e2e":"CoverPagePhaseDetail"},Object(a.d)(s.a,{variant:"h4bold",component:"span",css:l(r),color:"supportText","data-test":"label"},t)," ",Object(a.d)(s.a,{variant:"body2",component:"span",color:"supportText","data-test":"content","data-e2e":"CoverPagePhaseDetail__content"},i&&Object(a.d)(d.b,{tagName:"span"},i),Object(a.d)("span",{"aria-hidden":Boolean(i)},n)))};e.a=m}}]);
//# sourceMappingURL=68.05d42a2535094ae96cd6.js.map