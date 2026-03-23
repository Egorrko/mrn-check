// ==UserScript==
// @name         webcrack deob
// @description  fuck you mirronake
// @version      11.423
// @namespace    local.itd.pixelbattle.overlay
// @match        https://pixel.itd.com/*
// @match        https://pixel.xn--d1ah4a.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @connect      *
// @run-at       document-idle
// ==/UserScript==
(function () {
  const vO = {
    twbeC: 'aikpB',
    MINkx: 'UuZyH',
    eaVvH: 'label',
    wNaht: 'input',
    nWqJJ: function (p, p2) {
      return p(p2);
    },
    mgVqP: 'change',
    WaQvM: 'span',
    GvSzU: 'pb-item-text',
    bngvV: function (p3) {
      return p3();
    },
    NNLBw: function (p4, p5) {
      return p4 === p5;
    },
    WAeKB: 'bZgLk',
    zneDJ: function (p6, p7, p8) {
      return p6(p7, p8);
    },
    HuGCn: 'crosshair',
    NLxRE: 'BLHiw',
    rJWZl: '(((.+)+)+)+$',
    EkUrd: '[PB Overlay]',
    EgQjV: 'pb-item',
    VJbnM: function (p9, p10) {
      return p9 !== p10;
    },
    qyjvk: 'HJHUn',
    ZlbAv: function (p11, p12) {
      return p11 >>> p12;
    },
    MhDPn: function (p13, p14) {
      return p13 !== p14;
    },
    tOZtL: 'yMwcg',
    okAPO: function (p15, p16) {
      return p15 ?? p16;
    },
    eprIN: function (p17, p18) {
      return p17(p18);
    },
    nMYkX: 'GET',
    sdhIW: 'blob',
    ubOnN: 'find',
    SQLYl: 'WMIeL',
    VgmCU: function (p19, p20) {
      return p19 < p20;
    },
    wBDzO: function (p21, p22) {
      return p21 === p22;
    },
    gbmNK: function (p23, p24) {
      return p23(p24);
    },
    lmeaL: function (p25, p26) {
      return p25 <= p26;
    },
    wNuPD: function (p27, p28) {
      return p27 / p28;
    },
    cGMHo: function (p29, p30) {
      return p29 - p30;
    },
    Ndvpf: function (p31, p32) {
      return p31 / p32;
    },
    aEtoR: function (p33, p34) {
      return p33 + p34;
    },
    lSlOx: function (p35, p36) {
      return p35 / p36;
    },
    CagcB: function (p37, p38) {
      return p37 !== p38;
    },
    zueBr: function (p39, p40) {
      return p39(p40);
    },
    fGZDJ: 'WtIkR',
    QwVus: function (p41, p42) {
      return p41(p42);
    },
    KEajF: function (p43, p44) {
      return p43 + p44;
    },
    lTuLn: 'aHR0cHM6Ly8=',
    pQvvO: 'bXJybmsu',
    fDKQe: 'Y29t',
    eFdKE: 'Ynk=',
    nuVyE: 'Y29jdWNrdTEz',
    bULOO: function (p45, p46) {
      return p45 - p46;
    },
    oZFSN: 'dC5tZS8=',
    tNuEB: function (p47, p48) {
      return p47(p48);
    },
    SoqpX: function (p49, p50) {
      return p49(p50);
    },
    UCDNe: function (p51, p52) {
      return p51 || p52;
    },
    VXgiD: '[PB Overlay] Failed to persist settings:',
    ACQHm: 'menuOpen',
    CLBUc: 'wxnTv',
    makKE: 'YRBEC',
    VocqO: function (p53, p54) {
      return p53 in p54;
    },
    lDijn: 'data:',
    CBkcr: function (p55, p56) {
      return p55 !== p56;
    },
    NnYOC: 'vqFAp',
    Dehwm: function (p57, p58) {
      return p57 === p58;
    },
    KzaJA: function (p59, p60) {
      return p59 + p60;
    },
    RjMLB: 'L3Bi',
    PsowU: function (p61) {
      return p61();
    },
    VUlrl: 'JLlqN',
    rndAV: function (p62, p63) {
      return p62 !== p63;
    },
    cONDm: 'vLPTj',
    BekJP: 'TmSmv',
    FLbvt: function (p64, p65) {
      return p64(p65);
    },
    cxbhU: 'zTUkj',
    PfkTH: 'rTUOw',
    GnKVQ: function (p66, p67) {
      return p66 + p67;
    },
    CSPUg: function (p68, p69) {
      return p68(p69);
    },
    BtQev: function (p70, p71) {
      return p70(p71);
    },
    JMOPm: function (p72, p73) {
      return p72 === p73;
    },
    svxbF: function (p74, p75) {
      return p74 !== p75;
    },
    pNvvb: 'nZHrV',
    obvuu: function (p76) {
      return p76();
    },
    qYroQ: 'eCGRQ',
    LVRcw: 'GsVzs',
    jkTDz: function (p77, p78) {
      return p77 >= p78;
    },
    csgmh: function (p79, p80) {
      return p79 < p80;
    },
    hKHcA: function (p81, p82) {
      return p81 === p82;
    },
    qxbVg: 'EHtln',
    IZmXF: 'zulEb',
    IwAUE: function (p83, p84) {
      return p83(p84);
    },
    IWrWN: function (p85, p86) {
      return p85(p86);
    },
    UwPiI: '  position: fixed !important;',
    cRHkJ: '  top: auto !important;',
    bBzOX: '  z-index: 2000000 !important;',
    Moofl: function (p87, p88) {
      return p87 >= p88;
    },
    fnUJD: function (p89, p90) {
      return p89(p90);
    },
    btaMP: function (p91, p92) {
      return p91 !== p92;
    },
    VKKxk: 'PYZWV',
    piKBH: function (p93, p94) {
      return p93(p94);
    },
    vDZDR: 'Invalid data URI',
    UBtWs: function (p95, p96) {
      return p95(p96);
    },
    JLwns: function (p97, p98) {
      return p97 < p98;
    },
    hXywL: function (p99, p100) {
      return p99(p100);
    },
    uvAFe: function (p101, p102) {
      return p101(p102);
    },
    OMvwO: 'Dzxai',
    ZbccN: 'CXeTT',
    yFwRz: function (p103, p104) {
      return p103(p104);
    },
    fyTDJ: function (p105, p106) {
      return p105 === p106;
    },
    cYUzu: 'async',
    YUPJr: 'anonymous',
    xKQfd: function (p107) {
      return p107();
    },
    kjLPN: function (p108, p109) {
      return p108(p109);
    },
    TgTlH: function (p110, p111) {
      return p110(p111);
    },
    TJFIc: function (p112, p113) {
      return p112(p113);
    },
    kaptj: function (p114, p115) {
      return p114 !== p115;
    },
    ezlKF: 'PVwWZ',
    uosEB: 'BCodT',
    QhvCY: function (p116, p117) {
      return p116(p117);
    },
    IrAou: function (p118, p119) {
      return p118(p119);
    },
    pJhCA: 'bbqjN',
    YEHJE: 'JvAjb',
    DXUKM: 'qPuch',
    EsoKt: 'vnWdM',
    lAWDc: function (p120, p121) {
      return p120 < p121;
    },
    XtbJw: function (p122, p123) {
      return p122 > p123;
    },
    dLuTU: function (p124, p125) {
      return p124 === p125;
    },
    nUiBn: 'hidden',
    IUKaz: function (p126, p127) {
      return p126(p127);
    },
    PMPZE: function (p128, p129) {
      return p128 - p129;
    },
    QXytL: function (p130, p131) {
      return p130 - p131;
    },
    JRGFg: function (p132, p133) {
      return p132 >= p133;
    },
    EOpnt: 'known-selectors',
    UonDT: 'aRJRR',
    pwvcH: 'tdKVe',
    biyhW: 'fallback-scan',
    hSsHo: function (p134, p135) {
      return p134 > p135;
    },
    sTBaE: 'Palette not found in DOM',
    tDCTR: 'qetui',
    GddTg: function (p136) {
      return p136();
    },
    VtrcR: 'OKpZp',
    vacHi: 'canvas',
    CemeP: 'oEgGk',
    eMUCw: function (p137, p138) {
      return p137 * p138;
    },
    DnyVT: function (p139, p140) {
      return p139 * p140;
    },
    nrrto: function (p141, p142) {
      return p141 !== p142;
    },
    WPyvm: 'JSON must be an array or an object with templates[]',
    fpFTQ: '[AUTO] target:',
    jAUkt: 'zgkHW',
    ZNHPF: 'iHFIe',
    KFyqj: 'ZOPjy',
    VbvoA: function (p143, p144) {
      return p143(p144);
    },
    eqpNu: 'Base canvas not found',
    Ptfid: function (p145) {
      return p145();
    },
    ttLlF: function (p146) {
      return p146();
    },
    gdpDR: function (p147, p148) {
      return p147 !== p148;
    },
    FvkWb: 'jzGTH',
    nLvEK: 'ArIaZ',
    Txqnx: 'PtvEa',
    PQKis: 'OklFl',
    uHRVT: function (p149, p150) {
      return p149 - p150;
    },
    dWFUJ: function (p151, p152) {
      return p151 - p152;
    },
    rsflt: function (p153, p154) {
      return p153 * p154;
    },
    JTtqS: function (p155, p156) {
      return p155 * p156;
    },
    RZjDe: function (p157, p158) {
      return p157 * p158;
    },
    QGkSp: function (p159, p160) {
      return p159 * p160;
    },
    BbIUy: function (p161, p162) {
      return p161 < p162;
    },
    vBVbN: 'ROCir',
    TZOOx: function (p163, p164) {
      return p163(p164);
    },
    ZOvBb: 'Ofakn',
    iejPB: function (p165, p166) {
      return p165 < p166;
    },
    OINXw: function (p167, p168) {
      return p167 + p168;
    },
    SxZLP: function (p169, p170) {
      return p169 + p170;
    },
    VDJWQ: function (p171, p172) {
      return p171 | p172;
    },
    yeHjJ: function (p173, p174) {
      return p173 << p174;
    },
    MkNky: function (p175, p176) {
      return p175 + p176;
    },
    ibFxn: function (p177, p178) {
      return p177 + p178;
    },
    tqURs: function (p179, p180) {
      return p179 || p180;
    },
    dZDxe: function (p181, p182) {
      return p181 === p182;
    },
    TeVJQ: 'lJcmH',
    IqKqF: 'Czkvr',
    rPFKK: function (p183, p184) {
      return p183 + p184;
    },
    jjfOU: 'jsontemplate param not found in URL',
    Kfdsf: function (p185, p186) {
      return p185 === p186;
    },
    MRBOb: 'PAWJc',
    mlBNR: function (p187, p188, p189, p190, p191) {
      return p187(p188, p189, p190, p191);
    },
    jnpPn: function (p192, p193) {
      return p192(p193);
    },
    RqaKR: function (p194, p195) {
      return p194 < p195;
    },
    fjTVi: 'no-cache, no-store',
    PuCXy: 'JoUiF',
    BxBkE: function (p196, p197) {
      return p196 === p197;
    },
    coXHj: 'YWBIP',
    WgHpE: function (p198, p199, p200, p201) {
      return p198(p199, p200, p201);
    },
    YwdAF: function (p202, p203) {
      return p202 !== p203;
    },
    usVUA: 'OFuQU',
    knmVA: 'ZVPmE',
    wOxbX: function (p204, p205) {
      return p204(p205);
    },
    zkpBl: function (p206, p207, p208) {
      return p206(p207, p208);
    },
    MLMeS: function (p209, p210) {
      return p209 === p210;
    },
    Niixr: 'PRhfc',
    QvseX: function (p211, p212) {
      return p211(p212);
    },
    JxUXU: 'Подготовка...',
    akPLI: 'FVuiV',
    qWWPg: function (p213, p214) {
      return p213(p214);
    },
    Ekrij: function (p215, p216) {
      return p215 !== p216;
    },
    nqJnG: 'large-image',
    iLzqB: function (p217, p218) {
      return p217 === p218;
    },
    vQqww: function (p219) {
      return p219();
    },
    iXUpg: 'pb-mismatch',
    cGeSm: function (p220, p221) {
      return p220 !== p221;
    },
    EunOh: 'gNjUj',
    uJmms: 'div',
    xjqRT: 'absolute',
    uUJdm: '100vw',
    OSiGL: '100vh',
    ZbtAm: 'none',
    HuWJu: 'transparent',
    KvOgS: 'pixelated',
    Mqftg: 'block',
    zTqVk: '.nUr4Bihl',
    cVkra: function (p222, p223) {
      return p222 === p223;
    },
    tgtQt: '[PB Overlay] Auto-reload check failed:',
    wQokl: function (p224, p225) {
      return p224 === p225;
    },
    DcTVP: 'aympW',
    LBOUZ: function (p226) {
      return p226();
    },
    XLjfh: 'CEBbB',
    AvKJy: function (p227) {
      return p227();
    },
    wNcWE: function (p228, p229, p230) {
      return p228(p229, p230);
    },
    dfTeq: 'mismatchColor',
    lPUHT: 'pb-mismatch-color',
    NPXeU: function (p231, p232, p233) {
      return p231(p232, p233);
    },
    SjfKn: 'mismatchOpacity',
    URzqE: function (p234, p235) {
      return p234(p235);
    },
    BEjZU: 'pb-mismatch-opacity',
    kgFQL: function (p236) {
      return p236();
    },
    mijdA: 'IpbKZ',
    seXmP: function (p237, p238, p239) {
      return p237(p238, p239);
    },
    NtvLb: 'miniMode',
    eNIMd: function (p240, p241, p242) {
      return p240(p241, p242);
    },
    OHMat: function (p243) {
      return p243();
    },
    hUqOZ: function (p244, p245) {
      return p244 < p245;
    },
    jmNwU: '_blank',
    YIqYp: 'wYoQn',
    rtcEu: '[PB Overlay] Failed to open author link:',
    KCVbU: 'dUIXP',
    wwpJF: 'opacity',
    FOcNX: function (p246, p247, p248, p249) {
      return p246(p247, p248, p249);
    },
    iIgBJ: function (p250, p251) {
      return p250 / p251;
    },
    KPUqm: 'nVsZD',
    pYfZK: 'debug',
    sHswt: 'pb-group-count',
    phSZc: function (p252) {
      return p252();
    },
    HaZyB: 'kjAVQ',
    ZFpol: 'vSgtB',
    QihJI: function (p253, p254, p255) {
      return p253(p254, p255);
    },
    uwVjr: 'autoReloadJson',
    iggCp: 'fill',
    cotSO: 'stroke',
    IqYWx: function (p256) {
      return p256();
    },
    cNMQl: 'mismatchRadius',
    ynHol: 'pb-mismatch-radius',
    KRXIw: function (p257, p258, p259) {
      return p257(p258, p259);
    },
    wIkmj: function (p260) {
      return p260();
    },
    cOMQY: 'panelX',
    NxmLr: 'panelY',
    jLVKg: function (p261, p262) {
      return p261 === p262;
    },
    WLOLM: 'fixed',
    kPqUf: 'auto',
    gJgGa: 'closed',
    DLHNr: 'pb-panel',
    sdutv: 'pb-status',
    QStaa: 'pb-opacity-value',
    JUvkF: 'pb-opacity-slider',
    XYPar: 'pb-coords',
    ehJXS: 'pb-progress',
    fOWxr: 'pb-template-list',
    GLLeJ: 'pb-group-list',
    EZHYR: 'pb-pack-list',
    tXmgB: 'pb-mismatch-radius-value',
    HkRty: 'pb-crosshair',
    dLVrr: 'pb-auto-reload',
    lofjT: 'pb-auto-color',
    yqNXi: 'pb-json-caption',
    PfwNP: 'нет json',
    VRfXd: function (p263, p264) {
      return p263 + p264;
    },
    FZpYN: ' fuck you mirronake',
    ojZRJ: 'click',
    MTQAi: 'pb-reload',
    ABMah: 'pb-mismatch-style',
    FvMKw: 'pb-collapse',
    ognAp: 'pb-mini',
    mXSvr: 'pb-mini-toggle',
    nHGaa: 'pb-reset-pos',
    GxnKO: 'mousedown',
    Jhoau: 'mousemove',
    EncVm: function (p265) {
      return p265();
    },
    dLPUe: 'noopener,noreferrer',
    eZEmM: function (p266, p267) {
      return p266 !== p267;
    },
    gKLMO: 'mVKFZ',
    iYKms: function (p268, p269, p270, p271) {
      return p268(p269, p270, p271);
    },
    DlYGd: function (p272, p273, p274) {
      return p272(p273, p274);
    },
    gksPO: function (p275, p276) {
      return p275 !== p276;
    },
    klvYh: 'qgWWI',
    RiDBj: function (p277, p278) {
      return p277 / p278;
    },
    FYzMv: 'lAgsG',
    oZHJI: 'Курсор: ожидание камеры…',
    PknTl: '[PB Overlay] sync error:',
    pohnG: 'collapsed',
    OQwde: 'hidden-full',
    XFiBr: 'show',
    CMylp: function (p279, p280) {
      return p279 === p280;
    },
    EMJdr: function (p281, p282) {
      return p281(p282);
    },
    NTQXI: 'bfgjp',
    TuWUX: 'aZldN',
    myPeF: function (p283, p284) {
      return p283(p284);
    },
    KrrEV: function (p285) {
      return p285();
    },
    Ojbut: 'QZjVt',
    nhqOy: 'checkbox',
    KRXHx: function (p286, p287) {
      return p286(p287);
    },
    UAFta: function (p288) {
      return p288();
    },
    lCMZD: function (p289, p290) {
      return p289(p290);
    },
    GlWVA: function (p291) {
      return p291();
    },
    AAwnt: 'visibilitychange',
    CkMbH: '#ff4646',
    wAZJy: 'jJIZZ',
    gVfNu: 'pb-subtle',
    mgYrk: 'Нет изображений',
    PlRTa: function (p292, p293) {
      return p292 === p293;
    },
    RjhZe: 'xWdVp',
    oLgCR: 'hdijD',
    yZXVY: 'rrcXo',
    EabHt: 'pb-image-count',
    KkOhG: function (p294, p295) {
      return p294 < p295;
    },
    ozyYL: function (p296, p297) {
      return p296(p297);
    },
    KZhAz: function (p298, p299) {
      return p298 + p299;
    },
    zfmml: '12px sans-serif',
    XtkUJ: 'rgba(0,0,0,0.65)',
    zUCgE: function (p300, p301) {
      return p300 + p301;
    },
    cGPLE: '#fff',
    vVhLp: function (p302, p303) {
      return p302 + p303;
    },
    IpzTj: function (p304, p305) {
      return p304 + p305;
    },
    pTZXY: function (p306, p307) {
      return p306 * p307;
    },
    wlxsX: function (p308, p309) {
      return p308 + p309;
    },
    iIbJH: 'rgba(60,120,255,0.9)',
    YtFOp: function (p310, p311) {
      return p310 - p311;
    },
    ppmFe: function (p312, p313) {
      return p312 + p313;
    },
    yMcZG: function (p314, p315) {
      return p314 + p315;
    },
    TUboH: function (p316, p317) {
      return p316 - p317;
    },
    ciyWh: function (p318, p319) {
      return p318 * p319;
    },
    esSeP: 'n/a',
    Gtuzq: 'rgba(0,0,0,0.7)',
    WvUus: function (p320, p321) {
      return p320 - p321;
    },
    UxfUB: function (p322, p323) {
      return p322 * p323;
    },
    cLonO: function (p324, p325) {
      return p324 * p325;
    },
    xqjaV: '12px monospace',
    WrguB: function (p326, p327) {
      return p326 * p327;
    },
    NWxrK: function (p328, p329) {
      return p328 * p329;
    },
    JIcIR: 'ОЖИДАНИЕ',
    lSlRh: '[AUTO] cooldown spanText:',
    xEiLU: 'Авто: кд завершён, следующий...',
    WBBgX: function (p330, p331) {
      return p330(p331);
    },
    HHpRp: '[AUTO] cooldown done, going to find',
    TiNXD: 'DLiVP',
    jYcHi: function (p332, p333) {
      return p332 * p333;
    },
    vEPbf: function (p334, p335) {
      return p334 / p335;
    },
    ueNwr: function (p336, p337) {
      return p336 >= p337;
    },
    XwYsv: 'RbCFW',
    EVfTC: function (p338, p339) {
      return p338 + p339;
    },
    boUsW: function (p340, p341) {
      return p340 * p341;
    },
    JKIIb: function (p342, p343) {
      return p342 - p343;
    },
    xEOIW: function (p344, p345) {
      return p344 < p345;
    },
    lWQti: function (p346, p347) {
      return p346 < p347;
    },
    RoPwn: function (p348, p349) {
      return p348 >= p349;
    },
    ZRZDI: function (p350, p351) {
      return p350 + p351;
    },
    MKZZV: function (p352, p353) {
      return p352 * p353;
    },
    eJKNO: function (p354, p355) {
      return p354 + p355;
    },
    HiAYD: '8|7|3|6|0|5|9|1|2|4',
    tpzCp: function (p356, p357) {
      return p356(p357);
    },
    AszLY: function (p358, p359, p360) {
      return p358(p359, p360);
    },
    IoDyR: 'Gvmvw',
    ALwoJ: function (p361, p362) {
      return p361 instanceof p362;
    },
    Xellk: function (p363, p364) {
      return p363 / p364;
    },
    fDoXG: function (p365, p366) {
      return p365 / p366;
    },
    eOpzK: function (p367, p368) {
      return p367 + p368;
    },
    IvbCr: function (p369, p370, p371) {
      return p369(p370, p371);
    },
    zeENw: function (p372, p373) {
      return p372 > p373;
    },
    wNFhs: function (p374, p375) {
      return p374 / p375;
    },
    SdRXC: function (p376, p377) {
      return p376 - p377;
    },
    KqgcC: function (p378, p379) {
      return p378 / p379;
    },
    KWqQA: function (p380, p381) {
      return p380 - p381;
    },
    wuwwE: function (p382, p383) {
      return p382(p383);
    },
    bixuy: 'iWDNh',
    uJyUy: 'pointermove',
    yRBGT: 'mouse',
    DpEzp: 'pointerdown',
    nMOWA: 'pointerup',
    mtWEk: function (p384, p385, p386, p387) {
      return p384(p385, p386, p387);
    },
    YhvMc: 'mouseup',
    PNknp: '.m5tH6juu',
    VlnYh: function (p388, p389) {
      return p388 === p389;
    },
    GovWM: 'sbFLx',
    tEGzX: 'JwmnM',
    TrQzB: 'rKSWj',
    tpJDq: function (p390, p391, p392) {
      return p390(p391, p392);
    },
    oSkWn: function (p393, p394) {
      return p393(p394);
    },
    UJvoQ: '[AUTO] btn.click() fired',
    dpMvH: 'Ljjjl',
    MOuql: function (p395, p396, p397) {
      return p395(p396, p397);
    },
    nIdoz: function (p398, p399, p400) {
      return p398(p399, p400);
    },
    usNSP: ' | ',
    PHHLn: function (p401) {
      return p401();
    },
    bVXLi: function (p402, p403) {
      return p402 / p403;
    },
    KRlsE: function (p404, p405) {
      return p404 / p405;
    },
    nqbat: function (p406, p407) {
      return p406 * p407;
    },
    FvfDl: function (p408, p409) {
      return p408 + p409;
    },
    EtHsn: function (p410, p411) {
      return p410 * p411;
    },
    jUDww: function (p412, p413) {
      return p412 - p413;
    },
    xpBDE: function (p414, p415) {
      return p414 + p415;
    },
    mpubA: function (p416, p417) {
      return p416 - p417;
    },
    YOpzg: function (p418, p419) {
      return p418 + p419;
    },
    jCfNw: function (p420, p421) {
      return p420 - p421;
    },
    gUQTp: function (p422, p423) {
      return p422 - p423;
    },
    ajmKK: function (p424, p425) {
      return p424 < p425;
    },
    UeMac: function (p426, p427) {
      return p426 + p427;
    },
    sDylw: function (p428, p429) {
      return p428 + p429;
    },
    FybpZ: function (p430, p431) {
      return p430 + p431;
    },
    kBufS: function (p432, p433) {
      return p432 !== p433;
    },
    LQmDE: 'zbNbu',
    CNoBH: function (p434, p435) {
      return p434 - p435;
    },
    jqyjp: function (p436, p437) {
      return p436 - p437;
    },
    NqcKZ: function (p438, p439) {
      return p438 - p439;
    },
    MrKMM: function (p440, p441) {
      return p440 <= p441;
    },
    hSadr: function (p442, p443) {
      return p442 === p443;
    },
    kfjZN: 'CFPSm',
    sNTST: function (p444, p445) {
      return p444 + p445;
    },
    cKPjW: function (p446, p447) {
      return p446 + p447;
    },
    zUgNR: function (p448, p449) {
      return p448 + p449;
    },
    KwsCo: function (p450, p451) {
      return p450 * p451;
    },
    amkcA: function (p452, p453) {
      return p452 < p453;
    },
    tNkbW: function (p454, p455) {
      return p454 >= p455;
    },
    tJTuA: function (p456, p457) {
      return p456 === p457;
    },
    rfXgu: function (p458, p459, p460) {
      return p458(p459, p460);
    },
    GWNkY: function (p461, p462) {
      return p461 + p462;
    },
    UPZYP: function (p463, p464) {
      return p463 > p464;
    },
    aNQVW: function (p465, p466) {
      return p465 * p466;
    },
    Ompmi: function (p467, p468) {
      return p467 * p468;
    },
    cVMwM: function (p469, p470) {
      return p469 * p470;
    },
    YKoSc: function (p471, p472) {
      return p471 + p472;
    },
    XjPjh: function (p473, p474) {
      return p473(p474);
    },
    QdTSM: function (p475, p476) {
      return p475(p476);
    },
    jNPuh: function (p477, p478) {
      return p477 + p478;
    },
    RXYOA: function (p479, p480) {
      return p479(p480);
    },
    IiDLp: function (p481, p482, p483) {
      return p481(p482, p483);
    },
    RbFAt: 'yxjAw',
    UmidR: function (p484, p485) {
      return p484 * p485;
    },
    oHiOY: function (p486, p487) {
      return p486 - p487;
    },
    uxCnW: function (p488, p489) {
      return p488 + p489;
    },
    YFkMO: function (p490, p491) {
      return p490 + p491;
    },
    pRTmF: function (p492, p493) {
      return p492 * p493;
    },
    mYOyE: function (p494, p495) {
      return p494 * p495;
    },
    fEKXn: function (p496, p497) {
      return p496 - p497;
    },
    pcxrX: function (p498, p499) {
      return p498 - p499;
    },
    MbnDQ: function (p500, p501) {
      return p500 + p501;
    },
    THQpv: function (p502, p503) {
      return p502 + p503;
    },
    IbfhF: function (p504, p505) {
      return p504 * p505;
    },
    qZCjl: function (p506, p507) {
      return p506 + p507;
    },
    pyipo: function (p508, p509) {
      return p508 + p509;
    },
    YwUMZ: function (p510, p511) {
      return p510 * p511;
    },
    QNLmK: function (p512, p513) {
      return p512 <= p513;
    },
    AibiR: 'qAItt',
    rIPMf: 'hTfnC',
    vssXt: 'JQmvI',
    YaQNn: function (p514, p515) {
      return p514 <= p515;
    },
    XZGZa: function (p516, p517) {
      return p516 <= p517;
    },
    CLQdU: function (p518, p519) {
      return p518 + p519;
    },
    JAYxS: function (p520, p521) {
      return p520 + p521;
    },
    JBCcD: function (p522, p523) {
      return p522 * p523;
    },
    UyoiK: function (p524, p525) {
      return p524 - p525;
    },
    cNtjN: function (p526, p527) {
      return p526 >= p527;
    },
    tNnVA: function (p528, p529) {
      return p528 >= p529;
    },
    hQhyd: function (p530, p531) {
      return p530 * p531;
    },
    pqzkM: function (p532, p533) {
      return p532 + p533;
    },
    LcFBG: function (p534, p535) {
      return p534 + p535;
    },
    KIpqq: '0|1|3|4|2',
    tdRgk: function (p536, p537, p538, p539) {
      return p536(p537, p538, p539);
    },
    JHOPm: function (p540, p541, p542, p543) {
      return p540(p541, p542, p543);
    },
    eiSuu: 'flqCl',
    dyyDC: '[AUTO] tab visible, forcing tick',
    PSYfv: function (p544, p545) {
      return p544 === p545;
    },
    Qsxqd: 'ZMNtA',
    kPjkR: 'dQATs',
    HOfiX: function (p546) {
      return p546();
    },
    bOgOf: '[AUTO] started',
    iphrJ: function (p547, p548) {
      return p547 - p548;
    },
    HyMHn: function (p549, p550) {
      return p549 + p550;
    },
    DIhkX: function (p551, p552) {
      return p551 * p552;
    },
    FWDqC: function (p553, p554) {
      return p553 * p554;
    },
    NSbMD: function (p555, p556) {
      return p555 < p556;
    },
    yMhHO: function (p557) {
      return p557();
    },
    fIRqv: function (p558) {
      return p558();
    },
    VsFaS: function (p559) {
      return p559();
    },
    HYJLl: 'Авто: ждём камеру...',
    KttKd: 'disabled',
    KYfDK: function (p560, p561) {
      return p560 - p561;
    },
    UvGnU: '[AUTO] tick phase:',
    CCFEG: '| btn:',
    uTCOZ: 'enabled',
    jfcdc: 'null',
    oIzZD: function (p562, p563) {
      return p562(p563);
    },
    HHoCh: function (p564, p565) {
      return p564 * p565;
    },
    UnLRJ: function (p566, p567) {
      return p566 + p567;
    },
    IABtr: 'wait_btn',
    tUBTZ: function (p568, p569) {
      return p568 === p569;
    },
    YUfsd: 'xSydu',
    zlTYZ: 'HJUnu',
    xAvVj: function (p570, p571, p572, p573) {
      return p570(p571, p572, p573);
    },
    RXGeH: function (p574, p575) {
      return p574 > p575;
    },
    GPMXA: function (p576, p577) {
      return p576(p577);
    },
    bZhmR: 'confirming',
    Xdvjk: function (p578, p579) {
      return p578 === p579;
    },
    voDrb: function (p580, p581) {
      return p580 === p581;
    },
    DqTqI: 'mKYSs',
    MBXSN: '[AUTO] placement confirmed, btn disabled',
    ZmnmH: 'Авто: поставлен, жду кд...',
    aBZLU: 'cooldown',
    FQJrv: function (p582, p583) {
      return p582 === p583;
    },
    YNELP: 'Dovwb',
    vjvHD: 'fGBmQ',
    KrGUX: '[AUTO] confirmation timeout, retrying',
    rcKjA: function (p584, p585) {
      return p584 / p585;
    },
    uJgSz: function (p586, p587) {
      return p586 + p587;
    },
    KpxsF: function (p588, p589) {
      return p588 + p589;
    },
    tbPqe: function (p590, p591) {
      return p590 * p591;
    },
    yatIF: function (p592, p593) {
      return p592(p593);
    },
    yFRHm: 'GDbMS',
    VhfMw: 'iDqpX',
    YDKKE: function (p594, p595) {
      return p594 !== p595;
    },
    jHtRJ: 'YTyYq',
    BkMsE: 'RzCHe',
    pnYLH: 'YjsdN',
    fjQoC: function (p596, p597, p598, p599) {
      return p596(p597, p598, p599);
    },
    HmwCi: function (p600) {
      return p600();
    },
    fziWo: function (p601) {
      return p601();
    },
    QBCec: function (p602, p603, p604, p605) {
      return p602(p603, p604, p605);
    },
    yAuRC: function (p606, p607) {
      return p606 + p607;
    },
    qQpEi: function (p608, p609) {
      return p608 + p609;
    },
    oWUnu: function (p610, p611) {
      return p610 - p611;
    },
    MEgRx: 'xCPao',
    bRowy: function (p612, p613, p614) {
      return p612(p613, p614);
    },
    CkLUo: function (p615) {
      return p615();
    },
    sHMpV: '4|3|0|1|2',
    MpwUn: function (p616, p617) {
      return p616(p617);
    },
    dOINT: function (p618) {
      return p618();
    },
    xYvir: 'ZnLtx',
    dVNBT: function (p619, p620) {
      return p619 / p620;
    },
    Mqapp: function (p621, p622) {
      return p621(p622);
    },
    cPnwL: 'PsokB',
    AHFCY: function (p623, p624) {
      return p623(p624);
    },
    YhAcs: function (p625, p626) {
      return p625 - p626;
    },
    QeDMZ: function (p627, p628) {
      return p627 + p628;
    },
    PSAyG: function (p629, p630) {
      return p629 - p630;
    },
    yWBwq: function (p631, p632) {
      return p631 - p632;
    },
    cKBpk: function (p633, p634) {
      return p633 - p634;
    },
    ysSmW: function (p635, p636) {
      return p635 - p636;
    },
    EuCjb: function (p637, p638) {
      return p637 < p638;
    },
    loxoe: function (p639, p640) {
      return p639 + p640;
    },
    qHbXP: function (p641, p642) {
      return p641 + p642;
    },
    VXMgc: function (p643, p644) {
      return p643 <= p644;
    },
    VYFAf: function (p645, p646) {
      return p645 === p646;
    },
    Ityze: 'gmKDb',
    mtdRR: 'ePjMJ',
    gZfEI: function (p647, p648) {
      return p647 - p648;
    },
    dfXQJ: 'eZQXF',
    dbvcz: 'IIUKG',
    WeBLD: function (p649, p650) {
      return p649 - p650;
    },
    zBbQL: function (p651, p652) {
      return p651 + p652;
    },
    SuzTM: function (p653, p654) {
      return p653 * p654;
    },
    IRwJv: function (p655, p656) {
      return p655 * p656;
    },
    rXnrI: function (p657, p658) {
      return p657 + p658;
    },
    LkLlv: function (p659, p660) {
      return p659 >= p660;
    },
    klQHc: function (p661, p662) {
      return p661 - p662;
    },
    NNMdN: function (p663, p664) {
      return p663 * p664;
    },
    JXexp: function (p665, p666) {
      return p665 + p666;
    },
    xYIHe: function (p667, p668) {
      return p667 + p668;
    },
    xOIgK: function (p669, p670) {
      return p669 + p670;
    },
    suwyt: function (p671, p672) {
      return p671 + p672;
    },
    vaFSY: function (p673, p674) {
      return p673 > p674;
    },
    lVkWb: function (p675, p676) {
      return p675 !== p676;
    },
    NCaRV: 'asOGc',
    HQSgi: function (p677, p678) {
      return p677 + p678;
    },
    xMJwp: function (p679, p680) {
      return p679 - p680;
    },
    JpPcr: function (p681, p682) {
      return p681 - p682;
    },
    JTAep: function (p683, p684) {
      return p683(p684);
    },
    TEJTv: function (p685, p686) {
      return p685 !== p686;
    },
    ihRnz: 'oMuYy',
    PZeGF: 'ViIhm',
    tfbZD: function (p687, p688) {
      return p687(p688);
    },
    yRmqO: function (p689, p690) {
      return p689 <= p690;
    },
    ugZpC: function (p691, p692) {
      return p691(p692);
    },
    RyAew: 'OVJAH',
    kVgEK: function (p693) {
      return p693();
    },
    SksEe: 'Ptpht',
    GIwBS: function (p694, p695, p696) {
      return p694(p695, p696);
    },
    oETkr: 'autoColor',
    lbStW: function (p697) {
      return p697();
    },
    elNmW: function (p698, p699) {
      return p698 === p699;
    },
    dYazj: 'HPYOA',
    ucrXC: 'нет',
    JHBem: 'Несовпадения: активно',
    xUVVU: function (p700, p701) {
      return p700 === p701;
    },
    IvnLv: 'dsSJp',
    bWXri: function (p702, p703) {
      return p702 + p703;
    },
    yWdNs: function (p704) {
      return p704();
    },
    xbRDA: function (p705, p706) {
      return p705 === p706;
    },
    ujwvL: function (p707, p708) {
      return p707(p708);
    },
    ZLQQU: 'Перезагрузка…',
    bWcae: 'Перезагрузка...',
    RlADx: function (p709) {
      return p709();
    },
    pxYPg: function (p710) {
      return p710();
    },
    XBjUS: function (p711) {
      return p711();
    },
    WdCTi: function (p712, p713) {
      return p712 !== p713;
    },
    xLaPW: function (p714) {
      return p714();
    },
    hoYYP: function (p715, p716) {
      return p715(p716);
    },
    REqdi: 'Загружено',
    pOBgj: 'Templates loaded:',
    sFTnQ: 'wLIjs',
    OkEUB: function (p717, p718) {
      return p717 !== p718;
    },
    ioYKR: '[PB Overlay] Reload failed:',
    MWNnx: function (p719, p720) {
      return p719(p720);
    },
    ZUbMP: function (p721, p722) {
      return p721(p722);
    },
    IsESv: function (p723) {
      return p723();
    },
    wlbIM: function (p724, p725) {
      return p724(p725);
    },
    VOrqV: 'uVoqX',
    ZjOIg: function (p726, p727) {
      return p726 !== p727;
    },
    ZVhCn: 'fOxZv',
    gAnqf: function (p728, p729, p730) {
      return p728(p729, p730);
    },
    dhxMl: function (p731) {
      return p731();
    },
    DcDKV: 'BqpDn',
    Evuaf: function (p732, p733) {
      return p732 + p733;
    },
    CFxZO: function (p734) {
      return p734();
    },
    pvGPD: function (p735, p736, p737) {
      return p735(p736, p737);
    },
    yXTxu: function (p738, p739) {
      return p738(p739);
    },
    YAhxA: function (p740) {
      return p740();
    },
    ZNnqn: function (p741, p742) {
      return p741 >= p742;
    },
    dhYOn: function (p743) {
      return p743();
    },
    qUnjz: function (p744, p745) {
      return p744 >= p745;
    },
    TxlUZ: function (p746) {
      return p746();
    },
    IHmPC: function (p747) {
      return p747();
    },
    CZWMo: function (p748) {
      return p748();
    },
    qrVEa: 'eaXUK',
    ysQVh: 'INPUT',
    xJzoM: function (p749, p750) {
      return p749 === p750;
    },
    WDZXv: 'TEXTAREA',
    dwFht: 'mroRB',
    uWQtE: 'KeyM',
    bevLc: function (p751, p752, p753) {
      return p751(p752, p753);
    },
    DIXOL: function (p754) {
      return p754();
    },
    VGtgB: 'KeyH',
    fIXFy: function (p755, p756) {
      return p755 !== p756;
    },
    WiiOW: 'xNUNx',
    YiHYB: 'visible',
    ZYZWn: function (p757) {
      return p757();
    },
    kSlig: function (p758, p759) {
      return p758 === p759;
    },
    dtkAE: 'BracketLeft',
    tBKtX: function (p760, p761) {
      return p760 - p761;
    },
    awMEK: function (p762, p763) {
      return p762 === p763;
    },
    CGQPj: 'BracketRight',
    vyEyE: function (p764, p765, p766) {
      return p764(p765, p766);
    },
    cbmUX: function (p767) {
      return p767();
    },
    zTAvW: function (p768) {
      return p768();
    },
    jEciO: 'KeyR',
    tiQDu: function (p769, p770) {
      return p769 !== p770;
    },
    QXVPo: 'WrqKE',
    HOkrV: 'SvdQJ',
    RQlGf: function (p771) {
      return p771();
    },
    BLgGa: 'KeyP',
    DBpXu: function (p772) {
      return p772();
    },
    YjNPx: function (p773, p774) {
      return p773 === p774;
    },
    aOPEq: function (p775) {
      return p775();
    },
    sIVZU: function (p776) {
      return p776();
    },
    IcLXK: 'KeyG',
    WLfQK: 'EZDlx',
    ziKHs: 'YLxwG',
    HNdzg: '0|1|5|3|2|4',
    AZFrC: function (p777, p778) {
      return p777 === p778;
    },
    bZgzK: 'mkLqe',
    ReGMk: function (p779) {
      return p779();
    },
    swfos: function (p780, p781) {
      return p780(p781);
    },
    kRYav: 'IdxVx',
    tGOXU: function (p782, p783) {
      return p782(p783);
    },
    CeyqU: 'JSON изменился, перезагружаю...',
    sbWSC: 'AAhXN',
    DEWil: function (p784) {
      return p784();
    },
    DbpoP: function (p785, p786) {
      return p785 === p786;
    },
    fKluv: 'Холст перепривязан',
    VAVwL: function (p787, p788) {
      return p787 !== p788;
    },
    yKvgF: '[PB Overlay] Palette refresh failed:',
    iJnMu: function (p789, p790) {
      return p789 + p790;
    },
    NhqrY: function (p791, p792) {
      return p791 * p792;
    },
    OCmWe: 'Cwfuq',
    cyweX: function (p793, p794) {
      return p793 === p794;
    },
    RZDCN: 'cyffM',
    MAhIg: function (p795, p796, p797) {
      return p795(p796, p797);
    },
    jllEo: function (p798) {
      return p798();
    },
    evsGG: function (p799, p800) {
      return p799 !== p800;
    },
    LAfQe: 'WjTZh',
    zZcyj: function (p801) {
      return p801();
    },
    AVdYS: function (p802, p803, p804) {
      return p802(p803, p804);
    },
    HUzKZ: function (p805, p806) {
      return p805(p806);
    },
    dlflY: 'Авто: нет несовпадений',
    fDSAZ: 'WghLi',
    SEIbM: 'popstate',
    dPPQB: 'eJFow',
    NYqXO: 'KWmCE',
    RfDdL: function (p807, p808) {
      return p807(p808);
    },
    SluOi: 'resize',
    LrMKm: 'keydown',
    sSCbL: 'keyup',
    pERJK: function (p809, p810) {
      return p809(p810);
    },
    HhlUU: function (p811, p812) {
      return p811(p812);
    },
    YUWxY: function (p813, p814) {
      return p813(p814);
    },
    uuQAQ: 'Destroyed',
    DwtCN: function (p815, p816) {
      return p815(p816);
    },
    cqdsa: function (p817, p818) {
      return p817(p818);
    },
    XvKnK: function (p819, p820) {
      return p819 === p820;
    },
    BwMSb: 'nIthg',
    Fcyvo: 'dmlhK',
    hsWci: function (p821, p822) {
      return p821(p822);
    },
    LMhrO: function (p823, p824, p825) {
      return p823(p824, p825);
    },
    KZFRQ: function (p826) {
      return p826();
    },
    fQjma: function (p827, p828, p829) {
      return p827(p828, p829);
    },
    vDAvN: '[PB Overlay] Init failed:',
    DwoTw: function (p830, p831) {
      return p830(p831);
    },
    wuBda: '._0DYDGUU9 {',
    kPCOu: 'pb_overlay_v11423',
    tdlRC: 'canvas._6v8P-A3V',
    JQesa: 'main canvas',
    wRokG: '[class*="palette"] [style*="background"]',
    pLSPK: '[class*="color"] [style*="background"]',
    JzEBY: function (p832) {
      return p832();
    }
  };
  const vF = (function () {
    const vO2 = {
      mLWuc: function (p833) {
        return vO.bngvV(p833);
      },
      JBCAV: function (p834) {
        return vO.bngvV(p834);
      }
    };
    let v = true;
    return function (p835, p836) {
      const vO3 = {
        pVLiM: function (p837, p838) {
          return p837 !== p838;
        },
        lqFkx: 'aikpB',
        wUdwU: function (p839, p840) {
          return p839 === p840;
        },
        oBydV: 'UuZyH'
      };
      const v2 = v ? function () {
        if (p836) {
          const v3 = p836.apply(p835, arguments);
          p836 = null;
          return v3;
        }
      } : function () {
      };
      v = false;
      return v2;
    };
  }());
  'use strict';
  try {
    vO.DwoTw(GM_addStyle, '._0DYDGUU9 {\n  position: fixed !important;\n  left: 12px !important;\n  bottom: 12px !important;\n  top: auto !important;\n  z-index: 2000000 !important;\n}');
  } catch (e) {
  }
  const v7 = 'pb_overlay_v11423';
  const vO5 = {
    overlayZIndex: 5,
    uiZIndex: 1000000,
    waitTimeoutMs: 20000,
    paletteWaitTimeoutMs: 15000,
    autoReloadCheckMs: 30000,
    canvasRebindCheckMs: 2500,
    paletteRecheckMs: 4000,
    maxMismatchPixelsPerFrame: 7000,
    mismatchMinZoom: 5,
    storageKey: 'pb_overlay_v11423:settings',
    uiDefaultX: 14,
    uiDefaultY: 100,
    transparentThreshold: 16,
    baseCanvasSelectors: [
      'canvas._6v8P-A3V',
      'main canvas',
      'canvas'
    ],
    paletteSelectors: [
      '.bUSeDsPs .UnF3CfUN',
      '[class*="palette"] [style*="background"]',
      '[class*="color"] [style*="background"]'
    ],
    defaultSettings: {}
  };
  vO5.defaultSettings.opacity = 0.65;
  vO5.defaultSettings.visible = true;
  vO5.defaultSettings.menuOpen = true;
  vO5.defaultSettings.miniMode = false;
  vO5.defaultSettings.panelX = null;
  vO5.defaultSettings.panelY = null;
  vO5.defaultSettings.crosshair = false;
  vO5.defaultSettings.debug = false;
  vO5.defaultSettings.autoReloadJson = false;
  vO5.defaultSettings.autoColor = true;
  vO5.defaultSettings.autoMode = false;
  vO5.defaultSettings.mismatchStyle = 'stroke';
  vO5.defaultSettings.mismatchRadius = 5;
  vO5.defaultSettings.mismatchColor = '#ff4646';
  vO5.defaultSettings.mismatchOpacity = 0.7;
  vO5.defaultSettings.packEnabled = {};
  vO5.defaultSettings.groupEnabled = {};
  vO5.defaultSettings.templateEnabled = {};
  const vO9 = {
    destroyed: false,
    drawScheduled: false,
    observers: [],
    reloadToken: 0,
    drawImageOriginal: null,
    urlMutationInstalled: false,
    overlayHost: null,
    overlay: null,
    overlayCtx: null,
    uiHost: null,
    uiShadow: null,
    panel: null,
    statusEl: null,
    opacityValueEl: null,
    opacitySliderEl: null,
    visibilityBtnEl: null,
    coordsEl: null,
    footerEl: null,
    progressEl: null,
    templateListEl: null,
    groupListEl: null,
    packListEl: null,
    miniDockEl: null,
    mismatchBtnEl: null,
    mismatchStyleBtnEl: null,
    crosshairCheckboxEl: null,
    debugCheckboxEl: null,
    autoReloadCheckboxEl: null,
    autoColorCheckboxEl: null,
    autoModeCheckboxEl: null,
    lastCanvasClick: null,
    uiDragging: false,
    dragOffsetX: 0,
    dragOffsetY: 0,
    baseCanvas: null,
    jsonUrls: [],
    templates: [],
    loadedTemplates: [],
    failedTemplates: [],
    packs: [],
    groupIndex: new Map(),
    palette: [],
    paletteHash: '',
    paletteSource: '',
    lastJsonFingerprint: new Map(),
    imageCache: new Map(),
    quantizedCache: new Map(),
    autoReloadTimer: null,
    canvasRebindTimer: null,
    paletteRecheckTimer: null,
    cursor: {
      screenX: 0,
      screenY: 0,
      boardX: 0,
      boardY: 0,
      inside: false
    },
    view: {
      mismatchMode: true,
      flashUntil: 0,
      peekHeld: false,
      autoPlace: false,
      autoPlaceTimer: null,
      autoModeActive: false,
      autoModeTimer: null,
      autoModePlacing: false,
      autoModeLastBoardPixel: null,
      autoModePhase: 'find',
      autoModeTarget: null,
      autoModePhaseStart: 0,
      autoModeVisibilityHandler: null
    },
    camera: {
      seen: false,
      dpr: 1,
      zoom: 1,
      offsetX: 0,
      offsetY: 0,
      rawA: 1,
      rawD: 1,
      rawE: 0,
      rawF: 0
    },
    settings: vO.CSPUg(f, vO5.defaultSettings)
  };
  function f(p841) {
    const vO10 = {
      gleij: function (p842, p843, p844) {
        return vO.zneDJ(p842, p843, p844);
      },
      zQYiB: 'crosshair',
      cInGF: function (p845) {
        return vO.bngvV(p845);
      },
      FCEAA: 'BLHiw',
      nLvRE: '(((.+)+)+)+$'
    };
    const vVF = vF(this, function () {
    });
    vO.bngvV(vVF);
    return JSON.parse(JSON.stringify(p841));
  }
  function f2(..._0x2a8949) {
    console.log('[PB Overlay]', ..._0x2a8949);
  }
  function f3(p846, p847, p848) {
    const vO11 = {
      tQyOk: function (p849) {
        return p849();
      },
      TNxlZ: function (p850) {
        return p850();
      }
    };
    return Math.max(p847, Math.min(p848, p846));
  }
  function f4(p851) {
    const vO12 = {
      Lglsj: function (p852, p853) {
        return vO.ZlbAv(p852, p853);
      }
    };
    return vO.nWqJJ(String, vO.okAPO(p851, ''));
  }
  function f5(p854) {
    const vO13 = {
      SLzYR: function (p855, p856) {
        return vO.eprIN(p855, p856);
      },
      LNKis: function (p857, p858) {
        return p857(p858);
      },
      FBRlG: 'GET',
      xPClJ: 'blob',
      LwqRU: 'find'
    };
    let v11 = 2166136261;
    for (let vLN02 = 0; vO.VgmCU(vLN02, p854.length); vLN02++) {
      v11 ^= p854.charCodeAt(vLN02);
      v11 = Math.imul(v11, 16777619);
    }
    return vO.ZlbAv(v11, 0).toString(16);
  }
  function f6(p864, p865) {
    const v12 = vO.gbmNK(f4, p864);
    if (vO.lmeaL(v12.length, p865)) {
      return v12;
    }
    const v13 = Math.max(6, Math.floor(vO.wNuPD(vO.cGMHo(p865, 3), 2)));
    return v12.slice(0, v13) + '...' + v12.slice(-v13);
  }
  function f7(p866) {
    try {
      return vO.zueBr(atob, p866);
    } catch {
      return '';
    }
  }
  function f8(p867) {
    return p867.map(f7).join('');
  }
  function f9(p868) {
    return vO.QwVus(atob, p868);
  }
  function f10(p869) {
    return p869.map(f9).join('');
  }
  function f11(p870, p871) {
    return vO.aEtoR(vO.QwVus(f10, p870), vO.zueBr(f10, p871));
  }
  function f12(p872, p873, p874) {
    return vO.KEajF(vO.zneDJ(f11, p872, p873), f10(p874));
  }
  function f13() {
    return 'https://raw.githubusercontent.com/Egorrko/mrn-check/refs/heads/master/pb_assets/config.json';
  }
  function f14() {
    return 'https://raw.githubusercontent.com/Egorrko/mrn-check/refs/heads/master/pb_assets';
  }
  function f15() {
    return '';
  }
  function f16() {
    return 'https://t.me/cocucku13';
  }
  function f17() {
    try {
      const v18 = localStorage.getItem('pb_overlay_v11423:settings');
      if (!v18) {
        return {};
      }
      return vO.tNuEB(f18, JSON.parse(v18));
    } catch {
      return vO.SoqpX(f, vO5.defaultSettings);
    }
  }
  function f18(p875) {
    return {
      ...vO.SoqpX(f, vO5.defaultSettings),
      ...vO.UCDNe(p875, {}),
      autoMode: p875?.autoMode ?? false,
      autoColor: p875?.autoColor ?? true,
      packEnabled: {
        ...vO5.defaultSettings.packEnabled || {},
        ...p875?.packEnabled || {}
      },
      groupEnabled: {
        ...vO5.defaultSettings.groupEnabled || {},
        ...p875?.groupEnabled || {}
      },
      templateEnabled: {
        ...vO5.defaultSettings.templateEnabled || {},
        ...p875?.templateEnabled || {}
      }
    };
  }
  function f19() {
    try {
      localStorage.setItem('pb_overlay_v11423:settings', JSON.stringify(vO9.settings));
    } catch (e2) {
      console.warn('[PB Overlay] Failed to persist settings:', e2);
    }
  }
  function f20(p876, p877) {
    vO9.settings[p876] = p877;
    vO.bngvV(f19);
  }
  function f21(p878, p879, p880) {
    if (!vO.VocqO(p879, p878)) {
      p878[p879] = p880;
    }
    return p878[p879];
  }
  function f22(p881) {
    if (p881.startsWith('data:')) {
      return true;
    }
    try {
      const v19 = vO.bngvV(f14);
      const v20 = new URL(p881);
      const v21 = v20.hostname;
      if (!vO.Dehwm(v20.hostname, v19) && !v20.hostname.endsWith(vO.KzaJA('.', v19))) {
        return false;
      }
      if (v20.pathname === vO.zueBr(f10, ['L3Bi'])) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  function f23() {
    const vO16 = {
      Pkmle: function (p882, p883) {
        return vO.GnKVQ(p882, p883);
      }
    };
    const vA = [];
    function f24(p884) {
      const vO17 = {
        KNzAE: function (p885, p886) {
          return vO.NNLBw(p885, p886);
        },
        RzjkE: function (p887) {
          return vO.PsowU(p887);
        }
      };
      const v22 = new URLSearchParams(p884);
      const v23 = v22.getAll('jsontemplate');
      for (const v24 of v23) {
        if (!v24) {
          continue;
        }
        const v25 = v24.trim();
        if (v25.startsWith('[')) {
          try {
            const v26 = JSON.parse(v25);
            if (Array.isArray(v26)) {
              for (const v27 of v26) {
                if (v27 && f22(vO.QwVus(String, v27))) {
                  vA.push(vO.FLbvt(String, v27));
                }
              }
              continue;
            }
          } catch {
          }
        }
        if (v25.includes(',') && !v25.startsWith('data:')) {
          for (const v28 of v25.split(',').map(p888 => p888.trim()).filter(Boolean)) {
            if (f22(v28)) {
              vA.push(v28);
            }
          }
        } else if (vO.zueBr(f22, v25)) {
          vA.push(v25);
        }
      }
    }
    vO.CSPUg(f24, window.location.search.slice(1));
    if (window.location.hash) {
      vO.BtQev(f24, window.location.hash.slice(1));
    }
    if (vO.JMOPm(vA.length, 0)) {
      vA.push(vO.obvuu(f13));
    }
    return [...new Set(vA)];
  }
  function f25(p889, p890 = 20000) {
    if (p889.startsWith('data:')) {
      return Promise.resolve(vO.IWrWN(f27, p889));
    }
    return new Promise((p891, p892) => {
      const vO18 = {
        iISLu: function (p893, p894) {
          return p893 !== p894;
        },
        RmfeH: 'eCGRQ',
        RUCGB: 'GsVzs',
        Zzylu: function (p895, p896) {
          return vO.jkTDz(p895, p896);
        },
        ZzihH: function (p897, p898) {
          return vO.csgmh(p897, p898);
        },
        JclOC: function (p899, p900) {
          return vO.hKHcA(p899, p900);
        },
        tVsCC: 'EHtln',
        LpAZv: function (p901, p902) {
          return p901(p902);
        },
        IXkXM: function (p903, p904) {
          return p903 === p904;
        },
        sWIJK: 'zulEb',
        rTwIr: function (p905, p906) {
          return vO.QwVus(p905, p906);
        }
      };
      vO.IwAUE(GM_xmlhttpRequest, {
        method: 'GET',
        url: p889,
        timeout: p890,
        headers: {
          'Cache-Control': 'no-cache, no-store',
          Pragma: 'no-cache'
        },
        onload: p907 => {
          if (vO18.Zzylu(p907.status, 200) && vO18.ZzihH(p907.status, 300)) {
            vO18.LpAZv(p891, p907.responseText);
          } else {
            vO18.rTwIr(p892, new Error('HTTP ' + p907.status + ' при загрузке ресурса'));
          }
        },
        ontimeout: () => p892(new Error('Превышено время ожидания')),
        onerror: () => p892(new Error('Ошибка сети'))
      });
    });
  }
  function f26(p908, p909 = 30000) {
    const vO20 = {
      IVacN: function (p910, p911) {
        return vO.QwVus(p910, p911);
      },
      ZzjiJ: '  position: fixed !important;',
      WqwnC: '  left: 12px !important;',
      XFAHN: '  top: auto !important;',
      WqTPf: '  z-index: 2000000 !important;',
      uRcqv: function (p912, p913) {
        return vO.Moofl(p912, p913);
      },
      APfJt: function (p914, p915) {
        return vO.fnUJD(p914, p915);
      },
      AFpBH: 'GET',
      HVoKL: 'blob'
    };
    if (p908.startsWith('data:')) {
      return Promise.resolve(vO.piKBH(f28, p908));
    }
    return new Promise((p916, p917) => {
      const vO21 = {
        PhqYW: function (p918, p919) {
          return vO20.uRcqv(p918, p919);
        }
      };
      vO20.APfJt(GM_xmlhttpRequest, {
        method: 'GET',
        url: p908,
        responseType: 'blob',
        timeout: p909,
        onload: p920 => {
          if (vO21.PhqYW(p920.status, 200) && p920.status < 300) {
            p916(p920.response);
          } else {
            p917(new Error('HTTP ' + p920.status + ' при загрузке ресурса'));
          }
        },
        ontimeout: () => p917(new Error('Превышено время ожидания')),
        onerror: () => p917(new Error('Ошибка сети'))
      });
    });
  }
  function f27(p921) {
    const v29 = p921.match(/^data:([^;,]+)?(?:;charset=[^;,]+)?(;base64)?,(.*)$/i);
    if (!v29) {
      throw new Error('Invalid data URI');
    }
    const v30 = !!v29[2];
    const v31 = v29[3] || '';
    if (v30) {
      return vO.UBtWs(atob, v31);
    } else {
      return decodeURIComponent(v31);
    }
  }
  function f28(p922) {
    const v32 = p922.match(/^data:([^;,]+)?(?:;charset=[^;,]+)?(;base64)?,(.*)$/i);
    if (!v32) {
      throw new Error('Invalid data URI');
    }
    const v33 = v32[1] || 'application/octet-stream';
    const v34 = !!v32[2];
    const v35 = v32[3] || '';
    const v36 = v34 ? Uint8Array.from(atob(v35), p923 => p923.charCodeAt(0)) : Uint8Array.from(vO.nWqJJ(decodeURIComponent, v35), p924 => p924.charCodeAt(0));
    const vO22 = { type: v33 };
    return new Blob([v36], vO22);
  }
  async function f29(p925) {
    const vO23 = {
      jrXEB: function (p926) {
        return vO.xKQfd(p926);
      }
    };
    if (vO9.imageCache.has(p925)) {
      return vO9.imageCache.get(p925);
    }
    const vF2 = ((async () => {
      const vO24 = {
        IxDYy: function (p927, p928) {
          return vO.JLwns(p927, p928);
        },
        XdOmh: function (p929, p930) {
          return vO.hXywL(p929, p930);
        },
        cBwum: function (p931, p932) {
          return vO.uvAFe(p931, p932);
        }
      };
      const v37 = await vO.yFwRz(f26, p925);
      const v38 = URL.createObjectURL(v37);
      try {
        const v39 = new Image();
        v39.decoding = 'async';
        v39.crossOrigin = 'anonymous';
        await new Promise((p933, p934) => {
          v39.onload = () => p933();
          v39.onerror = () => p934(new Error('Failed to decode image: ' + p925));
          v39.src = v38;
        });
        return v39;
      } finally {
        setTimeout(() => URL.revokeObjectURL(v38), 30000);
      }
    })());
    vO9.imageCache.set(p925, vF2);
    try {
      return await vF2;
    } catch (e3) {
      vO9.imageCache.delete(p925);
      throw e3;
    }
  }
  function f30(p935) {
    if (!p935) {
      return null;
    }
    const v40 = p935.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/i);
    if (!v40) {
      return null;
    }
    return [
      vO.kjLPN(Number, v40[1]),
      vO.kjLPN(Number, v40[2]),
      Number(v40[3])
    ];
  }
  function f31(p936) {
    return p936[0] + ',' + p936[1] + ',' + p936[2];
  }
  function f32(p937) {
    return vO.gbmNK(f5, p937.map(p938 => f31(p938.rgb)).join('|'));
  }
  function f33(p939) {
    const v41 = new Set();
    const vA2 = [];
    for (const v42 of p939) {
      const v43 = vO.TgTlH(f31, v42.rgb);
      if (v41.has(v43)) {
        continue;
      }
      v41.add(v43);
      vA2.push(v42);
    }
    return vA2;
  }
  function f34() {
    const vO25 = {
      dbdFr: function (p940, p941) {
        return vO.QhvCY(p940, p941);
      }
    };
    const vA3 = [];
    for (const v45 of [
        '.bUSeDsPs .UnF3CfUN',
        '[class*="palette"] [style*="background"]',
        '[class*="color"] [style*="background"]'
      ]) {
      const vA4 = [...document.querySelectorAll(v45)];
      for (const v46 of vA4) {
        const vF30 = f30(vO.IrAou(getComputedStyle, v46).backgroundColor);
        if (!vF30) {
          continue;
        }
        const vO26 = {
          rgb: vF30,
          css: 'rgb(' + vF30[0] + ', ' + vF30[1] + ', ' + vF30[2] + ')'
        };
        vA3.push(vO26);
      }
      if (vO.jkTDz(vA3.length, 8)) {
        return vO.hXywL(f33, vA3);
      }
    }
    return vO.uvAFe(f33, vA3);
  }
  function f35() {
    const vVO27 = {
      TNmYU: 'aHR0cHM6Ly8=',
      audjd: 'cnUu',
      yLZlm: 'Y29t',
      ycMcO: 'L3BpeGVsYg=='
    };
    const vA5 = [];
    const vA6 = [...document.querySelectorAll('button, div, span')];
    for (const v47 of vA6) {
      const v48 = v47.getBoundingClientRect();
      if (vO.JLwns(v48.width, 8) || vO.lAWDc(v48.height, 8) || v48.width > 90 || vO.XtbJw(v48.height, 90)) {
        continue;
      }
      const v49 = vO.IWrWN(getComputedStyle, v47);
      if (!v49 || vO.NNLBw(v49.display, 'none') || vO.dLuTU(v49.visibility, 'hidden')) {
        continue;
      }
      const v50 = vO.IUKaz(f30, v49.backgroundColor);
      if (!v50) {
        continue;
      }
      const v51 = vO.JLwns(Math.abs(vO.PMPZE(v50[0], v50[1])), 3) && vO.lAWDc(Math.abs(vO.QXytL(v50[1], v50[2])), 3);
      if (v51) {
        continue;
      }
      const vO28 = {
        rgb: v50,
        css: 'rgb(' + v50[0] + ', ' + v50[1] + ', ' + v50[2] + ')'
      };
      vA5.push(vO28);
      if (vO.XtbJw(vA5.length, 80)) {
        break;
      }
    }
    return f33(vA5);
  }
  function f36() {
    let vF34 = f34();
    if (vO.JRGFg(vF34.length, 8)) {
      vO9.paletteSource = 'known-selectors';
      return vF34;
    }
    vF34 = f35();
    if (vO.Moofl(vF34.length, 8)) {
      vO9.paletteSource = 'fallback-scan';
      return vF34;
    }
    return f33([
      ...f34(),
      ...f35()
    ]);
  }
  function f37(p942 = 15000) {
    const vO29 = {
      MsRHN: function (p943, p944) {
        return vO.JMOPm(p943, p944);
      },
      ZuLTm: function (p945) {
        return vO.GddTg(p945);
      },
      ufzBp: function (p946, p947) {
        return vO.SoqpX(p946, p947);
      },
      XABMP: function (p948, p949) {
        return vO.CBkcr(p948, p949);
      },
      KcdsH: 'OKpZp',
      vYtGs: function (p950) {
        return vO.GddTg(p950);
      },
      jgAij: function (p951, p952) {
        return p951(p952);
      }
    };
    return new Promise((p953, p954) => {
      const vO30 = {
        HDHwc: function (p955, p956, p957) {
          return vO.zneDJ(p955, p956, p957);
        },
        ooxJv: 'crosshair',
        cBArC: function (p958) {
          return vO.xKQfd(p958);
        },
        YLnWu: function (p959, p960) {
          return vO.SoqpX(p959, p960);
        },
        wcUyr: function (p961, p962) {
          return vO.hSsHo(p961, p962);
        },
        yddpS: 'Palette not found in DOM',
        exFKw: function (p963, p964) {
          return p963 === p964;
        },
        EvvRr: 'qetui'
      };
      const v52 = Date.now();
      let v53 = false;
      const vF3 = p965 => {
        if (v53) {
          return;
        }
        v53 = true;
        vO29.ZuLTm(f38);
        vO29.ufzBp(p953, p965);
      };
      const vF4 = p966 => {
        if (v53) {
          return;
        }
        v53 = true;
        vO29.vYtGs(f38);
        vO29.jgAij(p954, p966);
      };
      const vF5 = () => {
        if (vO9.destroyed) {
          return;
        }
        const v54 = vO30.cBArC(f36);
        if (v54.length) {
          vO30.YLnWu(vF3, v54);
          return;
        }
        if (vO30.wcUyr(Date.now() - v52, p942)) {
          vF4(new Error('Palette not found in DOM'));
        }
      };
      const v55 = new MutationObserver(vF5);
      v55.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
      const vSetInterval = setInterval(vF5, 250);
      function f38() {
        const vO32 = {
          OlHgK: function (p967, p968) {
            return vO30.YLnWu(p967, p968);
          }
        };
        v55.disconnect();
        vO30.YLnWu(clearInterval, vSetInterval);
      }
      const vO33 = { disconnect: f38 };
      vO9.observers.push(vO33);
      vO.obvuu(vF5);
    });
  }
  function f39() {
    const vO34 = {
      SZmlD: function (p969, p970) {
        return p969 > p970;
      }
    };
    return [...document.querySelectorAll('canvas')].filter(p971 => {
      const v56 = p971.getBoundingClientRect();
      return vO34.SZmlD(v56.width, 100) && vO34.SZmlD(v56.height, 100);
    });
  }
  function f40() {
    for (const v57 of [
        'canvas._6v8P-A3V',
        'main canvas',
        'canvas'
      ]) {
      const v58 = [...document.querySelectorAll(v57)].filter(p972 => p972 instanceof HTMLCanvasElement);
      if (v58.length) {
        v58.sort((p973, p974) => {
          const vO35 = { MGvkf: '(((.+)+)+)+$' };
          const v59 = p973.getBoundingClientRect();
          const v60 = p974.getBoundingClientRect();
          return vO.eMUCw(v60.width, v60.height) - vO.eMUCw(v59.width, v59.height);
        });
        return v58[0];
      }
    }
    const v61 = vO.xKQfd(f39);
    if (!v61.length) {
      return null;
    }
    v61.sort((p975, p976) => {
      const v62 = p975.getBoundingClientRect();
      const v63 = p976.getBoundingClientRect();
      return v63.width * v63.height - vO.eMUCw(v62.width, v62.height);
    });
    return v61[0];
  }
  function f41(p977 = 20000) {
    const vO36 = {
      fvYuV: function (p978) {
        return vO.ttLlF(p978);
      },
      OxIjK: function (p979, p980) {
        return p979(p980);
      },
      kbafl: function (p981, p982) {
        return vO.gdpDR(p981, p982);
      },
      eoZEg: 'jzGTH',
      oJmzT: 'ArIaZ',
      fbIGP: function (p983, p984) {
        return vO.eprIN(p983, p984);
      }
    };
    return new Promise((p985, p986) => {
      const vO37 = {
        uQQQI: function (p987) {
          return vO.xKQfd(p987);
        },
        uThDb: function (p988, p989) {
          return p988 - p989;
        },
        TeDdd: function (p990, p991) {
          return vO.bULOO(p990, p991);
        },
        hVsXI: function (p992, p993) {
          return p992 + p993;
        },
        icxAv: function (p994, p995) {
          return vO.DnyVT(p994, p995);
        },
        FoTlS: function (p996, p997) {
          return vO.eMUCw(p996, p997);
        },
        aicva: function (p998, p999) {
          return vO.eMUCw(p998, p999);
        },
        UVtaR: function (p1000, p1001) {
          return p1000 < p1001;
        },
        JJXJi: function (p1002, p1003) {
          return vO.nWqJJ(p1002, p1003);
        },
        syVnd: 'data:',
        WdCGp: function (p1004, p1005) {
          return vO.nrrto(p1004, p1005);
        },
        ayxXT: function (p1006, p1007) {
          return vO.hKHcA(p1006, p1007);
        },
        SZvFi: 'JSON must be an array or an object with templates[]',
        NkxaC: 'Авто: нет несовпадений',
        lEDqt: function (p1008, p1009) {
          return vO.KEajF(p1008, p1009);
        },
        NKAMS: function (p1010, p1011) {
          return vO.eMUCw(p1010, p1011);
        },
        IVaGx: '[AUTO] target:',
        puVPZ: function (p1012, p1013, p1014, p1015) {
          return p1012(p1013, p1014, p1015);
        },
        bsggI: 'zgkHW',
        wPfSQ: 'iHFIe',
        fNdeR: 'ZOPjy',
        GREUv: function (p1016, p1017) {
          return p1016 !== p1017;
        },
        bXDkU: 'ysNzK',
        mtcyn: function (p1018, p1019) {
          return vO.VbvoA(p1018, p1019);
        },
        FqTlS: 'Base canvas not found'
      };
      const v64 = Date.now();
      let v65 = false;
      const vF6 = p1020 => {
        if (v65) {
          return;
        }
        v65 = true;
        vO36.fvYuV(f42);
        vO36.OxIjK(p985, p1020);
      };
      const vF7 = p1021 => {
        if (v65) {
          return;
        }
        v65 = true;
        vO36.fvYuV(f42);
        p986(p1021);
      };
      const vF8 = () => {
        const vO38 = {
          jwclX: function (p1022, p1023) {
            return vO37.JJXJi(p1022, p1023);
          },
          OZfKV: 'data:',
          MIuvJ: function (p1024, p1025) {
            return vO37.WdCGp(p1024, p1025);
          },
          nMIvC: function (p1026, p1027) {
            return vO37.ayxXT(p1026, p1027);
          },
          lhjYf: 'JSON must be an array or an object with templates[]',
          jCQmI: 'Авто: нет несовпадений',
          zZQHF: function (p1028, p1029) {
            return vO37.FoTlS(p1028, p1029);
          },
          bGJdh: function (p1030, p1031) {
            return vO37.lEDqt(p1030, p1031);
          },
          FRvbA: function (p1032, p1033) {
            return vO37.NKAMS(p1032, p1033);
          },
          Gcqnh: function (p1034, p1035) {
            return vO37.NKAMS(p1034, p1035);
          },
          GSCIX: '[AUTO] target:',
          jRbuA: function (p1036, p1037) {
            return vO37.JJXJi(p1036, p1037);
          },
          TDSLg: function (p1038, p1039, p1040, p1041) {
            return vO37.puVPZ(p1038, p1039, p1040, p1041);
          }
        };
        if (vO9.destroyed) {
          return;
        }
        const v70 = vO37.uQQQI(f40);
        if (v70) {
          vO37.JJXJi(vF6, v70);
          return;
        }
        if (Date.now() - v64 > p977) {
          vO37.mtcyn(vF7, new Error('Base canvas not found'));
        }
      };
      const v79 = new MutationObserver(vF8);
      v79.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true
      });
      const v80 = vO.zneDJ(setInterval, vF8, 250);
      function f42() {
        v79.disconnect();
        vO36.fbIGP(clearInterval, v80);
      }
      const vO42 = { disconnect: f42 };
      vO9.observers.push(vO42);
      vO.Ptfid(vF8);
    });
  }
  function f43(p1044, p1045, p1046, p1047) {
    let v81 = p1047[0];
    let vInfinity = Infinity;
    for (const v82 of p1047) {
      const v83 = vO.uHRVT(p1044, v82.rgb[0]);
      const v84 = vO.bULOO(p1045, v82.rgb[1]);
      const v85 = vO.dWFUJ(p1046, v82.rgb[2]);
      const v86 = vO.aEtoR(vO.GnKVQ(vO.rsflt(vO.JTtqS(v83, v83), 0.299), vO.RZjDe(vO.JTtqS(v84, v84), 0.587)), vO.rsflt(vO.QGkSp(v85, v85), 0.114));
      if (vO.BbIUy(v86, vInfinity)) {
        vInfinity = v86;
        v81 = v82;
      }
    }
    return v81;
  }
  function f44(p1048, p1049, p1050) {
    return [
      p1049.src,
      p1048.naturalWidth,
      p1048.naturalHeight,
      vO.TZOOx(f32, p1050),
      16
    ].join('|');
  }
  function f45(p1051, p1052) {
    const v88 = document.createElement('canvas');
    v88.width = p1051.naturalWidth;
    v88.height = p1051.naturalHeight;
    const v89 = v88.getContext('2d', { willReadFrequently: true });
    v89.imageSmoothingEnabled = false;
    v89.drawImage(p1051, 0, 0);
    const v90 = v89.getImageData(0, 0, v88.width, v88.height);
    const v91 = v90.data;
    const v92 = new Map();
    for (let vLN03 = 0; vO.iejPB(vLN03, v91.length); vLN03 += 4) {
      const v93 = v91[vO.OINXw(vLN03, 3)];
      if (v93 < 16) {
        v91[vO.SxZLP(vLN03, 3)] = 0;
        continue;
      }
      const v94 = vO.VDJWQ(vO.VDJWQ(vO.yeHjJ(v91[vLN03], 16), vO.yeHjJ(v91[vO.KEajF(vLN03, 1)], 8)), v91[vO.SxZLP(vLN03, 2)]);
      let v95 = v92.get(v94);
      if (!v95) {
        v95 = f43(v91[vLN03], v91[vLN03 + 1], v91[vO.KEajF(vLN03, 2)], p1052);
        v92.set(v94, v95);
      }
      v91[vLN03] = v95.rgb[0];
      v91[vO.aEtoR(vLN03, 1)] = v95.rgb[1];
      v91[vO.MkNky(vLN03, 2)] = v95.rgb[2];
      v91[vO.ibFxn(vLN03, 3)] = 255;
    }
    v89.putImageData(v90, 0, 0);
    const vO44 = {
      canvas: v88,
      width: v88.width,
      height: v88.height,
      imageData: v90
    };
    return vO44;
  }
  function f46(p1053, p1054, p1055, p1056) {
    const vO45 = {
      bVdhY: function (p1057, p1058) {
        return vO.nWqJJ(p1057, p1058);
      },
      FhpVJ: 'default',
      IOlic: function (p1059, p1060) {
        return vO.rndAV(p1059, p1060);
      },
      OVDvZ: function (p1061, p1062) {
        return vO.gdpDR(p1061, p1062);
      },
      LKWkW: function (p1063, p1064) {
        return vO.dZDxe(p1063, p1064);
      }
    };
    const v96 = Array.isArray(p1053) ? p1053 : Array.isArray(p1053?.templates) ? p1053.templates : null;
    if (!v96) {
      throw new Error('JSON must be an array or an object with templates[]');
    }
    const v97 = p1053?.defaults || {};
    const v98 = p1053?.meta || {};
    return v96.map((p1066, p1067) => {
      const v99 = p1066.image || p1066.url || p1066.src;
      const v100 = vO45.bVdhY(Number, p1066.x);
      const v101 = vO45.bVdhY(Number, p1066.y);
      if (!v99 || !Number.isFinite(v100) || !Number.isFinite(v101)) {
        throw new Error('Invalid template at index ' + p1067 + ': needs image/url/src and numeric x,y');
      }
      return {
        id: p1055 + ':' + p1067,
        localId: p1067,
        packId: p1055,
        packName: p1066.packName || v98.name || p1056 || 'pack-' + p1055,
        src: v99.startsWith('data:') ? v99 : new URL(v99, p1054).href,
        x: v100,
        y: v101,
        name: p1066.name || 'template-' + (p1067 + 1),
        group: p1066.group || v97.group || 'default',
        z: Number.isFinite(vO45.bVdhY(Number, p1066.z)) ? Number(p1066.z) : 0,
        quantize: vO45.IOlic(p1066.quantize, false),
        enabled: vO45.OVDvZ(p1066.enabled, false),
        hiddenByDefault: vO45.LKWkW(p1066.hiddenByDefault, true)
      };
    });
  }
  async function f47() {
    const vO46 = {
      jtiqI: function (p1068, p1069) {
        return vO.rPFKK(p1068, p1069);
      },
      sJlrk: function (p1070, p1071, p1072) {
        return vO.zneDJ(p1070, p1071, p1072);
      },
      eQZBQ: function (p1073, p1074) {
        return p1073(p1074);
      }
    };
    if (!vO9.jsonUrls.length) {
      throw new Error('jsontemplate param not found in URL');
    }
    const vA7 = [];
    const vA8 = [];
    for (let vLN04 = 0; vO.VgmCU(vLN04, vO9.jsonUrls.length); vLN04++) {
      const v102 = vO9.jsonUrls[vLN04];
      const v103 = vO9.jsonUrls[vLN04].startsWith('data:') ? vO9.jsonUrls[vLN04] : '' + vO9.jsonUrls[vLN04] + (vO9.jsonUrls[vLN04].includes('?') ? '&' : '?') + 'v=' + Date.now();
      const v104 = await f25(v103);
      const v105 = vO.QhvCY(f5, v104);
      vO9.lastJsonFingerprint.set(vO9.jsonUrls[vLN04], v105);
      const v106 = JSON.parse(v104);
      const v107 = v106?.meta?.name || v106?.name || 'pack-' + (vLN04 + 1);
      const v108 = 'pack-' + vO.aEtoR(vLN04, 1);
      const vO47 = {
        id: v108,
        name: v107,
        url: vO9.jsonUrls[vLN04]
      };
      vA8.push(vO47);
      const v109 = vO.mlBNR(f46, v106, vO9.jsonUrls[vLN04], v108, v107);
      vA7.push(...v109);
    }
    vO9.packs = vA8;
    vO9.templates = vA7;
    vO.ttLlF(f48);
  }
  function f48() {
    const vO48 = {
      iwvHP: function (p1075, p1076) {
        return vO.jnpPn(p1075, p1076);
      },
      npMWQ: function (p1077, p1078) {
        return vO.RqaKR(p1077, p1078);
      },
      KJbBP: function (p1079, p1080) {
        return vO.piKBH(p1079, p1080);
      },
      ljULj: function (p1081, p1082) {
        return p1081(p1082);
      },
      QhfDZ: function (p1083, p1084) {
        return vO.eprIN(p1083, p1084);
      },
      MLosd: 'no-cache, no-store',
      TumGj: 'no-cache'
    };
    vO9.groupIndex = new Map();
    // Гарантируем, что объекты настроек определены
    vO9.settings.packEnabled = vO9.settings.packEnabled || {};
    vO9.settings.groupEnabled = vO9.settings.groupEnabled || {};
    vO9.settings.templateEnabled = vO9.settings.templateEnabled || {};
    for (const v110 of vO9.templates) {
      if (!vO9.groupIndex.has(v110.group)) {
        vO9.groupIndex.set(v110.group, []);
      }
      vO9.groupIndex.get(v110.group).push(v110);
      vO.WgHpE(f21, vO9.settings.packEnabled, v110.packId, true);
      vO.WgHpE(f21, vO9.settings.groupEnabled, v110.group, true);
      vO.WgHpE(f21, vO9.settings.templateEnabled, v110.id, !v110.hiddenByDefault && vO.YwdAF(v110.enabled, false));
    }
    f19();
  }
  function f49(p1086) {
    return vO.YwdAF(vO9.settings.packEnabled?.[p1086], false);
  }
  function f50(p1087) {
    return vO.VJbnM(vO9.settings.groupEnabled?.[p1087], false);
  }
  function f51(p1088) {
    return vO.gdpDR(vO9.settings.templateEnabled?.[p1088], false);
  }
  async function f52(p1089) {
    const vO49 = {
      EBFFq: function (p1090, p1091) {
        return vO.wOxbX(p1090, p1091);
      },
      CPrMw: 'aHR0cHM6Ly8=',
      knAxX: 'dC5tZS8=',
      LFvlT: 'Y29jdWNrdTEz',
      fkjrs: function (p1092, p1093, p1094) {
        return vO.zkpBl(p1092, p1093, p1094);
      },
      AXZxy: function (p1095) {
        return p1095();
      }
    };
    vO9.loadedTemplates = [];
    vO9.failedTemplates = [];
    vO.QvseX(f91, 'Подготовка...');
    f62();
    vO.bngvV(f63);
    vO.Ptfid(f64);
    const v111 = [...vO9.templates].sort((p1096, p1097) => p1096.z - p1097.z || p1096.localId - p1097.localId);
    let vLN05 = 0;
    for (const v112 of v111) {
      if (vO.nrrto(p1089, vO9.reloadToken)) {
        return;
      }
      try {
        const v113 = await vO.qWWPg(f29, v112.src);
        if (vO.Ekrij(p1089, vO9.reloadToken)) {
          return;
        }
        let vV113 = v113;
        let v114 = v113.naturalWidth;
        let v115 = v113.naturalHeight;
        let v116 = null;
        let vLS = '';
        if (v114 * v115 > 1000000) {
          vLS = 'large-image';
        }
        if (vO.gdpDR(v112.quantize, false) && vO9.palette.length) {
          const v117 = vO.WgHpE(f44, v113, v112, vO9.palette);
          let v118 = vO9.quantizedCache.get(v117);
          if (!v118) {
            v118 = vO.zneDJ(f45, v113, vO9.palette);
            vO9.quantizedCache.set(v117, v118);
          }
          vV113 = v118.canvas;
          v114 = v118.width;
          v115 = v118.height;
          v116 = v118.imageData;
        }
        const vO50 = { ...v112 };
        vO50.img = v113;
        vO50.renderSource = vV113;
        vO50.width = v114;
        vO50.height = v115;
        vO50.imageData = v116;
        vO50.warning = vLS;
        vO9.loadedTemplates.push(vO50);
        vLN05++;
        vO.gbmNK(f53, vLN05 + '/' + v111.length + ' шаблонов загружено');
        f64();
      } catch (e4) {
        console.error('[PB Overlay] Failed to load template "' + v112.name + '"', e4);
        const vO51 = {
          tpl: v112,
          error: e4
        };
        vO9.failedTemplates.push(vO51);
      }
    }
    f62();
    vO.vQqww(f63);
    vO.ttLlF(f64);
  }
  function f53(p1098) {
    if (vO9.progressEl) {
      vO9.progressEl.textContent = p1098 || '';
    }
  }
  function f54() {
    const vO52 = { LSivt: 'pb-mismatch' };
    const v121 = document.createElement('div');
    v121.style.position = 'absolute';
    v121.style.left = '0';
    v121.style.top = '0';
    v121.style.width = '100vw';
    v121.style.height = '100vh';
    v121.style.pointerEvents = 'none';
    v121.style.zIndex = '5';
    v121.style.background = 'transparent';
    const v122 = document.createElement('canvas');
    v122.width = window.innerWidth;
    v122.height = window.innerHeight;
    v122.style.width = '100vw';
    v122.style.height = '100vh';
    v122.style.pointerEvents = 'none';
    v122.style.imageRendering = 'pixelated';
    v122.style.background = 'transparent';
    v122.style.display = 'block';
    v121.appendChild(v122);
    const v123 = document.querySelector('.nUr4Bihl');
    if (v123) {
      v123.insertBefore(v121, v123.firstChild);
    } else {
      document.body.appendChild(v121);
    }
    const v124 = v122.getContext('2d');
    v124.imageSmoothingEnabled = false;
    vO9.overlayHost = v121;
    vO9.overlay = v122;
    vO9.overlayCtx = v124;
  }
  function f55() {
    if (!vO9.uiHost) {
      return;
    }
    const v125 = Number.isFinite(vO9.settings.panelX) ? vO9.settings.panelX : 14;
    const v126 = Number.isFinite(vO9.settings.panelY) ? vO9.settings.panelY : 100;
    vO9.uiHost.style.left = v125 + 'px';
    vO9.uiHost.style.top = v126 + 'px';
    vO9.uiHost.style.right = 'auto';
  }
  function f56() {
    const vO53 = {
      daiLC: function (p1100, p1101) {
        return p1100 * p1101;
      },
      cpzXq: function (p1102, p1103) {
        return vO.hUqOZ(p1102, p1103);
      },
      JooFu: function (p1104, p1105) {
        return p1104 >= p1105;
      },
      lUsHk: function (p1106) {
        return vO.Ptfid(p1106);
      },
      XSiQa: '_blank',
      rYrgb: 'noopener,noreferrer',
      sHVbS: function (p1107, p1108) {
        return vO.Dehwm(p1107, p1108);
      },
      UvXSH: 'wYoQn',
      soykd: '[PB Overlay] Failed to open author link:',
      gLnXE: function (p1109, p1110) {
        return vO.kaptj(p1109, p1110);
      },
      MELAT: 'dUIXP',
      mYUGC: 'opacity',
      pUkZo: function (p1111, p1112, p1113, p1114) {
        return vO.FOcNX(p1111, p1112, p1113, p1114);
      },
      ZPEwN: function (p1115, p1116) {
        return vO.iIgBJ(p1115, p1116);
      },
      eoXaJ: function (p1117, p1118) {
        return p1117(p1118);
      },
      yhSBz: function (p1119) {
        return p1119();
      },
      SRFzc: 'nVsZD',
      aRwgA: function (p1120) {
        return p1120();
      },
      eZhFb: function (p1121) {
        return p1121();
      },
      AoOGG: 'debug',
      WhiGM: 'label',
      Krhon: 'pb-item',
      vpyxU: 'input',
      vKhRc: 'change',
      LIEnA: 'span',
      PZUum: 'pb-group-count',
      xwyqp: function (p1122) {
        return vO.phSZc(p1122);
      },
      kvcJg: 'kjAVQ',
      VgYgb: 'vSgtB',
      QWUGZ: function (p1123, p1124, p1125) {
        return vO.QihJI(p1123, p1124, p1125);
      },
      ELAIR: 'autoReloadJson',
      dDSIb: function (p1126) {
        return vO.bngvV(p1126);
      },
      qoufc: function (p1127, p1128, p1129) {
        return vO.QihJI(p1127, p1128, p1129);
      },
      izuFi: 'pb-mismatch-style',
      vaGjX: 'fill',
      mOZmR: 'stroke',
      orkmX: function (p1130) {
        return vO.xKQfd(p1130);
      },
      LPVpo: function (p1131) {
        return vO.PsowU(p1131);
      },
      rgFUA: function (p1132, p1133, p1134) {
        return vO.seXmP(p1132, p1133, p1134);
      },
      pwNMF: 'mismatchStyle',
      eadWQ: function (p1135) {
        return vO.IqYWx(p1135);
      },
      DgvRX: function (p1136) {
        return vO.AvKJy(p1136);
      },
      bfdsp: 'mismatchRadius',
      BToxp: 'pb-mismatch-radius',
      pXSjE: function (p1137) {
        return vO.bngvV(p1137);
      },
      IkeQV: function (p1138, p1139, p1140) {
        return vO.KRXIw(p1138, p1139, p1140);
      },
      EJhac: 'miniMode',
      nStjV: function (p1141, p1142) {
        return vO.MLMeS(p1141, p1142);
      },
      dwalr: function (p1143) {
        return vO.wIkmj(p1143);
      },
      rkkSP: 'panelX',
      gHOmw: 'panelY',
      QjmLm: 'BUTTON',
      JPMUB: function (p1144, p1145) {
        return vO.jLVKg(p1144, p1145);
      }
    };
    const v127 = document.createElement('div');
    v127.style.position = 'fixed';
    v127.style.zIndex = '1000000';
    v127.style.pointerEvents = 'auto';
    const vO54 = { mode: 'closed' };
    const v128 = v127.attachShadow(vO54);
    vO9.uiHost = v127;
    vO9.uiShadow = v128;
    const v129 = document.createElement('div');
    v129.innerHTML = '\n      <style>\n        :host, * { box-sizing: border-box; }\n        .pb-wrap {\n          width: 320px;\n          color: #fff;\n          font: 12px/1.45 Inter, system-ui, sans-serif;\n          user-select: none;\n        }\n        .pb-panel {\n          background: rgba(15, 15, 18, 0.94);\n          border: 1px solid rgba(255,255,255,0.14);\n          border-radius: 12px;\n          box-shadow: 0 10px 30px rgba(0,0,0,0.35);\n          backdrop-filter: blur(8px);\n          overflow: hidden;\n        }\n        .pb-panel.collapsed .pb-content { display: none; }\n        .pb-panel.hidden-full { display: none; }\n        .pb-header {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 8px;\n          padding: 10px 12px;\n          border-bottom: 1px solid rgba(255,255,255,0.08);\n          cursor: move;\n        }\n        .pb-title {\n          display: flex;\n          flex-direction: column;\n          gap: 1px;\n          min-width: 0;\n        }\n        .pb-title b { font-weight: 700; }\n        .pb-title small {\n          opacity: 0.68;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          max-width: 190px;\n        }\n        .pb-header-buttons, .pb-inline-buttons {\n          display: flex;\n          gap: 6px;\n          align-items: center;\n          flex-wrap: wrap;\n        }\n        button, input[type="text"] {\n          appearance: none;\n          background: rgba(255,255,255,0.08);\n          color: #fff;\n          border: 1px solid rgba(255,255,255,0.10);\n          border-radius: 8px;\n          padding: 6px 8px;\n          font: inherit;\n        }\n        button { cursor: pointer; }\n        button:hover { background: rgba(255,255,255,0.14); }\n        button.pb-danger:hover { background: rgba(255,80,80,0.18); }\n        input[type="range"] { width: 100%; margin-top: 6px; }\n        .pb-content { padding: 10px 12px 12px; }\n        .pb-row { margin-top: 10px; }\n        .pb-status {\n          white-space: pre-line;\n          opacity: 0.9;\n          min-height: 90px;\n        }\n        .pb-list {\n          display: grid;\n          gap: 6px;\n          max-height: 140px;\n          overflow: auto;\n          padding-right: 2px;\n        }\n        .pb-item {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n        .pb-item input[type="checkbox"] { margin: 0; }\n        .pb-item-text {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          flex: 1 1 auto;\n        }\n        .pb-toggle-wrap {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 8px;\n          padding: 4px 0;\n        }\n        .pb-toggle-label { flex: 1 1 auto; font-size: 12px; }\n        .pb-toggle {\n          position: relative;\n          display: inline-block;\n          width: 34px;\n          height: 18px;\n          flex-shrink: 0;\n        }\n        .pb-toggle input { opacity: 0; width: 0; height: 0; }\n        .pb-toggle-slider {\n          position: absolute;\n          inset: 0;\n          background: rgba(255,255,255,0.15);\n          border-radius: 18px;\n          cursor: pointer;\n          transition: background 0.2s;\n        }\n        .pb-toggle-slider:before {\n          content: \'\';\n          position: absolute;\n          width: 12px;\n          height: 12px;\n          left: 3px;\n          top: 3px;\n          background: #fff;\n          border-radius: 50%;\n          transition: transform 0.2s;\n        }\n        .pb-toggle input:checked + .pb-toggle-slider { background: #4caf50; }\n        .pb-toggle input:checked + .pb-toggle-slider:before { transform: translateX(16px); }\n        .pb-subtle { opacity: 0.75; }\n        .pb-footer {\n          margin-top: 12px;\n          padding-top: 10px;\n          border-top: 1px solid rgba(255,255,255,0.08);\n          text-align: center;\n          opacity: 0.78;\n          cursor: pointer;\n          transition: opacity .15s ease;\n        }\n        .pb-footer:hover { opacity: 1; }\n        .pb-coords {\n          font-variant-numeric: tabular-nums;\n          opacity: 0.88;\n        }\n        .pb-mini-dock {\n          display: none;\n          align-items: center;\n          gap: 6px;\n          padding: 8px 10px;\n          background: rgba(15, 15, 18, 0.94);\n          border: 1px solid rgba(255,255,255,0.14);\n          border-radius: 12px;\n          box-shadow: 0 10px 30px rgba(0,0,0,0.35);\n          backdrop-filter: blur(8px);\n        }\n        .pb-mini-dock.show { display: flex; }\n        .pb-chip {\n          padding: 4px 8px;\n          border-radius: 999px;\n          background: rgba(255,255,255,0.09);\n          border: 1px solid rgba(255,255,255,0.10);\n          white-space: nowrap;\n        }\n        .pb-progress { opacity: 0.78; min-height: 16px; }\n        .pb-label-row {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          gap: 8px;\n          margin-bottom: 6px;\n        }\n        details { margin-top: 8px; }\n        details > summary {\n          cursor: pointer;\n          list-style: none;\n          display: flex;\n          align-items: center;\n          gap: 6px;\n          padding: 5px 0;\n          font-weight: 600;\n          border-bottom: 1px solid rgba(255,255,255,0.08);\n          user-select: none;\n          outline: none;\n        }\n        details > summary::-webkit-details-marker { display: none; }\n        details > summary::before {\n          content: \'▶\';\n          font-size: 9px;\n          opacity: 0.6;\n          transition: transform 0.15s;\n          flex-shrink: 0;\n        }\n        details[open] > summary::before { transform: rotate(90deg); }\n        details > summary:hover { opacity: 0.85; }\n        .pb-details-content { padding-top: 4px; }\n      </style>\n\n      <div class="pb-wrap">\n        <div class="pb-mini-dock" id="pb-mini-dock">\n          <span class="pb-chip">Overlay</span>\n          <button type="button" id="pb-mini-show">Открыть</button>\n          <button type="button" id="pb-mini-toggle">Скрыть</button>\n        </div>\n\n        <div class="pb-panel" id="pb-panel">\n          <div class="pb-header" id="pb-header">\n            <div class="pb-title">\n              <b>v11.42 от MIRRONAKE</b>\n              <small id="pb-json-caption">ожидание json…</small>\n            </div>\n            <div class="pb-header-buttons">\n              <button type="button" id="pb-mini">Мини</button>\n              <button type="button" id="pb-collapse">—</button>\n            </div>\n          </div>\n\n          <div class="pb-content">\n            <!-- Прозрачность -->\n            <div class="pb-row">\n              <div class="pb-label-row">\n                <label>Прозрачность: <span id="pb-opacity-value">0.65</span></label>\n                <span class="pb-progress" id="pb-progress"></span>\n              </div>\n              <input id="pb-opacity-slider" type="range" min="0" max="100" step="1" value="65">\n            </div>\n\n\n            <!-- Опции -->\n            <details open>\n              <summary>Опции</summary>\n              <div class="pb-details-content">\n                <div class="pb-row">\n                  <div class="pb-toggle-wrap">\n                    <span class="pb-toggle-label">Авто-выбор цвета 🎨</span>\n                    <label class="pb-toggle">\n                      <input id="pb-auto-color" type="checkbox" checked>\n                      <span class="pb-toggle-slider"></span>\n                    </label>\n                  </div>\n                  <label class="pb-item" style="margin-top:6px;">\n                    <input id="pb-mismatch" type="checkbox">\n                    <span class="pb-item-text">Несовпадения</span>\n                  </label>\n                  <label class="pb-item" style="margin-top:6px;">\n                    <input id="pb-mismatch-style" type="checkbox">\n                    <span class="pb-item-text">Заливка (несовпадений)</span>\n                  </label>\n                  <div class="pb-row" style="margin-top:6px;">\n                    <div style="display:flex;align-items:center;justify-content:space-between;">\n                      <label>Радиус подсветки: <span id="pb-mismatch-radius-value">5</span> пк</label>\n                    </div>\n                    <input id="pb-mismatch-radius" type="range" min="5" max="100" step="5" value="5">\n                  </div>\n                  <div class="pb-row" style="margin-top:6px;">\n                    <div style="display:flex;align-items:center;justify-content:space-between;">\n                      <label>Цвет подсветки:</label>\n                      <input id="pb-mismatch-color" type="color" value="#ff4646" style="width:36px;height:22px;padding:1px;border:none;background:none;cursor:pointer;">\n                    </div>\n                  </div>\n                  <div class="pb-row" style="margin-top:6px;">\n                    <div style="display:flex;align-items:center;justify-content:space-between;">\n                      <label>Прозрачность подсветки: <span id="pb-mismatch-opacity-value">0.70</span></label>\n                    </div>\n                    <input id="pb-mismatch-opacity" type="range" min="0" max="1" step="0.05" value="0.7">\n                  </div>\n                  <label class="pb-item" style="margin-top:6px;">\n                    <input id="pb-crosshair" type="checkbox">\n                    <span class="pb-item-text">Прицел</span>\n                  </label>\n\n                </div>\n              </div>\n            </details>\n\n            <!-- Шаблоны -->\n            <details>\n              <summary>Шаблоны</summary>\n              <div class="pb-details-content">\n                <div class="pb-row">\n                  <div class="pb-coords" id="pb-coords">Курсор: —</div>\n                </div>\n                <div class="pb-row">\n                  <div class="pb-status" id="pb-status">Загрузка...</div>\n                </div>\n                <div class="pb-row">\n                  <div class="pb-label-row">\n                    <div><b>Паки</b></div>\n                    <div class="pb-subtle" id="pb-pack-count"></div>\n                  </div>\n                  <div class="pb-list" id="pb-pack-list"></div>\n                </div>\n                <div class="pb-row">\n                  <div class="pb-label-row">\n                    <div><b>Группы</b></div>\n                    <div class="pb-subtle" id="pb-group-count"></div>\n                  </div>\n                  <div class="pb-list" id="pb-group-list"></div>\n                </div>\n                <div class="pb-row">\n                  <div class="pb-label-row">\n                    <div><b>Изображения</b></div>\n                    <div class="pb-subtle" id="pb-image-count"></div>\n                  </div>\n                  <div class="pb-list" id="pb-template-list"></div>\n                </div>\n              </div>\n            </details>\n\n            <!-- Горячие клавиши -->\n            <details>\n              <summary>Горячие клавиши</summary>\n              <div class="pb-details-content pb-subtle">\n                <div class="pb-row">\n                  <div>M — меню</div>\n                  <div>H — показать/скрыть</div>\n                  <div>[ / ] — прозрачность</div>\n                  <div>R — обновить шаблоны</div>\n                  <div>P — подглядеть (удерж.)</div>\n                  <div>X — прицел</div>\n                  <div>G — несовпадения</div>\n                </div>\n              </div>\n            </details>\n\n            <!-- Виджет -->\n            <details>\n              <summary>Виджет</summary>\n              <div class="pb-details-content">\n                <div class="pb-row pb-inline-buttons">\n                  <button type="button" id="pb-reset-pos">Сбросить позицию</button>\n                  <button type="button" class="pb-danger" id="pb-destroy">Удалить</button>\n                </div>\n                <div class="pb-row">\n                  <label class="pb-item" style="margin-top:6px;">\n                    <input id="pb-auto-reload" type="checkbox">\n                    <span class="pb-item-text">Авто-обновление шаблонов</span>\n                  </label>\n                </div>\n                <div class="pb-row pb-inline-buttons" style="margin-top:6px;">\n                  <button type="button" id="pb-reload">Обновить шаблоны</button>\n                </div>\n              </div>\n            </details>\n\n            <div class="pb-footer" id="pb-footer"></div>\n          </div>\n        </div>\n      </div>\n    ';
    v128.appendChild(v129);
    document.body.appendChild(v127);
    vO9.panel = v128.getElementById('pb-panel');
    vO9.statusEl = v128.getElementById('pb-status');
    vO9.opacityValueEl = v128.getElementById('pb-opacity-value');
    vO9.opacitySliderEl = v128.getElementById('pb-opacity-slider');
    vO9.visibilityBtnEl = null;
    vO9.coordsEl = v128.getElementById('pb-coords');
    vO9.footerEl = v128.getElementById('pb-footer');
    vO9.progressEl = v128.getElementById('pb-progress');
    vO9.templateListEl = v128.getElementById('pb-template-list');
    vO9.groupListEl = v128.getElementById('pb-group-list');
    vO9.packListEl = v128.getElementById('pb-pack-list');
    vO9.miniDockEl = v128.getElementById('pb-mini-dock');
    vO9.mismatchBtnEl = v128.getElementById('pb-mismatch');
    vO9.mismatchStyleBtnEl = v128.getElementById('pb-mismatch-style');
    vO9.mismatchRadiusSliderEl = v128.getElementById('pb-mismatch-radius');
    vO9.mismatchRadiusValueEl = v128.getElementById('pb-mismatch-radius-value');
    vO9.mismatchColorEl = v128.getElementById('pb-mismatch-color');
    vO9.mismatchOpacitySliderEl = v128.getElementById('pb-mismatch-opacity');
    vO9.mismatchOpacityValueEl = v128.getElementById('pb-mismatch-opacity-value');
    vO9.crosshairCheckboxEl = v128.getElementById('pb-crosshair');
    vO9.debugCheckboxEl = null;
    vO9.autoReloadCheckboxEl = v128.getElementById('pb-auto-reload');
    vO9.autoColorCheckboxEl = v128.getElementById('pb-auto-color');
    vO9.autoModeCheckboxEl = v128.getElementById('pb-auto-mode');
    const v130 = v128.getElementById('pb-json-caption');
    v130.textContent = vO9.jsonUrls.length ? 'шаблоны активны' : 'нет json';
    vO9.footerEl.textContent = vO.VRfXd(vO.wIkmj(f15), ' fuck you mirronake 😎');
    vO9.footerEl.addEventListener('click', () => {
      const vO55 = {
        PAcot: function (p1146, p1147) {
          return p1146 * p1147;
        },
        LARGi: function (p1148, p1149) {
          return vO53.daiLC(p1148, p1149);
        },
        fTewf: function (p1150, p1151) {
          return vO53.cpzXq(p1150, p1151);
        },
        YCMwM: function (p1152, p1153) {
          return vO53.cpzXq(p1152, p1153);
        },
        xwnKL: function (p1154, p1155) {
          return vO53.JooFu(p1154, p1155);
        }
      };
      try {
        window.open(vO53.lUsHk(f16), '_blank', 'noopener,noreferrer');
      } catch (e5) {
        console.error('[PB Overlay] Failed to open author link:', e5);
      }
    });
    vO9.opacitySliderEl.addEventListener('input', () => {
      const vO56 = {
        prTPY: function (p1156, p1157) {
          return p1156 + p1157;
        }
      };
      f20('opacity', vO53.pUkZo(f3, vO53.ZPEwN(vO53.eoXaJ(Number, vO9.opacitySliderEl.value), 100), 0, 1));
      f61();
      vO53.yhSBz(f89);
    });
    vO9.visibilityBtnEl?.addEventListener('click', () => {
      const vO57 = {
        HpxEC: function (p1158, p1159) {
          return vO53.eoXaJ(p1158, p1159);
        },
        uFgwA: function (p1160, p1161) {
          return p1160 <= p1161;
        },
        VbpnA: function (p1162, p1163) {
          return p1162 - p1163;
        }
      };
      f20('visible', !vO9.settings.visible);
      vO53.aRwgA(f61);
      vO53.eZhFb(f89);
    });
    vO9.crosshairCheckboxEl.addEventListener('change', () => {
      vO.zkpBl(f20, 'crosshair', !!vO9.crosshairCheckboxEl.checked);
      vO.LBOUZ(f61);
      f89();
    });
    vO9.debugCheckboxEl?.addEventListener('change', () => {
      f20('debug', !!vO9.debugCheckboxEl?.checked);
      f61();
      vO53.eZhFb(f89);
    });
    vO9.autoReloadCheckboxEl.addEventListener('change', () => {
      const vO58 = {
        IutWU: function (p1164) {
          return vO53.xwyqp(p1164);
        }
      };
      vO53.QWUGZ(f20, 'autoReloadJson', !!vO9.autoReloadCheckboxEl.checked);
      vO53.lUsHk(f61);
    });
    vO9.autoColorCheckboxEl.addEventListener('change', () => {
      vO53.QWUGZ(f20, 'autoColor', !!vO9.autoColorCheckboxEl.checked);
      vO53.dDSIb(f61);
    });
    v128.getElementById('pb-reload').addEventListener('click', f94);
    v128.getElementById('pb-mismatch').addEventListener('change', () => {
      vO9.view.mismatchMode = !!v128.getElementById('pb-mismatch').checked;
      vO.AvKJy(f61);
      f89();
    });
    v128.getElementById('pb-mismatch-style').addEventListener('change', () => {
      vO53.rgFUA(f20, 'mismatchStyle', v128.getElementById('pb-mismatch-style').checked ? 'fill' : 'stroke');
      vO53.eadWQ(f61);
      vO53.DgvRX(f89);
    });
    v128.getElementById('pb-mismatch-radius').addEventListener('input', () => {
      vO53.qoufc(f20, 'mismatchRadius', Number(v128.getElementById('pb-mismatch-radius').value));
      vO53.eadWQ(f61);
      vO53.pXSjE(f89);
    });
    v128.getElementById('pb-mismatch-color').addEventListener('input', () => {
      vO.wNcWE(f20, 'mismatchColor', v128.getElementById('pb-mismatch-color').value);
      vO.Ptfid(f89);
    });
    v128.getElementById('pb-mismatch-opacity').addEventListener('input', () => {
      vO.NPXeU(f20, 'mismatchOpacity', vO.URzqE(Number, v128.getElementById('pb-mismatch-opacity').value));
      f61();
      vO.AvKJy(f89);
    });
    v128.getElementById('pb-collapse').addEventListener('click', () => {
      vO.zneDJ(f20, 'menuOpen', !vO9.settings.menuOpen);
      vO.kgFQL(f61);
    });
    v128.getElementById('pb-mini').addEventListener('click', () => {
      vO53.IkeQV(f20, 'miniMode', !vO9.settings.miniMode);
      f61();
    });
    v128.getElementById('pb-mini-show').addEventListener('click', () => {
      vO.seXmP(f20, 'miniMode', false);
      f61();
    });
    v128.getElementById('pb-mini-toggle').addEventListener('click', () => {
      vO.eNIMd(f20, 'visible', !vO9.settings.visible);
      vO.OHMat(f61);
      vO.GddTg(f89);
    });
    v128.getElementById('pb-reset-pos').addEventListener('click', () => {
      f20('panelX', 14);
      f20('panelY', 100);
      f55();
    });
    v128.getElementById('pb-destroy').addEventListener('click', f105);
    const v139 = v128.getElementById('pb-header');
    v139.addEventListener('mousedown', p1166 => {
      if (p1166.button !== 0) {
        return;
      }
      const v140 = p1166.target?.tagName;
      if (v140 === 'BUTTON' || vO53.JPMUB(v140, 'INPUT')) {
        return;
      }
      vO9.uiDragging = true;
      const v141 = vO9.uiHost.getBoundingClientRect();
      vO9.dragOffsetX = p1166.clientX - v141.left;
      vO9.dragOffsetY = p1166.clientY - v141.top;
      p1166.preventDefault();
    });
    window.addEventListener('mousemove', f57, true);
    window.addEventListener('mouseup', f58, true);
    vO.obvuu(f61);
    vO.EncVm(f55);
  }
  function f57(p1167) {
    const vO59 = {
      KSICd: function (p1168, p1169, p1170) {
        return vO.seXmP(p1168, p1169, p1170);
      },
      DfiGO: '_blank',
      NqNvQ: 'noopener,noreferrer'
    };
    vO9.cursor.screenX = p1167.clientX;
    vO9.cursor.screenY = p1167.clientY;
    vO9.cursor.inside = true;
    f59();
    f60();
    if (vO9.uiDragging && vO9.uiHost) {
      const v142 = vO.iYKms(f3, vO.bULOO(p1167.clientX, vO9.dragOffsetX), 0, vO.uHRVT(window.innerWidth, 120));
      const v143 = vO.WgHpE(f3, p1167.clientY - vO9.dragOffsetY, 0, vO.cGMHo(window.innerHeight, 40));
      f20('panelX', v142);
      vO.DlYGd(f20, 'panelY', v143);
      f55();
    }
    if (vO9.settings.crosshair) {
      vO.kgFQL(f89);
    }
  }
  function f58() {
    vO9.uiDragging = false;
  }
  function f59() {
    const v145 = vO9.camera;
    if (!vO9.camera.seen || !vO9.camera.zoom) {
      return;
    }
    vO9.cursor.boardX = Math.floor(vO.RiDBj(vO.uHRVT(vO9.cursor.screenX, vO9.camera.offsetX), vO9.camera.zoom));
    vO9.cursor.boardY = Math.floor(vO.Ndvpf(vO9.cursor.screenY - vO9.camera.offsetY, vO9.camera.zoom));
  }
  function f60() {
    const vO61 = {
      wqeAI: function (p1171, p1172) {
        return vO.TZOOx(p1171, p1172);
      }
    };
    if (!vO9.coordsEl) {
      return;
    }
    if (!vO9.camera.seen) {
      vO9.coordsEl.textContent = 'Курсор: ожидание камеры…';
      return;
    }
    vO9.coordsEl.textContent = 'Курсор: экран ' + Math.round(vO9.cursor.screenX) + ', ' + Math.round(vO9.cursor.screenY) + ' | доска ' + vO9.cursor.boardX + ', ' + vO9.cursor.boardY;
  }
  function f61() {
    const vO62 = {
      wdfhd: function (p1173) {
        return vO.OHMat(p1173);
      },
      xRyWp: '[PB Overlay] sync error:'
    };
    if (!vO9.panel) {
      return;
    }
    if (typeof vO9.settings.opacity !== 'number') {
      vO9.settings.opacity = vO5.defaultSettings.opacity ?? 0.65;
    }
    vO9.opacityValueEl.textContent = vO9.settings.opacity.toFixed(2);
    vO9.opacitySliderEl.value = String(Math.round(vO9.settings.opacity * 100));
    vO9.visibilityBtnEl?.textContent;
    vO9.crosshairCheckboxEl.checked = !!vO9.settings.crosshair;
    if (vO9.debugCheckboxEl) {
      vO9.debugCheckboxEl.checked = !!vO9.settings.debug;
    }
    vO9.autoReloadCheckboxEl.checked = !!vO9.settings.autoReloadJson;
    vO9.autoColorCheckboxEl.checked = !!vO9.settings.autoColor;
    if (vO9.autoModeCheckboxEl) {
      vO9.autoModeCheckboxEl.checked = !!vO9.settings.autoMode;
    }
    vO9.panel.classList.toggle('collapsed', !vO9.settings.menuOpen);
    vO9.panel.classList.toggle('hidden-full', !!vO9.settings.miniMode);
    vO9.miniDockEl.classList.toggle('show', !!vO9.settings.miniMode);
    vO9.mismatchBtnEl.checked = !!vO9.view.mismatchMode;
    vO9.mismatchStyleBtnEl.checked = vO.CMylp(vO9.settings.mismatchStyle, 'fill');
    if (vO9.mismatchRadiusSliderEl) {
      const v146 = vO9.settings.mismatchRadius ?? 5;
      vO9.mismatchRadiusSliderEl.value = vO.VbvoA(String, v146);
      vO9.mismatchRadiusValueEl.textContent = vO.EMJdr(String, v146);
    }
    if (vO9.mismatchColorEl) {
      vO9.mismatchColorEl.value = vO9.settings.mismatchColor ?? '#ff4646';
    }
    if (vO9.mismatchOpacitySliderEl) {
      const v147 = vO9.settings.mismatchOpacity ?? 0.7;
      vO9.mismatchOpacitySliderEl.value = vO.myPeF(String, v147);
      vO9.mismatchOpacityValueEl.textContent = v147.toFixed(2);
    }
    f62();
    vO.xKQfd(f63);
    vO.OHMat(f64);
    vO.Ptfid(f60);
    f91();
  }
  function f62() {
    const vO64 = {
      cTadL: function (p1174) {
        return vO.KrrEV(p1174);
      },
      yfpXn: function (p1175) {
        return vO.kgFQL(p1175);
      }
    };
    if (!vO9.packListEl) {
      return;
    }
    vO9.packListEl.innerHTML = '';
    for (const v148 of vO9.packs) {
      const v149 = document.createElement('label');
      v149.className = 'pb-item';
      const v150 = document.createElement('input');
      v150.type = 'checkbox';
      v150.checked = vO.KRXHx(f49, v148.id);
      v150.addEventListener('change', () => {
        vO9.settings.packEnabled[v148.id] = v150.checked;
        vO64.cTadL(f19);
        f62();
        vO64.yfpXn(f64);
        f91();
        f89();
      });
      const v151 = document.createElement('span');
      v151.className = 'pb-item-text';
      v151.textContent = v148.name + ' (#' + vO.KzaJA(vO9.packs.indexOf(v148), 1) + ')';
      v149.appendChild(v150);
      v149.appendChild(v151);
      vO9.packListEl.appendChild(v149);
    }
    const v152 = vO9.uiShadow.getElementById('pb-pack-count');
    if (v152) {
      v152.textContent = vO9.packs.filter(p1176 => f49(p1176.id)).length + '/' + vO9.packs.length;
    }
  }
  function f63() {
    const vO65 = {
      OOmjI: function (p1177) {
        return vO.bngvV(p1177);
      },
      mGiQh: function (p1178) {
        return vO.UAFta(p1178);
      }
    };
    if (!vO9.groupListEl) {
      return;
    }
    vO9.groupListEl.innerHTML = '';
    const v153 = [...vO9.groupIndex.keys()].sort();
    for (const v154 of v153) {
      const v155 = document.createElement('label');
      v155.className = 'pb-item';
      const v156 = document.createElement('input');
      v156.type = 'checkbox';
      v156.checked = vO.lCMZD(f50, v154);
      v156.addEventListener('change', () => {
        vO9.settings.groupEnabled[v154] = v156.checked;
        vO65.OOmjI(f19);
        vO65.OOmjI(f63);
        f64();
        vO65.OOmjI(f91);
        vO65.mGiQh(f89);
      });
      const v157 = document.createElement('span');
      v157.className = 'pb-item-text';
      v157.textContent = v154 + ' (' + vO9.groupIndex.get(v154).length + ')';
      v155.appendChild(v156);
      v155.appendChild(v157);
      vO9.groupListEl.appendChild(v155);
    }
    const v158 = vO9.uiShadow.getElementById('pb-group-count');
    if (v158) {
      v158.textContent = v153.filter(p1179 => f50(p1179)).length + '/' + v153.length;
    }
  }
  function f64() {
    const vO66 = {
      oMPUD: function (p1180, p1181) {
        return p1180(p1181);
      },
      CDPSt: function (p1182) {
        return p1182();
      }
    };
    if (!vO9.templateListEl) {
      return;
    }
    vO9.templateListEl.innerHTML = '';
    if (!vO9.loadedTemplates.length) {
      const v159 = document.createElement('div');
      v159.className = 'pb-subtle';
      v159.textContent = 'Нет изображений';
      vO9.templateListEl.appendChild(v159);
    } else {
      for (const v160 of vO9.loadedTemplates) {
        const v161 = document.createElement('label');
        v161.className = 'pb-item';
        const v162 = document.createElement('input');
        v162.type = 'checkbox';
        v162.checked = f51(v160.id);
        v162.addEventListener('change', () => {
          vO9.settings.templateEnabled[v160.id] = v162.checked;
          vO66.CDPSt(f19);
          f91();
          vO66.CDPSt(f89);
        });
        const v163 = document.createElement('span');
        v163.className = 'pb-item-text';
        v163.textContent = v160.name + ' [' + v160.group + '] (' + v160.x + ', ' + v160.y + ') ' + v160.width + '×' + v160.height + (v160.warning ? ' • ' + v160.warning : '');
        v161.appendChild(v162);
        v161.appendChild(v163);
        vO9.templateListEl.appendChild(v161);
      }
    }
    if (vO9.failedTemplates.length) {
      const v164 = document.createElement('div');
      v164.className = 'pb-subtle';
      v164.textContent = 'Ошибок: ' + vO9.failedTemplates.length;
      vO9.templateListEl.appendChild(v164);
    }
    const v165 = vO9.uiShadow.getElementById('pb-image-count');
    if (v165) {
      v165.textContent = vO9.loadedTemplates.filter(p1184 => f51(p1184.id)).length + '/' + vO9.loadedTemplates.length;
    }
  }
  function f65() {
    if (!vO9.settings.visible) {
      return false;
    }
    if (vO9.view.peekHeld) {
      return false;
    }
    if (vO9.view.flashUntil && vO.KkOhG(performance.now(), vO9.view.flashUntil)) {
      return false;
    }
    return true;
  }
  function f66(p1185) {
    if (!vO.ozyYL(f49, p1185.packId)) {
      return false;
    }
    if (!f50(p1185.group)) {
      return false;
    }
    if (!vO.UBtWs(f51, p1185.id)) {
      return false;
    }
    return true;
  }
  function f67(p1186) {
    if (!vO9.settings.crosshair || !vO9.cursor.inside) {
      return;
    }
    p1186.save();
    p1186.lineWidth = 1;
    p1186.strokeStyle = 'rgba(255,255,255,0.6)';
    p1186.beginPath();
    p1186.moveTo(0, vO9.cursor.screenY + 0.5);
    p1186.lineTo(p1186.canvas.width, vO.KZhAz(vO9.cursor.screenY, 0.5));
    p1186.moveTo(vO.aEtoR(vO9.cursor.screenX, 0.5), 0);
    p1186.lineTo(vO9.cursor.screenX + 0.5, p1186.canvas.height);
    p1186.stroke();
    const v166 = vO9.cursor.boardX + ', ' + vO9.cursor.boardY;
    p1186.font = '12px sans-serif';
    const v167 = vO.VRfXd(p1186.measureText(v166).width, 10);
    p1186.fillStyle = 'rgba(0,0,0,0.65)';
    p1186.fillRect(vO.ibFxn(vO9.cursor.screenX, 10), vO.zUCgE(vO9.cursor.screenY, 10), v167, 18);
    p1186.fillStyle = '#fff';
    p1186.fillText(v166, vO.vVhLp(vO9.cursor.screenX, 15), vO9.cursor.screenY + 23);
    p1186.restore();
  }
  function f68(p1187) {
    const v168 = vO9.view.autoModeLastBoardPixel;
    if (!vO9.view.autoModeLastBoardPixel || !vO9.camera.seen) {
      return;
    }
    const v169 = vO.IpzTj(vO9.camera.offsetX, vO.QGkSp(vO9.view.autoModeLastBoardPixel.boardX + 0.5, vO9.camera.zoom));
    const v170 = vO.KZhAz(vO9.camera.offsetY, vO.pTZXY(vO.wlxsX(vO9.view.autoModeLastBoardPixel.boardY, 0.5), vO9.camera.zoom));
    const v171 = Math.max(6, vO.DnyVT(vO9.camera.zoom, 0.6));
    const v172 = vO.vVhLp(v171, 4);
    p1187.save();
    p1187.strokeStyle = 'rgba(60,120,255,0.9)';
    p1187.lineWidth = 1.5;
    p1187.beginPath();
    p1187.arc(v169, v170, v171, 0, Math.PI * 2);
    p1187.stroke();
    p1187.beginPath();
    p1187.moveTo(vO.QXytL(v169, v172), v170);
    p1187.lineTo(vO.OINXw(v169 - v171, 1), v170);
    p1187.moveTo(vO.YtFOp(vO.KEajF(v169, v171), 1), v170);
    p1187.lineTo(v169 + v172, v170);
    p1187.moveTo(v169, v170 - v172);
    p1187.lineTo(v169, vO.ppmFe(vO.uHRVT(v170, v171), 1));
    p1187.moveTo(v169, vO.yMcZG(v170, v171) - 1);
    p1187.lineTo(v169, v170 + v172);
    p1187.stroke();
    p1187.restore();
  }
  function f69(p1188) {
    const vO68 = {
      BpwtM: function (p1189, p1190) {
        return vO.TUboH(p1189, p1190);
      },
      OlWKB: function (p1191, p1192) {
        return vO.ciyWh(p1191, p1192);
      }
    };
    if (!vO9.settings.debug) {
      return;
    }
    const v173 = vO9.camera;
    const vA9 = [
      'zoom ' + vO9.camera.zoom.toFixed(4),
      'offset ' + vO9.camera.offsetX.toFixed(2) + ', ' + vO9.camera.offsetY.toFixed(2),
      'dpr ' + vO9.camera.dpr.toFixed(3),
      'palette ' + vO9.palette.length + ' (' + (vO9.paletteSource || 'n/a') + ')',
      'images ' + vO9.loadedTemplates.filter(f66).length + '/' + vO9.loadedTemplates.length,
      'mismatch ' + (vO9.view.mismatchMode ? 'on' : 'off')
    ];
    p1188.save();
    p1188.fillStyle = 'rgba(0,0,0,0.7)';
    p1188.fillRect(12, vO.PMPZE(vO.WvUus(p1188.canvas.height, 18), vO.UxfUB(vA9.length, 16)), 240, vO.OINXw(vO.cLonO(vA9.length, 16), 8));
    p1188.fillStyle = '#fff';
    p1188.font = '12px monospace';
    vA9.forEach((p1193, p1194) => {
      p1188.fillText(p1193, 18, vO68.BpwtM(vO68.BpwtM(p1188.canvas.height, 12), vO68.OlWKB(vO68.BpwtM(vA9.length, 1) - p1194, 16)));
    });
    p1188.restore();
  }
  function f70(p1195) {
    const v174 = vO.zUCgE(vO9.camera.offsetX, p1195.x * vO9.camera.zoom);
    const v175 = vO9.camera.offsetY + vO.WrguB(p1195.y, vO9.camera.zoom);
    const v176 = vO.NWxrK(p1195.width, vO9.camera.zoom);
    const v177 = vO.eMUCw(p1195.height, vO9.camera.zoom);
    return {
      sx: Math.round(v174),
      sy: Math.round(v175),
      sw: Math.round(v176),
      sh: Math.round(v177)
    };
  }
  function f71(p1196, p1197) {
    const vO69 = {
      INrwB: '[AUTO] cooldown done, going to find',
      NZPuq: function (p1198, p1199) {
        return p1198(p1199);
      }
    };
    if (!vO9.baseCanvas) {
      return null;
    }
    const v178 = vO9.baseCanvas.getBoundingClientRect();
    if (!v178.width || !v178.height) {
      return null;
    }
    const v179 = Math.floor(vO.jYcHi(vO.dWFUJ(p1196, v178.left), vO9.baseCanvas.width / v178.width));
    const v180 = Math.floor(vO.UxfUB(vO.TUboH(p1197, v178.top), vO.vEPbf(vO9.baseCanvas.height, v178.height)));
    if (vO.KkOhG(v179, 0) || v180 < 0 || vO.JRGFg(v179, vO9.baseCanvas.width) || vO.ueNwr(v180, vO9.baseCanvas.height)) {
      return null;
    }
    try {
      const v181 = vO9.baseCanvas.getContext('2d', { willReadFrequently: true });
      const v182 = v181.getImageData(v179, v180, 1, 1).data;
      return [
        v181.getImageData(v179, v180, 1, 1).data[0],
        v181.getImageData(v179, v180, 1, 1).data[1],
        v181.getImageData(v179, v180, 1, 1).data[2],
        v181.getImageData(v179, v180, 1, 1).data[3]
      ];
    } catch {
      return null;
    }
  }
  function f72(p1200, p1201) {
    const v187 = vO.PMPZE(p1200[0], p1201[0]);
    const v188 = p1200[1] - p1201[1];
    const v189 = vO.YtFOp(p1200[2], p1201[2]);
    return vO.EVfTC(vO.boUsW(v187, v187) + vO.JTtqS(v188, v188), vO.jYcHi(v189, v189));
  }
  function f73(p1202, p1203) {
    const v190 = vO9.loadedTemplates.filter(f66).slice().reverse();
    for (const v191 of v190) {
      const v192 = p1202 - v191.x;
      const v193 = vO.JKIIb(p1203, v191.y);
      if (vO.xEOIW(v192, 0) || vO.lWQti(v193, 0) || vO.Moofl(v192, v191.width) || vO.RoPwn(v193, v191.height)) {
        continue;
      }
      if (!v191.imageData) {
        continue;
      }
      const v194 = vO.NWxrK(vO.ZRZDI(vO.MKZZV(v193, v191.width), v192), 4);
      if (vO.BbIUy(v191.imageData.data[vO.aEtoR(v194, 3)], 16)) {
        continue;
      }
      return [
        v191.imageData.data[v194],
        v191.imageData.data[vO.eJKNO(v194, 1)],
        v191.imageData.data[vO.rPFKK(v194, 2)]
      ];
    }
    return null;
  }
  function f74(p1204) {
    const vO71 = {
      qfaGn: '8|7|3|6|0|5|9|1|2|4',
      GnioX: function (p1205) {
        return vO.OHMat(p1205);
      },
      YYGCs: function (p1206) {
        return vO.GddTg(p1206);
      },
      elzWz: function (p1207, p1208) {
        return vO.tpzCp(p1207, p1208);
      },
      MwkyQ: 'visibilitychange'
    };
    let vA10 = [];
    for (const v195 of [
        '.bUSeDsPs .UnF3CfUN',
        '[class*="palette"] [style*="background"]',
        '[class*="color"] [style*="background"]'
      ]) {
      vA10 = [...document.querySelectorAll(v195)];
      if (vA10.length) {
        break;
      }
    }
    let v196 = null;
    let vInfinity2 = Infinity;
    for (const v197 of vA10) {
      const v198 = vO.TJFIc(f30, vO.QhvCY(getComputedStyle, v197).backgroundColor);
      if (!v198) {
        continue;
      }
      const v199 = vO.AszLY(f72, p1204, v198);
      if (vO.BbIUy(v199, vInfinity2)) {
        vInfinity2 = v199;
        v196 = v197;
      }
    }
    if (v196) {
      v196.click();
    }
  }
  function f75(p1209) {
    if (!vO9.camera.seen) {
      return;
    }
    if (vO9.uiHost && vO9.uiHost.contains(p1209.target)) {
      return;
    }
    if (!vO.ALwoJ(p1209.target, HTMLCanvasElement)) {
      return;
    }
    if (vO.PlRTa(p1209.button, 1)) {
      p1209.preventDefault();
      const v201 = Math.floor(vO.Xellk(vO.TUboH(p1209.clientX, vO9.camera.offsetX), vO9.camera.zoom));
      const v202 = Math.floor(vO.fDoXG(p1209.clientY - vO9.camera.offsetY, vO9.camera.zoom));
      const v203 = vO.aEtoR(vO9.camera.offsetX, vO.KzaJA(v201, 0.5) * vO9.camera.zoom);
      const v204 = vO.VRfXd(vO9.camera.offsetY, vO.eOpzK(v202, 0.5) * vO9.camera.zoom);
      const v205 = vO.IvbCr(f71, v203, v204);
      if (v205 && vO.zeENw(v205[3], 0)) {
        f74([
          v205[0],
          v205[1],
          v205[2]
        ]);
      }
      return;
    }
    if (vO.wQokl(p1209.button, 0) && vO9.settings.autoColor) {
      const v206 = Math.floor(vO.wNFhs(vO.SdRXC(p1209.clientX, vO9.camera.offsetX), vO9.camera.zoom));
      const v207 = Math.floor(vO.KqgcC(vO.KWqQA(p1209.clientY, vO9.camera.offsetY), vO9.camera.zoom));
      const vF73 = f73(v206, v207);
      if (vF73) {
        vO.wuwwE(f74, vF73);
      }
    }
  }
  function f76(p1210, p1211, p1212) {
    const vO72 = {
      bubbles: true,
      cancelable: true,
      clientX: p1211,
      clientY: p1212
    };
    const vO73 = {
      bubbles: true,
      cancelable: true,
      button: 0,
      buttons: 1,
      clientX: p1211,
      clientY: p1212
    };
    const vO74 = {
      bubbles: true,
      cancelable: true,
      button: 0,
      buttons: 0,
      clientX: p1211,
      clientY: p1212
    };
    p1210.dispatchEvent(new PointerEvent('pointermove', {
      ...vO72,
      pointerId: 1,
      pointerType: 'mouse'
    }));
    p1210.dispatchEvent(new PointerEvent('pointerdown', {
      ...vO73,
      pointerId: 1,
      pointerType: 'mouse',
      isPrimary: true
    }));
    p1210.dispatchEvent(new PointerEvent('pointerup', {
      ...vO74,
      pointerId: 1,
      pointerType: 'mouse',
      isPrimary: true
    }));
    window.dispatchEvent(new MouseEvent('mousemove', vO72));
    p1210.dispatchEvent(new MouseEvent('mousemove', vO72));
    p1210.dispatchEvent(new MouseEvent('mousedown', vO73));
    p1210.dispatchEvent(new MouseEvent('mouseup', vO74));
    p1210.dispatchEvent(new MouseEvent('click', vO74));
  }
  function f77(p1213, p1214, p1215, p1216, p1217) {
    const vO75 = {
      ZPqwu: function (p1218, p1219, p1220, p1221) {
        return vO.mtWEk(p1218, p1219, p1220, p1221);
      },
      ZeLNf: 'mouseup',
      jSniE: function (p1222, p1223, p1224) {
        return p1222(p1223, p1224);
      },
      sAfxi: '.m5tH6juu',
      IBZgc: function (p1225, p1226) {
        return vO.VlnYh(p1225, p1226);
      },
      yFwVB: 'sbFLx',
      OWAka: 'JwmnM',
      QBzuU: function (p1227) {
        return p1227();
      },
      rkaZZ: function (p1228, p1229) {
        return p1228 !== p1229;
      },
      rWZjy: 'rKSWj',
      wgZyH: 'mousemove',
      bMvSH: function (p1230, p1231, p1232) {
        return vO.tpJDq(p1230, p1231, p1232);
      },
      ZEYwq: function (p1233, p1234) {
        return p1233 > p1234;
      },
      kFkdN: '[AUTO] wait_btn: btn not enabled, span:',
      yxkWy: function (p1235, p1236) {
        return vO.oSkWn(p1235, p1236);
      },
      dbgob: '[AUTO] btn.click() fired'
    };
    const v208 = vO9.baseCanvas;
    if (!v208) {
      if (p1217) {
        vO.ttLlF(p1217);
      }
      return;
    }
    const vO76 = {
      bubbles: true,
      cancelable: true,
      button: 0,
      buttons: 1,
      clientX: p1213,
      clientY: p1214
    };
    v208.dispatchEvent(new MouseEvent('mousedown', vO76));
    vO.zneDJ(setTimeout, () => {
      const vO77 = {
        JzdHL: '.m5tH6juu',
        jwaRd: function (p1237, p1238) {
          return vO75.IBZgc(p1237, p1238);
        },
        KRBkY: 'sbFLx',
        Vbvxu: 'JwmnM',
        bMTJr: function (p1239) {
          return vO75.QBzuU(p1239);
        }
      };
      const vO78 = {
        bubbles: true,
        cancelable: true,
        buttons: 1,
        clientX: p1215,
        clientY: p1216
      };
      window.dispatchEvent(new MouseEvent('mousemove', vO78));
      vO75.bMvSH(setTimeout, () => {
        const vO79 = {
          muXTw: function (p1240, p1241, p1242, p1243) {
            return vO75.ZPqwu(p1240, p1241, p1242, p1243);
          }
        };
        const vO80 = {
          bubbles: true,
          cancelable: true,
          button: 0,
          buttons: 0,
          clientX: p1215,
          clientY: p1216
        };
        window.dispatchEvent(new MouseEvent('mouseup', vO80));
        vO75.jSniE(setTimeout, () => {
          if (p1217) {
            vO77.bMTJr(p1217);
          }
        }, 250);
      }, 40);
    }, 40);
  }
  function f78() {
    if (!vO9.camera.seen || !vO9.loadedTemplates.length) {
      return;
    }
    const v213 = vO.Ptfid(f79);
    if (!v213.length) {
      return;
    }
    const v214 = v213[0];
    f74(v213[0].rgb);
    const v215 = vO9.baseCanvas;
    if (v215) {
      f76(v215, v213[0].screenX, v213[0].screenY);
    }
    vO.MOuql(setTimeout, () => {
      const v216 = document.querySelector('.m5tH6juu');
      if (v216) {
        v216.click();
      }
    }, 150);
  }
  function f79() {
    const vO81 = {
      evhyG: function (p1244, p1245, p1246) {
        return vO.nIdoz(p1244, p1245, p1246);
      },
      TVzin: ' | ',
      QmoVj: function (p1247) {
        return vO.PHHLn(p1247);
      }
    };
    const v217 = vO9.baseCanvas;
    if (!v217) {
      return [];
    }
    let v218;
    try {
      v218 = v217.getContext('2d', { willReadFrequently: true });
    } catch {
      return [];
    }
    if (!v218) {
      return [];
    }
    const v219 = v217.getBoundingClientRect();
    if (!v219.width || !v219.height) {
      return [];
    }
    const v220 = vO.bVXLi(v217.width, v219.width);
    const v221 = vO.KRlsE(v217.height, v219.height);
    const v222 = vO9.camera.zoom;
    const v223 = vO9.settings.mismatchRadius ?? 50;
    const v224 = vO9.cursor.boardX;
    const v225 = vO9.cursor.boardY;
    const v226 = vO.boUsW(v223, v223);
    const vA11 = [];
    const v227 = vO9.loadedTemplates.filter(f66);
    for (const v228 of v227) {
      if (!v228.imageData) {
        continue;
      }
      const {
        sx: _0x2f4c4e,
        sy: _0x3fe8e6
      } = vO.kjLPN(f70, v228);
      const v229 = vO.nqbat(vO.dWFUJ(vO.FvfDl(_0x2f4c4e, vO.EtHsn(vO9.camera.zoom, 0.5)), v219.left), v220);
      const v230 = vO.jUDww(vO.xpBDE(_0x3fe8e6, vO.pTZXY(vO9.camera.zoom, 0.5)), v219.top) * v221;
      const v231 = vO.ciyWh(vO9.camera.zoom, v220);
      const v232 = vO.cLonO(vO9.camera.zoom, v221);
      const v233 = Math.max(0, vO.uHRVT(vO9.cursor.boardX, v228.x) - v223);
      const v234 = Math.min(vO.mpubA(v228.width, 1), vO.YOpzg(vO9.cursor.boardX - v228.x, v223));
      const v235 = Math.max(0, vO.dWFUJ(vO.jCfNw(vO9.cursor.boardY, v228.y), v223));
      const v236 = Math.min(vO.gUQTp(v228.height, 1), vO9.cursor.boardY - v228.y + v223);
      if (vO.RqaKR(v234, v233) || vO.ajmKK(v236, v235)) {
        continue;
      }
      const v237 = Math.max(0, Math.floor(v229 + vO.rsflt(v233, v231)));
      const v238 = Math.max(0, Math.floor(vO.KEajF(v230, v235 * v232)));
      const v239 = Math.min(v217.width, Math.ceil(vO.UeMac(v229 + v234 * v231, 1)));
      const v240 = Math.min(v217.height, Math.ceil(vO.sDylw(vO.FybpZ(v230, v236 * v232), 1)));
      if (vO.lmeaL(v239, v237) || vO.lmeaL(v240, v238)) {
        continue;
      }
      let v241;
      try {
        v241 = v218.getImageData(v237, v238, vO.CNoBH(v239, v237), vO.jqyjp(v240, v238)).data;
      } catch {
        continue;
      }
      const v242 = vO.NqcKZ(v239, v237);
      const v243 = v228.imageData.data;
      for (let vV235 = v235; vO.MrKMM(vV235, v236); vV235++) {
        for (let vV233 = v233; vO.lmeaL(vV233, v234); vV233++) {
          const v244 = vO.mpubA(vO.sNTST(v228.x, vV233), vO9.cursor.boardX);
          const v245 = v228.y + vV235 - vO9.cursor.boardY;
          if (vO.zeENw(vO.cKPjW(v244 * v244, vO.EtHsn(v245, v245)), v226)) {
            continue;
          }
          const v246 = vO.cLonO(vO.zUgNR(vO.KwsCo(vV235, v228.width), vV233), 4);
          if (vO.RqaKR(v228.imageData.data[vO.zUCgE(v246, 3)], 16)) {
            continue;
          }
          const v247 = vO.PMPZE(Math.floor(vO.sDylw(v229, vO.rsflt(vV233, v231))), v237);
          const v248 = Math.floor(v230 + vO.boUsW(vV235, v232)) - v238;
          if (vO.amkcA(v247, 0) || vO.lAWDc(v248, 0) || v247 >= v242 || vO.tNkbW(v248, vO.jqyjp(v240, v238))) {
            continue;
          }
          const v249 = vO.FybpZ(vO.WrguB(v248, v242), v247) * 4;
          if (vO.tJTuA(v241[v249 + 3], 0)) {
            continue;
          }
          const v250 = vO.rfXgu(f72, [
            v228.imageData.data[v246],
            v228.imageData.data[vO.KZhAz(v246, 1)],
            v228.imageData.data[vO.SxZLP(v246, 2)]
          ], [
            v241[v249],
            v241[v249 + 1],
            v241[vO.GWNkY(v249, 2)]
          ]);
          if (vO.UPZYP(v250, 1000)) {
            const v251 = vO.sNTST(vO.KZhAz(_0x2f4c4e, vO.aNQVW(vV233, vO9.camera.zoom)), vO9.camera.zoom * 0.5);
            const v252 = vO.SxZLP(vO.ZRZDI(_0x3fe8e6, vO.Ompmi(vV235, vO9.camera.zoom)), vO.cVMwM(vO9.camera.zoom, 0.5));
            vA11.push({
              screenX: v251,
              screenY: v252,
              rgb: [
                v228.imageData.data[v246],
                v228.imageData.data[v246 + 1],
                v228.imageData.data[vO.YKoSc(v246, 2)]
              ]
            });
          }
        }
      }
    }
    return vA11;
  }
  function f80() {
    if (vO9.view.autoPlaceTimer) {
      clearTimeout(vO9.view.autoPlaceTimer);
      vO9.view.autoPlaceTimer = null;
    }
    vO9.view.autoPlace = false;
    f61();
  }
  function f81() {
    const vO83 = {
      FokdR: function (p1248) {
        return p1248();
      },
      KGcFY: function (p1249, p1250, p1251) {
        return vO.IiDLp(p1249, p1250, p1251);
      }
    };
    const v254 = vO9.baseCanvas;
    if (!v254) {
      return [];
    }
    let v255;
    try {
      v255 = v254.getContext('2d', { willReadFrequently: true });
    } catch {
      return [];
    }
    if (!v255) {
      return [];
    }
    const v256 = v254.getBoundingClientRect();
    if (!v256.width || !v256.height) {
      return [];
    }
    const v257 = v254.width / v256.width;
    const v258 = v254.height / v256.height;
    const v259 = vO9.camera.zoom;
    const vA12 = [];
    const v260 = vO9.loadedTemplates.filter(f66);
    for (const v261 of v260) {
      if (!v261.imageData) {
        continue;
      }
      const {
        sx: _0xeb2c05,
        sy: _0xe4c160
      } = f70(v261);
      const v262 = vO.UmidR(vO.oHiOY(vO.uxCnW(_0xeb2c05, vO.nqbat(vO9.camera.zoom, 0.5)), v256.left), v257);
      const v263 = vO.NWxrK(vO.YtFOp(vO.YFkMO(_0xe4c160, vO.nqbat(vO9.camera.zoom, 0.5)), v256.top), v258);
      const v264 = vO.pRTmF(vO9.camera.zoom, v257);
      const v265 = vO.mYOyE(vO9.camera.zoom, v258);
      const vLN07 = 0;
      const v266 = vO.fEKXn(v261.width, 1);
      const vLN08 = 0;
      const v267 = vO.pcxrX(v261.height, 1);
      const v268 = Math.max(0, Math.floor(vO.MkNky(v262, vO.UmidR(0, v264))));
      const v269 = Math.max(0, Math.floor(vO.xpBDE(v263, 0 * v265)));
      const v270 = Math.min(v254.width, Math.ceil(vO.MbnDQ(vO.THQpv(v262, vO.IbfhF(v266, v264)), 1)));
      const v271 = Math.min(v254.height, Math.ceil(vO.qZCjl(vO.pyipo(v263, vO.YwUMZ(v267, v265)), 1)));
      if (vO.QNLmK(v270, v268) || v271 <= v269) {
        continue;
      }
      let v272;
      try {
        v272 = v255.getImageData(v268, v269, vO.KWqQA(v270, v268), v271 - v269).data;
      } catch {
        continue;
      }
      const v276 = v270 - v268;
      const v277 = v261.imageData.data;
      for (let vVLN08 = 0; vO.YaQNn(vVLN08, v267); vVLN08++) {
        for (let vVLN07 = 0; vO.XZGZa(vVLN07, v266); vVLN07++) {
          const v278 = vO.pRTmF(vO.CLQdU(vVLN08 * v261.width, vVLN07), 4);
          if (vO.hUqOZ(v261.imageData.data[vO.UeMac(v278, 3)], 16)) {
            continue;
          }
          const v279 = vO.NqcKZ(Math.floor(vO.JAYxS(v262, vO.JBCcD(vVLN07, v264))), v268);
          const v280 = vO.UyoiK(Math.floor(v263 + vO.NWxrK(vVLN08, v265)), v269);
          if (vO.JLwns(v279, 0) || vO.csgmh(v280, 0) || vO.cNtjN(v279, v276) || vO.tNnVA(v280, vO.jqyjp(v271, v269))) {
            continue;
          }
          const v281 = vO.hQhyd(vO.rsflt(v280, v276) + v279, 4);
          if (v272[vO.pqzkM(v281, 3)] === 0) {
            continue;
          }
          const vF72 = f72([
            v261.imageData.data[v278],
            v261.imageData.data[vO.pyipo(v278, 1)],
            v261.imageData.data[vO.wlxsX(v278, 2)]
          ], [
            v272[v281],
            v272[v281 + 1],
            v272[vO.LcFBG(v281, 2)]
          ]);
          if (vO.XtbJw(vF72, 1000)) {
            vA12.push({
              boardX: v261.x + vVLN07,
              boardY: vO.CLQdU(v261.y, vVLN08),
              rgb: [
                v261.imageData.data[v278],
                v261.imageData.data[vO.SxZLP(v278, 1)],
                v261.imageData.data[vO.UeMac(v278, 2)]
              ]
            });
          }
        }
      }
    }
    return vA12;
  }
  function f82() {
    if (vO9.view.autoModeTimer) {
      vO.fnUJD(clearInterval, vO9.view.autoModeTimer);
      vO9.view.autoModeTimer = null;
    }
    vO9.view.autoModeActive = true;
    vO9.view.autoModePhase = 'find';
    vO9.view.autoModeTarget = null;
    vO9.view.autoModePhaseStart = 0;
    vO9.settings.autoMode = true;
    vO.HOfiX(f61);
    console.log('[AUTO] started');
    vO9.view.autoModeTimer = vO.rfXgu(setInterval, f83, 1000);
    if (!vO9.view.autoModeVisibilityHandler) {
      vO9.view.autoModeVisibilityHandler = () => {
        if (!document.hidden && vO9.view.autoModeActive) {
          console.log('[AUTO] tab visible, forcing tick');
          vO.PHHLn(f83);
        }
      };
      document.addEventListener('visibilitychange', vO9.view.autoModeVisibilityHandler);
    }
    vO.IqYWx(f83);
  }
  function f83() {
    const vO86 = {
      PBKdu: function (p1252, p1253) {
        return vO.iphrJ(p1252, p1253);
      },
      hvsbr: function (p1254, p1255) {
        return vO.HyMHn(p1254, p1255);
      },
      kFiVW: function (p1256, p1257) {
        return vO.DIhkX(p1256, p1257);
      },
      BAejw: function (p1258, p1259) {
        return vO.FWDqC(p1258, p1259);
      },
      eBedW: function (p1260, p1261) {
        return p1260 * p1261;
      },
      YsFNm: function (p1262, p1263) {
        return vO.NSbMD(p1262, p1263);
      },
      HfoEF: function (p1264) {
        return p1264();
      },
      PISOg: function (p1265) {
        return vO.yMhHO(p1265);
      },
      jwYwT: function (p1266, p1267) {
        return vO.oSkWn(p1266, p1267);
      },
      JHbJY: function (p1268) {
        return vO.fIRqv(p1268);
      }
    };
    if (!vO9.view.autoModeActive || vO9.destroyed) {
      vO.VsFaS(f84);
      return;
    }
    if (!vO9.camera.seen) {
      vO.piKBH(f91, 'Авто: ждём камеру...');
      return;
    }
    const v283 = document.querySelector('.m5tH6juu');
    const v284 = v283 && !v283.hasAttribute('disabled') && !v283.disabled;
    const v285 = vO9.view.autoModePhase;
    const v286 = vO.KYfDK(Date.now(), vO9.view.autoModePhaseStart);
    console.log('[AUTO] tick phase:', vO9.view.autoModePhase, '| btn:', v283 ? v284 ? 'enabled' : 'disabled' : vO.jfcdc);
    if (vO.MLMeS(vO9.view.autoModePhase, 'find')) {
      const v287 = vO.phSZc(f81);
      if (!v287.length) {
        vO.oIzZD(f91, 'Авто: нет несовпадений');
        return;
      }
      const v288 = v287[Math.floor(vO.DIhkX(Math.random(), v287.length))];
      const v289 = vO.xpBDE(vO9.camera.offsetX, vO.HHoCh(v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardX + 0.5, vO9.camera.zoom));
      const v290 = vO.UnLRJ(vO9.camera.offsetY, (v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardY + 0.5) * vO9.camera.zoom);
      const vO87 = {
        pixel: v287[Math.floor(vO.DIhkX(Math.random(), v287.length))],
        screenX: v289,
        screenY: v290
      };
      vO9.view.autoModeTarget = vO87;
      const vO88 = {
        boardX: v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardX,
        boardY: v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardY
      };
      vO9.view.autoModeLastBoardPixel = vO88;
      vO.tpzCp(f74, v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].rgb);
      f89();
      console.log('[AUTO] target:', v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardX, v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardY);
      vO.wOxbX(f91, 'Авто: цель [' + v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardX + ', ' + v287[Math.floor(vO.DIhkX(Math.random(), v287.length))].boardY + ']...');
      if (vO9.baseCanvas) {
        vO.JHOPm(f76, vO9.baseCanvas, v289, v290);
      }
      vO9.view.autoModePhase = 'wait_btn';
      vO9.view.autoModePhaseStart = Date.now();
      return;
    }
    if (vO.tUBTZ(vO9.view.autoModePhase, 'wait_btn')) {
      const v291 = vO9.view.autoModeTarget;
      if (vO9.baseCanvas && vO9.view.autoModeTarget) {
        vO.xAvVj(f76, vO9.baseCanvas, vO9.view.autoModeTarget.screenX, vO9.view.autoModeTarget.screenY);
      }
      if (!v284) {
        if (vO.RXGeH(v286, 360000)) {
          vO9.view.autoModePhase = 'find';
          return;
        }
        const v292 = v283 ? v283.querySelector('span')?.textContent || '' : '';
        console.log('[AUTO] wait_btn: btn not enabled, span:', v292);
        const v293 = v292.match(/(\d+)/);
        if (v293) {
          vO.GPMXA(f91, 'Авто: ждём кд... (~' + v293[1] + 'с)');
        }
        return;
      }
      vO.IrAou(f91, 'Авто: ставим [' + vO9.view.autoModeTarget.pixel.boardX + ', ' + vO9.view.autoModeTarget.pixel.boardY + ']...');
      v283.click();
      console.log('[AUTO] btn.click() fired');
      vO9.view.autoModePhase = 'confirming';
      vO9.view.autoModePhaseStart = Date.now();
      return;
    }
    if (vO.Xdvjk(vO9.view.autoModePhase, 'confirming')) {
      if (!v284) {
        console.log('[AUTO] placement confirmed, btn disabled');
        vO.wOxbX(f91, 'Авто: поставлен, жду кд...');
        vO9.view.autoModePhase = 'cooldown';
        vO9.view.autoModePhaseStart = Date.now();
        return;
      }
      if (v286 > 5000) {
        console.log('[AUTO] confirmation timeout, retrying');
        vO9.view.autoModePhase = 'find';
      }
      return;
    }
    if (vO9.view.autoModePhase === 'cooldown') {
      const v301 = v283 ? v283.querySelector('span')?.textContent || '' : '';
      const v302 = v301.includes('ОЖИДАНИЕ');
      console.log('[AUTO] cooldown spanText:', v301);
      if (vO.tqURs(!v283, !v302)) {
        console.log('[AUTO] cooldown done, going to find');
        vO.UBtWs(f91, 'Авто: кд завершён, следующий...');
        vO9.view.autoModePhase = 'find';
        return;
      }
      const v303 = v301.match(/(\d+)/);
      const v304 = v303 ? parseInt(v303[1]) : '?';
      vO.IWrWN(f91, 'Авто: ждём кд... (~' + v304 + 'с)');
      return;
    }
  }
  function f84() {
    vO9.view.autoModeActive = false;
    vO9.view.autoModePlacing = false;
    vO9.view.autoModePhase = 'find';
    vO9.view.autoModeTarget = null;
    vO9.view.autoModeLastBoardPixel = null;
    if (vO9.view.autoModeTimer) {
      clearInterval(vO9.view.autoModeTimer);
      vO9.view.autoModeTimer = null;
    }
    if (vO9.view.autoModeVisibilityHandler) {
      document.removeEventListener('visibilitychange', vO9.view.autoModeVisibilityHandler);
      vO9.view.autoModeVisibilityHandler = null;
    }
    vO9.settings.autoMode = false;
    vO.HOfiX(f61);
    vO.AvKJy(f89);
  }
  function f85(p1269) {
    const vO89 = {
      tQlMY: 'JSON must be an array or an object with templates[]',
      HiRIZ: '.m5tH6juu'
    };
    if (!vO9.view.autoPlace || vO9.destroyed) {
      vO.xKQfd(f80);
      return;
    }
    if (vO.cVkra(p1269.length, 0)) {
      p1269 = vO.yMhHO(f79);
      if (p1269.length === 0) {
        vO.obvuu(f80);
        return;
      }
    }
    const v310 = p1269.shift();
    f74(v310.rgb);
    const v311 = vO9.baseCanvas;
    if (v311) {
      vO.fjQoC(f76, v311, v310.screenX, v310.screenY);
    }
    setTimeout(() => {
      const v312 = document.querySelector('.m5tH6juu');
      if (v312) {
        v312.click();
      }
    }, 150);
    vO9.view.autoPlaceTimer = vO.KRXIw(setTimeout, () => f85(p1269), 600);
  }
  function f86() {
    if (vO9.view.autoPlace) {
      vO.HmwCi(f80);
    } else {
      vO9.view.autoPlace = true;
      vO.OHMat(f61);
      const v313 = vO.fziWo(f79);
      vO.wuwwE(f85, v313);
    }
  }
  function f87(p1270, p1271) {
    const vO90 = {
      TjbkY: function (p1272, p1273) {
        return vO.fEKXn(p1272, p1273);
      },
      boSzt: '4|3|0|1|2',
      ZYGVr: 'cooldown',
      ITwmA: function (p1274, p1275) {
        return vO.MpwUn(p1274, p1275);
      },
      WWEdP: '[AUTO] placement confirmed, btn disabled',
      iMgBm: function (p1276) {
        return vO.dOINT(p1276);
      }
    };
    if (!vO9.view.mismatchMode) {
      return;
    }
    const v314 = vO9.baseCanvas;
    if (!v314) {
      return;
    }
    let v315;
    try {
      v315 = v314.getContext('2d', { willReadFrequently: true });
    } catch {
      return;
    }
    if (!v315) {
      return;
    }
    const v318 = v314.getBoundingClientRect();
    if (!v318.width || !v318.height) {
      return;
    }
    const v319 = vO.rcKjA(v314.width, v318.width);
    const v320 = vO.dVNBT(v314.height, v318.height);
    const v321 = vO9.camera.zoom;
    const v322 = vO9.settings.mismatchStyle === 'fill';
    const v323 = vO9.settings.mismatchRadius ?? 50;
    const v324 = vO9.cursor.boardX;
    const v325 = vO9.cursor.boardY;
    const v326 = vO.YwUMZ(v323, v323);
    const vF9 = p1277 => {
      const vO92 = {
        liwPk: function (p1278, p1279) {
          return vO.yAuRC(p1278, p1279);
        },
        iOxny: function (p1280, p1281) {
          return vO.qQpEi(p1280, p1281);
        },
        VwODx: function (p1282, p1283) {
          return vO.oWUnu(p1282, p1283);
        }
      };
      const v327 = vO.bRowy(parseInt, p1277.slice(1, 3), 16);
      const v328 = vO.NPXeU(parseInt, p1277.slice(3, 5), 16);
      const vParseInt = parseInt(p1277.slice(5, 7), 16);
      return [
        v327,
        v328,
        vParseInt
      ];
    };
    const v329 = vO9.settings.mismatchColor ?? '#ff4646';
    const v330 = vO9.settings.mismatchOpacity ?? 0.7;
    const [v331, v332, v333] = vO.Mqapp(vF9, v329);
    p1270.save();
    if (v322) {
      p1270.fillStyle = 'rgba(' + v331 + ',' + v332 + ',' + v333 + ',' + v330 + ')';
    } else {
      p1270.strokeStyle = 'rgba(' + v331 + ',' + v332 + ',' + v333 + ',' + Math.min(1, v330 + 0.2) + ')';
      p1270.lineWidth = 1;
    }
    for (const v334 of p1271) {
      if (!v334.imageData) {
        continue;
      }
      const {
        sx: _0x5a6cde,
        sy: _0x2dc878
      } = vO.AHFCY(f70, v334);
      const v335 = vO.jYcHi(vO.YhAcs(vO.QeDMZ(_0x5a6cde, vO9.camera.zoom * 0.5), v318.left), v319);
      const v336 = (vO.CLQdU(_0x2dc878, vO9.camera.zoom * 0.5) - v318.top) * v320;
      const v337 = vO.UxfUB(vO9.camera.zoom, v319);
      const v338 = vO9.camera.zoom * v320;
      const v339 = Math.max(0, vO.PSAyG(vO.WvUus(vO9.cursor.boardX, v334.x), v323));
      const v340 = Math.min(vO.yWBwq(v334.width, 1), vO.SxZLP(vO9.cursor.boardX - v334.x, v323));
      const v341 = Math.max(0, vO.bULOO(vO.cKBpk(vO9.cursor.boardY, v334.y), v323));
      const v342 = Math.min(vO.ysSmW(v334.height, 1), vO.zUgNR(vO9.cursor.boardY - v334.y, v323));
      if (vO.EuCjb(v340, v339) || vO.RqaKR(v342, v341)) {
        continue;
      }
      const v343 = Math.max(0, Math.floor(vO.OINXw(v335, vO.EtHsn(v339, v337))));
      const v344 = Math.max(0, Math.floor(vO.loxoe(v336, v341 * v338)));
      const v345 = Math.min(v314.width, Math.ceil(vO.FybpZ(vO.FvfDl(v335, v340 * v337), 1)));
      const v346 = Math.min(v314.height, Math.ceil(vO.qZCjl(vO.qHbXP(v336, vO.aNQVW(v342, v338)), 1)));
      if (vO.VXMgc(v345, v343) || v346 <= v344) {
        continue;
      }
      let v347;
      try {
        v347 = v315.getImageData(v343, v344, v345 - v343, vO.gZfEI(v346, v344)).data;
      } catch {
        continue;
      }
      const v349 = v345 - v343;
      const v350 = v334.imageData.data;
      const v351 = Math.max(1, Math.floor(vO9.camera.zoom));
      for (let vV341 = v341; vO.VXMgc(vV341, v342); vV341++) {
        for (let vV339 = v339; vO.MrKMM(vV339, v340); vV339++) {
          const v352 = vO.WeBLD(v334.x + vV339, vO9.cursor.boardX);
          const v353 = vO.YKoSc(v334.y, vV341) - vO9.cursor.boardY;
          if (vO.zeENw(vO.zBbQL(vO.SuzTM(v352, v352), vO.MKZZV(v353, v353)), v326)) {
            continue;
          }
          const v354 = _0x5a6cde + Math.floor(vO.MKZZV(vV339, vO9.camera.zoom));
          const v355 = vO.OINXw(_0x2dc878, Math.floor(vO.IbfhF(vV341, vO9.camera.zoom)));
          const v356 = vO.cLonO(vO.FvfDl(vO.IRwJv(vV341, v334.width), vV339), 4);
          if (vO.KkOhG(v334.imageData.data[vO.rXnrI(v356, 3)], 16)) {
            continue;
          }
          const v357 = vO.UyoiK(Math.floor(vO.CLQdU(v335, vV339 * v337)), v343);
          const v358 = vO.jUDww(Math.floor(vO.zUCgE(v336, vV341 * v338)), v344);
          if (vO.iejPB(v357, 0) || vO.hUqOZ(v358, 0) || vO.RoPwn(v357, v345 - v343) || vO.LkLlv(v358, vO.klQHc(v346, v344))) {
            continue;
          }
          const v359 = vO.NNMdN(v358 * v349 + v357, 4);
          if (vO.hKHcA(v347[vO.JXexp(v359, 3)], 0)) {
            continue;
          }
          const vF722 = f72([
            v334.imageData.data[v356],
            v334.imageData.data[vO.xYIHe(v356, 1)],
            v334.imageData.data[vO.xOIgK(v356, 2)]
          ], [
            v347[v359],
            v347[v359 + 1],
            v347[vO.suwyt(v359, 2)]
          ]);
          if (vO.vaFSY(vF722, 1000)) {
            if (v322) {
              p1270.fillRect(v354, v355, v351, v351);
            } else {
              p1270.strokeRect(v354 + 0.5, vO.HQSgi(v355, 0.5), Math.max(1, vO.xMJwp(v351, 1)), Math.max(1, vO.JpPcr(v351, 1)));
            }
          }
        }
      }
    }
    p1270.restore();
  }
  function f88() {
    const v360 = vO9.overlay;
    const v361 = vO9.overlayCtx;
    if (vO.UCDNe(!v360, !v361)) {
      return;
    }
    v361.clearRect(0, 0, v360.width, v360.height);
    if (!f65() || !vO9.camera.seen) {
      if (vO9.camera.seen) {
        const v362 = vO9.loadedTemplates.filter(f66);
        vO.wNcWE(f87, v361, v362);
      }
      f91();
      vO.FLbvt(f67, v361);
      vO.JTAep(f68, v361);
      vO.hXywL(f69, v361);
      return;
    }
    const v363 = vO9.loadedTemplates.filter(f66);
    v361.save();
    v361.globalAlpha = vO9.settings.opacity;
    v361.imageSmoothingEnabled = false;
    for (const v364 of v363) {
      const {
        sx: _0x5a6ea2,
        sy: _0x334e07,
        sw: _0x1a44bd,
        sh: _0x51d36e
      } = vO.tfbZD(f70, v364);
      if (vO.yRmqO(_0x1a44bd, 0) || vO.VXMgc(_0x51d36e, 0)) {
        continue;
      }
      v361.drawImage(v364.renderSource, _0x5a6ea2, _0x334e07, _0x1a44bd, _0x51d36e);
    }
    v361.restore();
    f87(v361, v363);
    vO.TJFIc(f67, v361);
    vO.FLbvt(f68, v361);
    vO.tNuEB(f69, v361);
    vO.fziWo(f91);
  }
  function f89() {
    const vO93 = {
      ZAcpS: function (p1284, p1285) {
        return p1284(p1285);
      },
      ebxsM: function (p1286, p1287) {
        return p1286 === p1287;
      },
      cqneT: 'OVJAH',
      rvHOy: function (p1288) {
        return vO.kVgEK(p1288);
      }
    };
    if (vO9.drawScheduled || vO9.destroyed) {
      return;
    }
    vO9.drawScheduled = true;
    vO.yFwRz(requestAnimationFrame, () => {
      const vO94 = {
        ClGfx: function (p1289, p1290) {
          return vO93.ZAcpS(p1289, p1290);
        }
      };
      vO9.drawScheduled = false;
      vO93.rvHOy(f88);
    });
  }
  function f90() {
    if (!vO9.overlay) {
      return;
    }
    vO9.overlay.width = window.innerWidth;
    vO9.overlay.height = window.innerHeight;
    vO9.overlay.style.width = window.innerWidth + 'px';
    vO9.overlay.style.height = window.innerHeight + 'px';
    vO.KrrEV(f89);
  }
  function f91(p1292 = '') {
    if (!vO9.statusEl) {
      return;
    }
    const v366 = vO9.camera;
    const v367 = vO9.loadedTemplates.filter(f66).length;
    const vA13 = [
      'Изображения: ' + vO9.loadedTemplates.filter(f66).length + '/' + vO9.loadedTemplates.length + '/' + vO9.templates.length,
      'Ошибок: ' + vO9.failedTemplates.length,
      'Палитра: ' + vO9.palette.length + (vO9.paletteSource ? ' (' + vO9.paletteSource + ')' : ''),
      'Видимость: ' + (vO9.settings.visible ? 'да' : 'нет') + ' | Мини: ' + (vO9.settings.miniMode ? 'да' : 'нет'),
      'Зум: ' + vO9.camera.zoom.toFixed(3) + ' | Смещение: ' + vO9.camera.offsetX.toFixed(1) + ', ' + vO9.camera.offsetY.toFixed(1)
    ];
    if (vO9.view.mismatchMode && vO9.camera.zoom < 5) {
      vA13.push('Несовпадения: увеличьте до 5x');
    } else if (vO9.view.mismatchMode) {
      vA13.push('Несовпадения: активно');
    }
    if (p1292) {
      vA13.push(p1292);
    }
    vO9.statusEl.textContent = vA13.join('\n');
  }
  function f92() {
    const vO95 = {
      SlWtV: function (p1293, p1294) {
        return p1293(p1294);
      },
      HCjXq: function (p1295, p1296) {
        return vO.xUVVU(p1295, p1296);
      },
      dLeAi: 'dsSJp',
      hwHqO: function (p1297, p1298) {
        return vO.bWXri(p1297, p1298);
      },
      OnyXO: function (p1299, p1300) {
        return vO.KRlsE(p1299, p1300);
      },
      eBWqi: function (p1301, p1302) {
        return p1301 + p1302;
      },
      ffnDB: function (p1303) {
        return vO.yWdNs(p1303);
      }
    };
    const v368 = CanvasRenderingContext2D.prototype;
    vO9.drawImageOriginal = v368.drawImage;
    v368.drawImage = function (..._0x9409c7) {
      if (!vO9.destroyed && vO9.baseCanvas && vO95.HCjXq(this.canvas, vO9.baseCanvas)) {
        try {
          const v369 = this.getTransform();
          const v370 = vO9.baseCanvas.getBoundingClientRect();
          const v371 = v370.width || window.innerWidth;
          const v372 = vO9.baseCanvas.width / v371 || window.devicePixelRatio || 1;
          vO9.camera.rawA = v369.a;
          vO9.camera.rawD = v369.d;
          vO9.camera.rawE = v369.e;
          vO9.camera.rawF = v369.f;
          vO9.camera.dpr = v372;
          vO9.camera.zoom = v369.a / v372;
          vO9.camera.offsetX = vO95.hwHqO(vO95.OnyXO(v369.e, v372), v370.left);
          vO9.camera.offsetY = vO95.eBWqi(v369.f / v372, v370.top);
          vO9.camera.seen = true;
          f59();
          vO95.ffnDB(f89);
        } catch (e7) {
          console.error('[PB Overlay] sync error:', e7);
        }
      }
      return vO9.drawImageOriginal.apply(this, _0x9409c7);
    };
  }
  function f93() {
    const v373 = CanvasRenderingContext2D.prototype;
    if (vO9.drawImageOriginal) {
      v373.drawImage = vO9.drawImageOriginal;
      vO9.drawImageOriginal = null;
    }
  }
  async function f94() {
    const vO96 = {
      rvJFp: function (p1304) {
        return vO.yWdNs(p1304);
      },
      IerKj: function (p1305, p1306) {
        return vO.xbRDA(p1305, p1306);
      },
      oBsgY: function (p1307, p1308) {
        return vO.ujwvL(p1307, p1308);
      }
    };
    const v374 = ++vO9.reloadToken;
    try {
      f53('Перезагрузка…');
      vO.TgTlH(f91, 'Перезагрузка...');
      vO9.templates = [];
      vO9.loadedTemplates = [];
      vO9.failedTemplates = [];
      vO9.packs = [];
      vO9.groupIndex = new Map();
      vO.RlADx(f62);
      vO.pxYPg(f63);
      vO.XBjUS(f64);
      f89();
      const v375 = await vO.pxYPg(f37);
      if (vO.WdCTi(v374, vO9.reloadToken)) {
        return;
      }
      vO9.palette = v375;
      vO9.paletteHash = vO.yatIF(f32, v375);
      await vO.xLaPW(f47);
      if (v374 !== vO9.reloadToken) {
        return;
      }
      await vO.qWWPg(f52, v374);
      if (vO.nrrto(v374, vO9.reloadToken)) {
        return;
      }
      f53('');
      vO.hoYYP(f91, 'Загружено');
      f89();
      vO.wNcWE(f2, 'Templates loaded:', vO9.loadedTemplates);
    } catch (e8) {
      if (vO.OkEUB(v374, vO9.reloadToken)) {
        return;
      }
      console.error('[PB Overlay] Reload failed:', e8);
      vO.MWNnx(f53, '');
      vO.ZUbMP(f91, 'Ошибка: ' + e8.message);
      vO.IsESv(f62);
      vO.GlWVA(f63);
      vO.xKQfd(f64);
    }
  }
  async function f95() {
    if (!vO9.failedTemplates.length) {
      return;
    }
    const v377 = [...vO9.failedTemplates].map(p1309 => p1309.tpl);
    vO9.failedTemplates = [];
    for (const v378 of v377) {
      try {
        const v379 = await vO.KRXHx(f29, v378.src);
        let vV379 = v379;
        let v380 = v379.naturalWidth;
        let v381 = v379.naturalHeight;
        let v382 = null;
        if (vO.ZjOIg(v378.quantize, false) && vO9.palette.length) {
          const v383 = vO.FOcNX(f44, v379, v378, vO9.palette);
          let v384 = vO9.quantizedCache.get(v383);
          if (!v384) {
            v384 = vO.gAnqf(f45, v379, vO9.palette);
            vO9.quantizedCache.set(v383, v384);
          }
          vV379 = v384.canvas;
          v380 = v384.width;
          v381 = v384.height;
          v382 = v384.imageData;
        }
        const vO97 = { ...v378 };
        vO97.img = v379;
        vO97.renderSource = vV379;
        vO97.width = v380;
        vO97.height = v381;
        vO97.imageData = v382;
        vO9.loadedTemplates.push(vO97);
      } catch (e9) {
        const vO98 = {
          tpl: v378,
          error: e9
        };
        vO9.failedTemplates.push(vO98);
      }
    }
    vO9.loadedTemplates.sort((p1310, p1311) => p1310.z - p1311.z || p1310.localId - p1311.localId);
    f64();
    vO.hXywL(f91, 'Повтор провальных изображений');
    vO.dhxMl(f89);
  }
  function f96() {
    vO9.view.flashUntil = vO.Evuaf(performance.now(), 1200);
    vO.CFxZO(f89);
    vO.pvGPD(setTimeout, f89, 1250);
  }
  function f97(p1312) {
    const vVO99 = { HdIGm: 'fallback-scan' };
    if (p1312.target && (p1312.target.tagName === 'INPUT' || vO.xJzoM(p1312.target.tagName, 'TEXTAREA') || p1312.target.isContentEditable)) {
      return;
    }
    if (p1312.ctrlKey || p1312.altKey || p1312.metaKey) {
      return;
    }
    if (vO.xbRDA(p1312.code, 'KeyM')) {
      vO.bevLc(f20, 'menuOpen', !vO9.settings.menuOpen);
      vO.DIXOL(f61);
    } else if (p1312.code === 'KeyH') {
      f20('visible', !vO9.settings.visible);
      vO.ZYZWn(f61);
      vO.ZYZWn(f89);
    } else if (vO.kSlig(p1312.code, 'BracketLeft')) {
      vO.AszLY(f20, 'opacity', vO.xAvVj(f3, vO.tBKtX(vO9.settings.opacity, 0.05), 0, 1));
      vO.dhYOn(f61);
      f89();
    } else if (vO.awMEK(p1312.code, 'BracketRight')) {
      vO.vyEyE(f20, 'opacity', f3(vO9.settings.opacity + 0.05, 0, 1));
      vO.cbmUX(f61);
      vO.zTAvW(f89);
    } else if (vO.JMOPm(p1312.code, 'KeyR')) {
      vO.RQlGf(f94);
    } else if (vO.iLzqB(p1312.code, 'KeyP')) {
      vO9.view.peekHeld = true;
      vO.DBpXu(f89);
    } else if (vO.YjNPx(p1312.code, 'KeyX')) {
      f20('crosshair', !vO9.settings.crosshair);
      vO.aOPEq(f61);
      vO.sIVZU(f89);
    } else if (p1312.code === 'KeyG') {
      vO9.view.mismatchMode = !vO9.view.mismatchMode;
      f61();
      vO.CFxZO(f89);
    }
  }
  function f98(p1313) {
    const vO101 = {
      beGze: '0|1|5|3|2|4',
      wVTaw: function (p1314) {
        return vO.vQqww(p1314);
      },
      KfcyY: function (p1315) {
        return p1315();
      }
    };
    if (vO.AZFrC(p1313.key, 'p') || p1313.key === 'P') {
      vO9.view.peekHeld = false;
      vO.ReGMk(f89);
    }
  }
  async function f99() {
    const vO102 = {
      OsmcI: function (p1316, p1317) {
        return vO.CBkcr(p1316, p1317);
      }
    };
    if (!vO9.settings.autoReloadJson || !vO9.jsonUrls.length) {
      return;
    }
    try {
      for (const v392 of vO9.jsonUrls) {
        const v393 = await vO.MOuql(f25, v392, 10000);
        const v394 = vO.ujwvL(f5, v393);
        if (vO9.lastJsonFingerprint.get(v392) && vO9.lastJsonFingerprint.get(v392) !== v394) {
          vO.tGOXU(f91, 'JSON изменился, перезагружаю...');
          await vO.IqYWx(f94);
          return;
        }
      }
    } catch (e10) {
      console.warn('[PB Overlay] Auto-reload check failed:', e10);
    }
  }
  async function f100() {
    const v395 = vO.DEWil(f40);
    if (!v395 || vO.DbpoP(v395, vO9.baseCanvas)) {
      return;
    }
    vO9.baseCanvas = v395;
    vO9.camera.seen = false;
    f91('Холст перепривязан');
    f89();
  }
  async function f101() {
    try {
      const v396 = vO.IqYWx(f36);
      const vF32 = f32(v396);
      if (v396.length && vO.VAVwL(vF32, vO9.paletteHash)) {
        vO9.palette = v396;
        vO9.paletteHash = vF32;
        f91('Палитра изменилась, перезагружаю...');
        await vO.AvKJy(f94);
      }
    } catch (e11) {
      console.warn('[PB Overlay] Palette refresh failed:', e11);
    }
  }
  function f102() {
    const vO103 = {
      nrNVl: function (p1318, p1319) {
        return vO.HUzKZ(p1318, p1319);
      },
      FFQbE: 'Авто: нет несовпадений',
      QScEw: function (p1320, p1321, p1322) {
        return p1320(p1321, p1322);
      },
      HQijG: function (p1323, p1324) {
        return vO.zeENw(p1323, p1324);
      }
    };
    return;
    vO9.urlMutationInstalled = true;
    const v397 = history.pushState;
    const v398 = history.replaceState;
    function f103() {
      const vO104 = {
        SFZUh: function (p1325, p1326) {
          return vO.iJnMu(p1325, p1326);
        },
        edaNE: function (p1327, p1328) {
          return p1327 + p1328;
        },
        NCXHl: function (p1329, p1330) {
          return vO.MKZZV(p1329, p1330);
        },
        uFKNE: function (p1331, p1332) {
          return p1331 + p1332;
        },
        AJtHn: function (p1333, p1334) {
          return vO.zBbQL(p1333, p1334);
        },
        NYLRz: function (p1335, p1336) {
          return vO.NhqrY(p1335, p1336);
        },
        jBQOo: function (p1337, p1338) {
          return p1337 + p1338;
        },
        XCakb: function (p1339, p1340) {
          return p1339(p1340);
        }
      };
      const v399 = vO.HOfiX(f23);
      const v400 = vO9.jsonUrls.join('|');
      const v401 = v399.join('|');
      if (v400 !== v401) {
        vO9.jsonUrls = v399;
        const v402 = vO9.uiShadow?.getElementById('pb-json-caption');
        if (v402) {
          v402.textContent = vO.MAhIg(f6, vO9.jsonUrls.join(' | '), 52);
        }
        vO.jllEo(f94);
      } else {
        vO.zZcyj(f100);
      }
    }
    history.pushState = function (..._0x67702c) {
      const v405 = history.pushState();
      vO103.QScEw(setTimeout, f103, 0);
      return v405;
    };
    history.replaceState = function (..._0x14c421) {
      const v406 = history.replaceState();
      vO.AVdYS(setTimeout, f103, 0);
      return v406;
    };
    window.addEventListener('popstate', f103, true);
  }
  function f104() {
    window.__pbOverlayDestroy = f105;
    window.__pbOverlayReload = f94;
    window.__pbOverlayState = vO9;
  }
  function f105() {
    vO9.destroyed = true;
    vO9.reloadToken++;
    if (vO9.view.autoPlaceTimer) {
      vO.RfDdL(clearTimeout, vO9.view.autoPlaceTimer);
      vO9.view.autoPlaceTimer = null;
    }
    vO9.view.autoPlace = false;
    vO.CFxZO(f93);
    window.removeEventListener('resize', f90, true);
    window.removeEventListener('keydown', f97, true);
    window.removeEventListener('keyup', f98, true);
    window.removeEventListener('mousedown', f75, true);
    window.removeEventListener('mousemove', f57, true);
    window.removeEventListener('mouseup', f58, true);
    vO.oSkWn(clearInterval, vO9.autoReloadTimer);
    vO.pERJK(clearInterval, vO9.canvasRebindTimer);
    vO.HhlUU(clearInterval, vO9.paletteRecheckTimer);
    for (const v408 of vO9.observers) {
      try {
        v408.disconnect();
      } catch {
      }
    }
    vO9.observers = [];
    vO9.overlay?.remove();
    vO9.overlayHost?.remove();
    vO9.uiHost?.remove();
    vO9.imageCache.clear();
    vO9.quantizedCache.clear();
    vO.YUWxY(f2, 'Destroyed');
  }
  async function f106() {
    try {
      vO9.settings = vO.sIVZU(f17);
      vO9.jsonUrls = f23();
      if (!vO9.jsonUrls.length) {
        vO.hsWci(f2, 'No jsontemplate= param found. Script idle.');
        return;
      }
      vO9.baseCanvas = await vO.RQlGf(f41);
      vO.CZWMo(f54);
      vO.ZYZWn(f56);
      f55();
      vO.RQlGf(f92);
      vO.DEWil(f102);
      vO.dOINT(f104);
      window.addEventListener('resize', f90, true);
      window.addEventListener('keydown', f97, true);
      window.addEventListener('keyup', f98, true);
      window.addEventListener('mousedown', f75, true);
      vO9.autoReloadTimer = vO.LMhrO(setInterval, f99, 30000);
      vO9.canvasRebindTimer = vO.pvGPD(setInterval, f100, 2500);
      vO9.paletteRecheckTimer = vO.GIwBS(setInterval, f101, 4000);
      await f94();
      vO.KZFRQ(f90);
      vO.fQjma(f2, 'Started with JSON:', vO9.jsonUrls);
    } catch (e12) {
      console.error('[PB Overlay] Init failed:', e12);
      f91('Init error: ' + e12.message);
    }
  }
  vO.JzEBY(f106);
}());