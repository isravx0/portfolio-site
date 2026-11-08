/* Small, local demonstrations of each project's main interaction. No API keys or backend. */
(() => {
  const copy = {
    'Try the mini app': ['Probeer de mini-app', 'جرّب التطبيق المصغّر'],
    'Interactive demo': ['Interactieve demo', 'عرض تفاعلي'],
    'Demo data · changes reset when you close this window': ['Voorbeeldgegevens · wijzigingen vervallen bij sluiten', 'بيانات تجريبية · تُمسح التغييرات عند إغلاق النافذة'],
    'Close demo': ['Sluit demo', 'إغلاق العرض'], 'Reset demo': ['Herstart demo', 'إعادة البدء'],
    'Gym & workout': ['Gym & training', 'النادي والتمارين'],
    'Log your next set.': ['Registreer je volgende set.', 'سجّل مجموعتك التالية.'],
    'Exercise': ['Oefening', 'التمرين'], 'Bench press': ['Bankdrukken', 'ضغط الصدر'],
    'Barbell squat': ['Barbell squat', 'القرفصاء بالبار'], 'Dumbbell curl': ['Dumbbell curl', 'ثني الذراع بالدمبل'],
    'Weight (kg)': ['Gewicht (kg)', 'الوزن (كغ)'], 'Reps': ['Herhalingen', 'التكرارات'],
    'Log set': ['Registreer set', 'تسجيل المجموعة'], 'Sets': ['Sets', 'المجموعات'],
    'Volume': ['Volume', 'الحجم'], 'Session complete': ['Training afgerond', 'اكتمل التمرين'],
    'Finish workout': ['Rond training af', 'إنهاء التمرين'], 'Start new session': ['Start nieuwe training', 'بدء تمرين جديد'],
    'Completed sets': ['Voltooide sets', 'المجموعات المكتملة'], 'Remove': ['Verwijder', 'إزالة'],
    'Add a set to start your session.': ['Voeg een set toe om je training te starten.', 'أضف مجموعة لبدء التمرين.'],
    'Plan. Focus. Finish.': ['Plannen. Focussen. Afronden.', 'خطّط. ركّز. أنجز.'],
    'Add a task': ['Voeg een taak toe', 'أضف مهمة'], 'Task title': ['Taaknaam', 'عنوان المهمة'],
    'Add': ['Voeg toe', 'إضافة'], 'All': ['Alles', 'الكل'], 'Active': ['Actief', 'النشطة'],
    'Done': ['Afgerond', 'المكتملة'], 'No tasks in this view.': ['Geen taken in deze weergave.', 'لا توجد مهام في هذا العرض.'],
    'Design the dashboard': ['Ontwerp het dashboard', 'صمّم لوحة المعلومات'],
    'Review the API': ['Controleer de API', 'راجع واجهة البرمجة'],
    'Ship the first version': ['Lever de eerste versie op', 'أطلق النسخة الأولى'],
    'A clearer view of your money.': ['Meer inzicht in je geld.', 'صورة أوضح لأموالك.'],
    'Income': ['Inkomsten', 'الدخل'], 'Expenses': ['Uitgaven', 'المصروفات'],
    'Available': ['Beschikbaar', 'المتاح'], 'Description': ['Omschrijving', 'الوصف'],
    'Amount (€)': ['Bedrag (€)', 'المبلغ (€)'], 'Type': ['Type', 'النوع'],
    'Expense': ['Uitgave', 'مصروف'], 'Transaction': ['Transactie', 'المعاملة'],
    'Add transaction': ['Voeg transactie toe', 'إضافة معاملة'], 'Transactions': ['Transacties', 'المعاملات'],
    'Monthly income': ['Maandinkomen', 'الدخل الشهري'], 'Groceries': ['Boodschappen', 'البقالة'],
    'Train ticket': ['Treinkaartje', 'تذكرة القطار'], 'Balance': ['Saldo', 'الرصيد'],
    'Small steps, every day.': ['Kleine stappen, elke dag.', 'خطوات صغيرة كل يوم.'],
    'Read': ['Lezen', 'القراءة'], 'Walk': ['Wandelen', 'المشي'], 'Water': ['Water drinken', 'شرب الماء'],
    'This week': ['Deze week', 'هذا الأسبوع'], 'Mon': ['Ma', 'الإثنين'], 'Tue': ['Di', 'الثلاثاء'],
    'Wed': ['Wo', 'الأربعاء'], 'Thu': ['Do', 'الخميس'], 'Fri': ['Vr', 'الجمعة'], 'Sat': ['Za', 'السبت'], 'Sun': ['Zo', 'الأحد'],
    'Tap a day to track your habit.': ['Tik op een dag om je gewoonte bij te houden.', 'اضغط على يوم لتسجيل عادتك.'],
    'Weekly progress': ['Weekvoortgang', 'التقدم الأسبوعي'],
    'Explore your little garden.': ['Verken je kleine tuin.', 'استكشف حديقتك الصغيرة.'],
    'Move with the arrows and collect carrots.': ['Beweeg met de pijlen en verzamel wortels.', 'تحرّك بالأسهم واجمع الجزر.'],
    'Carrots': ['Wortels', 'الجزر'], 'Decorate garden': ['Versier de tuin', 'زيّن الحديقة'],
    'Garden decorated!': ['Tuin versierd!', 'تم تزيين الحديقة!'],
    'Collect 3 carrots to decorate.': ['Verzamel 3 wortels om te versieren.', 'اجمع 3 جزرات لتزيين الحديقة.'],
    'Up': ['Omhoog', 'أعلى'], 'Down': ['Omlaag', 'أسفل'], 'Left': ['Links', 'يسار'], 'Right': ['Rechts', 'يمين'],
    'Conversation playground': ['Probeer een gesprek', 'مساحة لتجربة المحادثة'],
    'Scripted demo · no live AI or microphone': ['Vooraf ingestelde demo · geen live AI of microfoon', 'عرض بإجابات جاهزة · دون ذكاء اصطناعي مباشر أو ميكروفون'],
    'Ask about my projects': ['Vraag naar mijn projecten', 'اسأل عن مشاريعي'],
    'What can VYRO do?': ['Wat kan VYRO?', 'ماذا يقدم VYRO؟'],
    'What is Nexora?': ['Wat is Nexora?', 'ما هو Nexora؟'],
    'Message': ['Bericht', 'الرسالة'], 'Send': ['Verstuur', 'إرسال'],
    'Hi! Ask me about VYRO, Nexora, or Monvex.': ['Hoi! Vraag me iets over VYRO, Nexora of Monvex.', 'مرحبًا! اسألني عن VYRO أو Nexora أو Monvex.'],
    'VYRO is a gym and workout journal. Build routines, log sets, and track your progress offline.': ['VYRO is een gym- en trainingslogboek. Maak schema’s, registreer sets en volg je voortgang offline.', 'VYRO سجل للنادي والتمارين. أنشئ برامجك وسجّل المجموعات وتابع تقدمك دون اتصال.'],
    'Nexora brings tasks, calendar views, and connected-service flows into one productivity workspace.': ['Nexora brengt taken, kalenderweergaven en integraties samen in één productiviteitswerkruimte.', 'يجمع Nexora المهام والتقويم ومسارات التكامل في مساحة واحدة لتنظيم العمل.'],
    'Monvex helps you follow income, expenses, and budgets on mobile and web.': ['Monvex helpt je inkomsten, uitgaven en budgetten te volgen op mobiel en web.', 'يساعدك Monvex على متابعة الدخل والمصروفات والميزانية على الهاتف والويب.'],
    'This small demo knows VYRO, Nexora, and Monvex. Try one of those names.': ['Deze kleine demo kent VYRO, Nexora en Monvex. Probeer een van die namen.', 'يعرف هذا العرض المصغّر VYRO وNexora وMonvex. جرّب أحد هذه الأسماء.'],
    'Try it yourself': ['Probeer het zelf', 'جرّبه بنفسك'],
    'Tasks': ['Taken', 'المهام'],
    'I turn ideas into': ['Ik vertaal ideeën naar', 'أحوّل الأفكار إلى'],
    'clear, reliable digital products.': ['heldere, betrouwbare digitale producten.', 'منتجات رقمية واضحة وموثوقة.'],
    'Monvex — Personal Budgeting': ['Monvex — Persoonlijk budgetbeheer', 'Monvex — إدارة الميزانية الشخصية'],
    'Try the mini app ↗': ['Probeer de mini-app ↗', 'جرّب التطبيق المصغّر ↗'],
    'A mobile and web budgeting application for understanding your balance, tracking transactions, and planning ahead.': ['Een budgetapp voor mobiel en web om je saldo te begrijpen, transacties bij te houden en vooruit te plannen.', 'تطبيق ميزانية للهاتف والويب لفهم رصيدك ومتابعة المعاملات والتخطيط للمستقبل.'],
    'Understand what is available to spend and compare planned and actual spending across budget periods.': ['Krijg inzicht in wat je kunt besteden en vergelijk geplande en werkelijke uitgaven per budgetperiode.', 'اعرف المبلغ المتاح للإنفاق وقارن الإنفاق المخطط والفعلي خلال فترات الميزانية.'],
    'Vue 3 and Vite power the web application. The mobile version uses Ionic and TypeScript, with views for transactions, budgets, and savings goals.': ['De webapp is gebouwd met Vue 3 en Vite. De mobiele versie gebruikt Ionic en TypeScript, met overzichten voor transacties, budgetten en spaardoelen.', 'تعمل نسخة الويب باستخدام Vue 3 وVite، وتستخدم نسخة الهاتف Ionic وTypeScript مع صفحات للمعاملات والميزانيات وأهداف الادخار.'],
    'Monthly budget periods': ['Maandelijkse budgetperiodes', 'فترات ميزانية شهرية'],
    'Savings goals and category budgets': ['Spaardoelen en categoriebudgetten', 'أهداف الادخار وميزانيات الفئات'],
    'Twelve-month budget forecast on web': ['Budgetprognose voor twaalf maanden op web', 'توقعات الميزانية لاثني عشر شهرًا على الويب'],
    'Web repository ↗': ['Web-repository ↗', 'مستودع الويب ↗'],
    'Mobile repository ↗': ['Mobiele repository ↗', 'مستودع الهاتف ↗'],
    'LIVE PLAYGROUND': ['INTERACTIEVE SPEELRUIMTE', 'مساحة تفاعلية'],
    'LIVE DEMO': ['LIVE DEMO', 'عرض تفاعلي'],
    'GYM / WORKOUT JOURNAL': ['GYM / TRAININGSLOGBOEK', 'النادي / سجل التمارين'],
    '3 SETS · UPPER BODY': ['3 SETS · BOVENLICHAAM', '3 مجموعات · الجزء العلوي'],
    'PRODUCTIVITY / WEB APPLICATION': ['PRODUCTIVITEIT / WEBAPPLICATIE', 'إنتاجية / تطبيق ويب'],
    'Browse': ['Ontdek', 'تصفّح'], 'Favorites': ['Favorieten', 'المفضلة'],
    'Search movies': ['Zoek films', 'ابحث عن أفلام'],
    'Sample movie collection · fictional titles': ['Voorbeeldcollectie · fictieve filmtitels', 'مجموعة تجريبية · عناوين أفلام خيالية'],
    'Save favorite': ['Bewaar favoriet', 'حفظ في المفضلة'], 'Remove favorite': ['Verwijder favoriet', 'إزالة من المفضلة'],
    'No movies found.': ['Geen films gevonden.', 'لم يتم العثور على أفلام.'],
    'Science fiction': ['Sciencefiction', 'خيال علمي'], 'Drama': ['Drama', 'دراما'], 'Thriller': ['Thriller', 'إثارة'],
    'Explore the energy potential.': ['Verken de energieopbrengst.', 'استكشف إنتاج الطاقة.'],
    'Panels': ['Panelen', 'الألواح'], 'Panel power (W)': ['Vermogen per paneel (W)', 'قدرة اللوح (واط)'],
    'Sun hours / day': ['Zonuren / dag', 'ساعات الشمس / اليوم'],
    'Annual estimate': ['Jaarlijkse schatting', 'التقدير السنوي'],
    'Illustrative estimate, not a site assessment.': ['Illustratieve schatting, geen locatiebeoordeling.', 'تقدير توضيحي وليس تقييمًا للموقع.'],
    'Estimate = panels × watts × sun hours × 365 × 0.8 / 1000': ['Schatting = panelen × watt × zonuren × 365 × 0,8 / 1000', 'التقدير = الألواح × الواط × ساعات الشمس × 365 × 0.8 / 1000'],
    'The 0.8 factor illustrates system losses.': ['De factor 0,8 illustreert systeemverliezen.', 'يمثّل المعامل 0.8 خسائر النظام افتراضيًا.'],
    'Your next idea, in motion.': ['Je volgende idee, in beweging.', 'فكرتك القادمة، تنبض بالحياة.'],
    'DEVELOPMENT / DESIGN / INTERACTION': ['ONTWIKKELING / DESIGN / INTERACTIE', 'تطوير / تصميم / تفاعل'],
    'Open the workspace': ['Open de werkruimte', 'افتح مساحة العمل'],
    'Explore the mini apps': ['Ontdek de mini-apps', 'استكشف التطبيقات المصغّرة'],
    'Built to explore.': ['Gebouwd om te ontdekken.', 'مصمّم للاستكشاف.'],
    'Real projects.': ['Echte projecten.', 'مشاريع حقيقية.'],
    'A hands-on portfolio.': ['Een portfolio om uit te proberen.', 'معرض أعمال يمكنك تجربته.'],
    'Open a mini app. Explore the interaction. Then discover how it was built.': ['Open een mini-app. Probeer de interactie. Ontdek daarna hoe het project is gebouwd.', 'افتح تطبيقًا مصغّرًا وجرّب التفاعل، ثم اكتشف كيف تم بناؤه.'],
  };
  Object.entries(copy).forEach(([en, [nl, ar]]) => { window.portfolioTranslations[en] = { nl, ar }; });
  const t = (key) => window.portfolioI18n?.t(key) || key;
  const locale = () => window.portfolioI18n?.language || 'nl';
  const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const text = (key) => escape(t(key));
  const money = (n) => new Intl.NumberFormat(locale(), {style:'currency', currency:'EUR', maximumFractionDigits:0}).format(n);
  const number = (n) => new Intl.NumberFormat(locale()).format(n);
  const names = {vyro:'VYRO', nexora:'Nexora', bloomly:'Bloomly', 'monvex-mobile':'Monvex · Mobile', 'monvex-web':'Monvex · Web', 'mochi-garden':'Mochi’s Garden', assistant:'JARVIS', movies:'Movies', solar:'Solar'};
  const exerciseNames = ['Bench press', 'Barbell squat', 'Dumbbell curl'];
  const exerciseImages = ['bench-press.png', 'squat.png', 'curl.png'];
  const seed = (kind) => ({kind, sets:[], exercise:0, finished:false, filter:'all', query:'',favorites:new Set(),panels:10,watts:400,sun:3,tasks:[{id:1,label:'Design the dashboard',done:true,seed:true},{id:2,label:'Review the API',done:false,seed:true},{id:3,label:'Ship the first version',done:false,seed:true}],nextId:4,transactions:[{id:1,label:'Monthly income',amount:2400,seed:true},{id:2,label:'Groceries',amount:-75,seed:true},{id:3,label:'Train ticket',amount:-25,seed:true}],habits:[[true,true,false,false,false,false,false],[true,false,true,false,false,false,false],[true,true,true,false,false,false,false]],x:0,y:2,carrots:new Set(['2,2','4,1','1,4','3,3']),collected:0,decorated:false,messages:[{role:'assistant',key:'Hi! Ask me about VYRO, Nexora, or Monvex.'}]});
  const model = {
    addSet(s, weight, reps) { if(s.finished || !Number.isFinite(weight) || weight<0 || weight>500 || !Number.isInteger(reps) || reps<1 || reps>100) return false; s.sets.push({exercise:s.exercise,weight,reps}); return true; },
    volume(s) { return s.sets.reduce((sum,set)=>sum+set.weight*set.reps,0); },
    balance(s) { return s.transactions.reduce((sum,row)=>sum+row.amount,0); },
    solar(s) { return s.panels*s.watts*s.sun*365*0.8/1000; },
    addTransaction(s,label,amount,type) { if(!label.trim() || !Number.isFinite(amount) || amount<=0 || amount>100000) return false; s.transactions.push({id:s.nextId++,label:label.trim().slice(0,70),amount:type==='income'?amount:-amount}); return true; },
    move(s,dx,dy) { s.x=Math.max(0,Math.min(4,s.x+dx));s.y=Math.max(0,Math.min(4,s.y+dy)); if(s.carrots.delete(`${s.x},${s.y}`))s.collected++; },
    reply(message) { const value=message.toLowerCase(); return /vyro|gym|workout|تمرين|تدريب/.test(value)?'VYRO is a gym and workout journal. Build routines, log sets, and track your progress offline.':/nexora|task|taak|مهام/.test(value)?'Nexora brings tasks, calendar views, and connected-service flows into one productivity workspace.':/monvex|money|budget|geld|مال/.test(value)?'Monvex helps you follow income, expenses, and budgets on mobile and web.':'This small demo knows VYRO, Nexora, and Monvex. Try one of those names.'; },
  };
  // Pure state transitions are shared by the UI and the regression checks.
  window.portfolioMiniApps = {seed,model};
  let dialog, state, opener;
  const metric = (label,value) => `<div class="mini-metric"><span>${text(label)}</span><strong>${escape(value)}</strong></div>`;
  const field = (label,input) => `<label class="mini-field"><span>${text(label)}</span>${input}</label>`;
  const button = (action,label,extra='') => `<button type="button" data-action="${action}" ${extra}>${text(label)}</button>`;
  const rowLabel = (row) => row.seed ? text(row.label) : escape(row.label);

  function workout() {
    return `<div class="mini-workout-hero"><img src="images/projects/${exerciseImages[state.exercise]}" alt="${text(exerciseNames[state.exercise])}"><div><p class="mini-overline">${text('Gym & workout')}</p><h3>${text(state.finished?'Session complete':'Log your next set.')}</h3><p>${text(exerciseNames[state.exercise])}</p></div></div><div class="mini-metrics">${metric('Sets',number(state.sets.length))}${metric('Volume',number(model.volume(state))+' kg')}</div>`+
    (state.finished?button('reset','Start new session','class="mini-primary"'):`<form data-form="set" class="mini-form">${field('Exercise',`<select name="exercise">${exerciseNames.map((name,i)=>`<option value="${i}" ${i===state.exercise?'selected':''}>${text(name)}</option>`).join('')}</select>`)}<div class="mini-field-pair">${field('Weight (kg)','<input name="weight" type="number" min="0" max="500" step="0.5" value="40" required>')}${field('Reps','<input name="reps" type="number" min="1" max="100" step="1" value="10" required>')}</div><button class="mini-primary">${text('Log set')} +</button></form>`)+
    `<div class="mini-section-title"><h4>${text('Completed sets')}</h4><span>${number(state.sets.length)}</span></div><div class="mini-list">${state.sets.map((set,i)=>`<div class="mini-list-row"><span class="mini-set-number">${number(i+1)}</span><div><strong>${text(exerciseNames[set.exercise])}</strong><small dir="ltr">${set.weight} kg × ${set.reps}</small></div>${state.finished?'✓':button('remove-set','Remove',`data-index="${i}" class="mini-subtle"`)}</div>`).join('')||`<p class="mini-empty">${text('Add a set to start your session.')}</p>`}</div>${!state.finished?button('finish','Finish workout',`class="mini-secondary" ${!state.sets.length?'disabled':''}`):''}`;
  }
  function tasks() {
    const complete=state.tasks.filter(task=>task.done).length;
    const visible=state.tasks.filter(task=>state.filter==='all'||(state.filter==='done'?task.done:!task.done));
    return `<p class="mini-overline">${text('Productivity workspace')}</p><h3>${text('Plan. Focus. Finish.')}</h3><div class="mini-progress"><i style="width:${state.tasks.length?complete/state.tasks.length*100:0}%"></i></div><p class="mini-muted" role="status">${number(complete)} / ${number(state.tasks.length)} · ${text('Done')}</p><form data-form="task" class="mini-inline-form">${field('Task title','<input name="task" maxlength="100" required autocomplete="off">')}<button class="mini-primary">${text('Add')} +</button></form><div class="mini-filters" role="group" aria-label="${text('Tasks')}">${['all','active','done'].map(filter=>button('task-filter',filter==='all'?'All':filter==='active'?'Active':'Done',`data-filter-value="${filter}" aria-pressed="${state.filter===filter}"`)).join('')}</div><div class="mini-list">${visible.map(task=>`<div class="mini-list-row"><label class="mini-check"><input type="checkbox" data-task="${task.id}" ${task.done?'checked':''}><span>${rowLabel(task)}</span></label>${button('remove-task','Remove',`data-id="${task.id}" class="mini-subtle"`)}</div>`).join('')||`<p class="mini-empty">${text('No tasks in this view.')}</p>`}</div>`;
  }
  function budget() {
    const income=state.transactions.filter(row=>row.amount>0).reduce((a,row)=>a+row.amount,0);
    const expenses=-state.transactions.filter(row=>row.amount<0).reduce((a,row)=>a+row.amount,0);
    return `<p class="mini-overline">${text('Personal budget planning')}</p><h3>${text('A clearer view of your money.')}</h3><div class="mini-balance"><span>${text('Balance')}</span><strong>${escape(money(model.balance(state)))}</strong></div><div class="mini-metrics">${metric('Income',money(income))}${metric('Expenses',money(expenses))}</div><form data-form="transaction" class="mini-form">${field('Description','<input name="description" maxlength="70" required autocomplete="off">')}<div class="mini-field-pair">${field('Amount (€)','<input type="number" name="amount" min="0.01" max="100000" step="0.01" required>')}${field('Type',`<select name="type"><option value="expense">${text('Expense')}</option><option value="income">${text('Income')}</option></select>`)}</div><button class="mini-primary">${text('Add transaction')} +</button></form><h4 class="mini-section-title">${text('Transactions')}</h4><div class="mini-list">${[...state.transactions].reverse().map(row=>`<div class="mini-list-row"><div><strong>${rowLabel(row)}</strong><small>${text(row.amount>0?'Income':'Expense')}</small></div><span class="${row.amount>0?'mini-positive':'mini-negative'}" dir="auto">${escape(money(row.amount))}</span>${button('remove-transaction','Remove',`data-id="${row.id}" class="mini-subtle"`)}</div>`).join('')}</div>`;
  }
  function habits() {
    const total=state.habits.flat().filter(Boolean).length;
    const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    return `<p class="mini-overline">${text('Tasks and habit tracking')}</p><h3>${text('Small steps, every day.')}</h3><div class="mini-metrics">${metric('Weekly progress',number(Math.round(total/21*100))+'%')}${metric('Done',number(total)+' / '+number(21))}</div><p class="mini-muted">${text('Tap a day to track your habit.')}</p><div class="habit-grid"><div class="habit-days"><span></span>${days.map(day=>`<span>${text(day)}</span>`).join('')}</div>${['Read','Walk','Water'].map((habit,h)=>`<div class="habit-row"><strong>${text(habit)}</strong>${days.map((day,d)=>`<button type="button" data-action="habit" data-habit="${h}" data-day="${d}" aria-label="${text(habit)} · ${text(day)}" aria-pressed="${state.habits[h][d]}">${state.habits[h][d]?'✓':'·'}</button>`).join('')}</div>`).join('')}</div>`;
  }
  function garden() {
    return `<p class="mini-overline">Mochi’s Garden</p><h3>${text('Explore your little garden.')}</h3><p class="mini-muted">${text('Move with the arrows and collect carrots.')}</p><div class="garden-board" tabindex="0" aria-label="${text('Move with the arrows and collect carrots.')}">${Array.from({length:25},(_,i)=>{const x=i%5,y=Math.floor(i/5);return `<div class="garden-cell">${state.x===x&&state.y===y?'<span class="garden-player" role="img" aria-label="🐰">🐰</span>':state.carrots.has(`${x},${y}`)?'<span>🥕</span>':state.decorated&&i%4===0?'<span>🌷</span>':''}</div>`;}).join('')}</div><div class="garden-controls">${button('move','Up','data-dx="0" data-dy="-1"')}${button('move','Left','data-dx="-1" data-dy="0"')}${button('move','Down','data-dx="0" data-dy="1"')}${button('move','Right','data-dx="1" data-dy="0"')}</div><div class="mini-section-title"><span>🥕 ${text('Carrots')}</span><strong>${number(state.collected)}</strong></div>${button('decorate',state.decorated?'Garden decorated!':'Decorate garden',`class="mini-primary" ${state.collected<3||state.decorated?'disabled':''}`)}<p class="mini-muted">${text(state.decorated?'Garden decorated!':'Collect 3 carrots to decorate.')}</p>`;
  }
  function assistant() {
    return `<p class="mini-overline">${text('Conversation playground')}</p><p class="mini-muted">${text('Scripted demo · no live AI or microphone')}</p><div class="mini-chat" aria-live="polite">${state.messages.map(message=>`<div class="chat-message chat-${message.role}"><span>${message.role==='assistant'?'JARVIS':'↗'}</span><p>${message.key?text(message.key):escape(message.text)}</p></div>`).join('')}</div><div class="chat-prompts">${button('prompt','What can VYRO do?','data-message="VYRO"')}${button('prompt','What is Nexora?','data-message="Nexora"')}</div><form data-form="chat" class="mini-inline-form">${field('Message','<input name="message" maxlength="200" required autocomplete="off">')}<button class="mini-primary">${text('Send')} ↗</button></form>`;
  }
  const films=[{id:1,title:'Orbit',genre:'Science fiction',year:2026},{id:2,title:'The Last Light',genre:'Drama',year:2025},{id:3,title:'Night Shift',genre:'Thriller',year:2026},{id:4,title:'Another Sky',genre:'Science fiction',year:2024}];
  function movies() {
    const visible=films.filter(film=>(state.filter!=='favorites'||state.favorites.has(film.id))&&film.title.toLowerCase().includes(state.query.toLowerCase()));
    return `<p class="mini-overline">${text('Browse')}</p><h3>${text('Movies Application')}</h3><p class="mini-muted">${text('Sample movie collection · fictional titles')}</p>${field('Search movies',`<input type="search" name="movie-query" value="${escape(state.query)}" autocomplete="off">`)}<div class="mini-filters">${button('movie-filter','Browse',`data-filter-value="all" aria-pressed="${state.filter==='all'}"`)}${button('movie-filter','Favorites',`data-filter-value="favorites" aria-pressed="${state.filter==='favorites'}"`)}</div><div class="mini-films">${visible.map(film=>`<article class="mini-film"><div class="mini-poster poster-${film.id}"><span>0${film.id}</span><strong>${film.title}</strong></div><div><h4>${film.title}</h4><p>${text(film.genre)} · ${film.year}</p>${button('favorite',state.favorites.has(film.id)?'Remove favorite':'Save favorite',`data-id="${film.id}" aria-pressed="${state.favorites.has(film.id)}"`)}</div></article>`).join('')||`<p class="mini-empty">${text('No movies found.')}</p>`}</div>`;
  }
  function solar() {
    return `<p class="mini-overline">${text('Solar Panel Simulator')}</p><h3>${text('Explore the energy potential.')}</h3><div class="mini-balance"><span>${text('Annual estimate')}</span><strong data-solar-result>${number(Math.round(model.solar(state)))} kWh</strong></div><div class="solar-sliders">${[['panels','Panels',1,30,1],['watts','Panel power (W)',250,600,10],['sun','Sun hours / day',1,6,.5]].map(([key,label,min,max,step])=>`<label><span>${text(label)} <strong data-solar-display="${key}">${number(state[key])}</strong></span><input type="range" name="${key}" data-solar="${key}" min="${min}" max="${max}" step="${step}" value="${state[key]}"></label>`).join('')}</div><p class="mini-muted">${text('Estimate = panels × watts × sun hours × 365 × 0.8 / 1000')}</p><p class="mini-muted">${text('The 0.8 factor illustrates system losses.')}</p><p class="mini-notice">${text('Illustrative estimate, not a site assessment.')}</p>`;
  }
  function render(focusKey) {
    const title=dialog.querySelector('#mini-title');title.textContent=names[state.kind];
    dialog.querySelector('.mini-header .mini-overline').textContent=t('LIVE PLAYGROUND');
    dialog.dataset.app=state.kind;
    dialog.querySelector('.mini-disclaimer').textContent=t('Demo data · changes reset when you close this window');
    dialog.querySelector('[data-action="close"]').setAttribute('aria-label',t('Close demo'));
    dialog.querySelector('[data-action="reset"]').textContent=t('Reset demo');
    const body=dialog.querySelector('.mini-body');
    body.innerHTML=state.kind==='vyro'?workout():state.kind==='nexora'?tasks():state.kind==='bloomly'?habits():state.kind.startsWith('monvex')?budget():state.kind==='mochi-garden'?garden():state.kind==='movies'?movies():state.kind==='solar'?solar():assistant();
    if (focusKey) body.querySelector(focusKey)?.focus({preventScroll:true});
    const chat=body.querySelector('.mini-chat');if(chat)chat.scrollTop=chat.scrollHeight;
  }
  const send = (message) => {state.messages.push({role:'user',text:message.slice(0,200)},{role:'assistant',key:model.reply(message)});state.messages=state.messages.slice(-20);};
  document.addEventListener('DOMContentLoaded', () => {
    dialog=document.createElement('dialog');dialog.className='mini-dialog';dialog.setAttribute('aria-labelledby','mini-title');dialog.dataset.noTranslate='';
    dialog.innerHTML='<div class="mini-shell"><header class="mini-header"><div><span class="mini-overline">LIVE PLAYGROUND</span><h2 id="mini-title"></h2></div><button type="button" data-action="close" class="mini-close">×</button></header><p class="mini-disclaimer"></p><div class="mini-body"></div><footer class="mini-footer"><span>↗ <span>MINI APP</span></span><button type="button" data-action="reset"></button></footer></div>';
    document.body.append(dialog);
    document.addEventListener('click',(event)=>{
      const trigger=event.target.closest('[data-open-app]');if(!trigger)return;
      const kind=trigger.dataset.openApp;if(!names[kind])return;
      opener=trigger;state=seed(kind);render();dialog.showModal();document.body.classList.add('demo-open');
    });
    dialog.addEventListener('close',()=>{state=null;document.body.classList.remove('demo-open');opener?.focus();});
    dialog.addEventListener('click',(event)=>{
      if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();return;}
      const target=event.target.closest('[data-action]');if(!target||!state)return;
      const action=target.dataset.action;
      if(action==='close'){dialog.close();return;}
      if(action==='reset')state=seed(state.kind);
      if(action==='remove-set')state.sets.splice(Number(target.dataset.index),1);
      if(action==='finish'&&state.sets.length)state.finished=true;
      if(action==='task-filter')state.filter=target.dataset.filterValue;
      if(action==='remove-task')state.tasks=state.tasks.filter(task=>task.id!==Number(target.dataset.id));
      if(action==='remove-transaction')state.transactions=state.transactions.filter(row=>row.id!==Number(target.dataset.id));
      if(action==='habit'){const h=Number(target.dataset.habit),d=Number(target.dataset.day);state.habits[h][d]=!state.habits[h][d];}
      if(action==='move')model.move(state,Number(target.dataset.dx),Number(target.dataset.dy));
      if(action==='decorate'&&state.collected>=3)state.decorated=true;
      if(action==='prompt')send(target.dataset.message);
      if(action==='movie-filter')state.filter=target.dataset.filterValue;
      if(action==='favorite'){const id=Number(target.dataset.id);if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);}
      const focusKey=action==='habit'?`[data-habit="${target.dataset.habit}"][data-day="${target.dataset.day}"]`:action==='move'?`[data-action="move"][data-dx="${target.dataset.dx}"][data-dy="${target.dataset.dy}"]`:action==='task-filter'?`[data-filter-value="${state.filter}"]`:action==='prompt'?'[name="message"]':action==='reset'?'input, button, select':undefined;
      render(focusKey);
    });
    dialog.addEventListener('change',(event)=>{
      if(event.target.name==='exercise'){state.exercise=Number(event.target.value);render('[name="exercise"]');}
      if(event.target.matches('[data-task]')){const task=state.tasks.find(task=>task.id===Number(event.target.dataset.task));if(task)task.done=event.target.checked;render(`[data-task="${event.target.dataset.task}"]`);}
    });
    dialog.addEventListener('input',(event)=>{
      const target=event.target;
      if(target.name==='movie-query'){const caret=target.selectionStart;state.query=target.value;render('[name="movie-query"]');try{dialog.querySelector('[name="movie-query"]').setSelectionRange(caret,caret);}catch{}}
      if(target.dataset.solar){state[target.dataset.solar]=Number(target.value);dialog.querySelector('[data-solar-result]').textContent=number(Math.round(model.solar(state)))+' kWh';dialog.querySelector(`[data-solar-display="${target.dataset.solar}"]`).textContent=number(Number(target.value));}
    });
    dialog.addEventListener('submit',(event)=>{
      event.preventDefault();const form=event.target;if(!form.reportValidity())return;const values=new FormData(form);
      if(form.dataset.form==='set')model.addSet(state,Number(values.get('weight')),Number(values.get('reps')));
      if(form.dataset.form==='task'){const label=String(values.get('task')).trim();if(!label)return;state.tasks.push({id:state.nextId++,label:label.slice(0,100),done:false});}
      if(form.dataset.form==='transaction')model.addTransaction(state,String(values.get('description')),Number(values.get('amount')),values.get('type'));
      if(form.dataset.form==='chat'){const message=String(values.get('message')).trim();if(!message)return;send(message);}
      render(form.dataset.form==='chat'?'[name="message"]':form.dataset.form==='task'?'[name="task"]':form.dataset.form==='transaction'?'[name="description"]':'[name="weight"]');
    });
    dialog.addEventListener('keydown',(event)=>{
      if(state?.kind!=='mochi-garden'||!event.target.closest('.garden-board'))return;
      const moves={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};
      if(moves[event.key]){event.preventDefault();model.move(state,...moves[event.key]);render('.garden-board');}
    });
    document.addEventListener('portfolio:language',()=>{if(state&&dialog.open)render();});
  });
})();
