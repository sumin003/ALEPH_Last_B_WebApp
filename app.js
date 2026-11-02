const CASES=[{"id": "C01", "source": 5, "location": "사례 예시 1", "kind": "기관 수법 예시", "facts": "법원 등기 수령 가능 여부와 주소를 확인한 뒤 앱 설치 유도 문자를 보낸다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C02", "source": 5, "location": "사례 예시 2", "kind": "기관 수법 예시", "facts": "등기가 반송됐다며 불이익을 언급하고 링크에서 수령일자를 확인하도록 요구한다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C03", "source": 5, "location": "사례 예시 3", "kind": "기관 수법 예시", "facts": "송달 도착 안내서의 담당자 번호로 연락하게 한 뒤 개인정보를 요구한다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C04", "source": 6, "location": "사례 1", "kind": "공관 공개 사례 요약", "facts": "총영사관 직원을 사칭하여 여권 무효화를 명목으로 이메일 주소를 요구한다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C05", "source": 6, "location": "사례 2", "kind": "공관 공개 사례 요약", "facts": "여권이 베트남에서 악용됐다며 이후 대사관 사칭 전화를 받아 지시를 따르도록 요구한다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C06", "source": 6, "location": "사례 3", "kind": "공관 공개 사례 요약", "facts": "여권 악용 우려를 내세워 이후 영사관 사칭 전화를 따르게 하며 실제 기관 번호가 착신 표시된다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C07", "source": 6, "location": "사례 4", "kind": "공관 공개 사례 요약", "facts": "여권 무효화를 명목으로 총영사관 사칭 후속 전화를 예고하며 실제 영사콜센터 번호가 착신 표시된다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C08", "source": 6, "location": "사례 5", "kind": "공관 공개 피해 요약", "facts": "세관·경찰을 사칭하고 범죄 연루를 협박했다. 텔레그램 설치, 여권 사진 전달, 일본 계좌 입금이 기록돼 있다. 정상 메신저를 악성앱으로 분류하지 않는다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C09", "source": 7, "location": "1쪽 수법 설명 및 대응", "kind": "기관이 3건을 묶어 설명한 수법", "facts": "공무원·기관 명의를 사칭한 위조 공문과 명함으로 납품 계약을 제안하고 중간업체 등에 선입금을 요구한다. 접수 3건의 공통 설명을 한 단위로 보존한다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C10", "source": 8, "location": "붙임1 PDF 5쪽 접근·기망 단계", "kind": "경찰의 피해사례 재구성", "facts": "신청하지 않은 카드 배송에서 가짜 고객센터로 연결하고 원격제어앱과 인증번호 입력을 유도한다. 범인은 악성앱을 설치하고 가짜 사건조회 사이트에서 인적사항을 입력하게 한다. 이 기록은 접근·기망 단계에 한정한다.", "event_date": null, "received_date": "2026-11-02"}, {"id": "C11", "source": 14, "location": "타인/기관 사칭 피싱 주의 — 수사기관 사칭 및 신고 안내", "kind": "추가 학습 예시 · 공식 안내 기반 재구성", "facts": "카카오톡 친구 추가를 유도하고 검찰 신분증·공문·영장 이미지로 안심시킨 뒤, 수사 협조를 명목으로 앱 설치·정보 전달·송금을 요구하는 흐름입니다. 기관 사칭과 위조 문서·앱 설치 요구에 관한 공식 안내를 연결한 학습 예시이며, 특정 한 사건의 실제 진행 순서를 뜻하지 않습니다. 친구 추가나 이미지 열람만으로 악성앱 감염을 단정하지 않습니다.", "event_date": null, "received_date": "2026-11-02"}];
const ITEMS={"G1": {"text": "통화·지시를 중단하고 추가 요구에 응하지 않기", "sources": [6, 9]}, "G2": {"text": "상대가 알려준 번호·착신 표시를 믿지 말고 공식 경로에서 별도 확인", "sources": [5, 6, 9]}, "G3": {"text": "요구받은 앱 설치·원격제어 연결 거절", "sources": [5, 9]}, "G4": {"text": "전달받은 불분명한 링크에 접속하지 않기", "sources": [5, 9]}, "G5": {"text": "개인정보를 제공하거나 추가로 전달하지 않기", "sources": [5, 6]}, "G6": {"text": "국내 이체 피해가 확인되면 경찰·금융회사에 즉시 연락하여 지급정지 요청", "sources": [10]}, "G7": {"text": "해외 체류 시 거주지 관할 경찰 또는 해당 기관의 공식 경로에 확인·신고", "sources": [6]}, "G8": {"text": "악성앱 설치가 확인되면 기기 격리·점검과 직접 방문 등 공식 후속 안내 확인", "sources": [9]}, "G9": {"text": "대출·납품·기관 확인을 명목으로 요구하는 추가 송금·선입금 중단", "sources": [6, 7, 9]}, "G10": {"text": "국내 개인정보 노출 시 공식 예방·상담 제도의 적용 여부 확인", "sources": [10]}};
const SOURCES={"5": {"id": 5, "author": "사법연수원", "date": "2025-07-08", "title": "법원 사칭 보이스피싱 주의 안내", "url": "https://jrti.scourt.go.kr/dcboard/new/DcNewsViewAction.work?cbub_code=000130&gubun=41&pageIndex=3&scode_kname=&searchWord=&seqnum=17890", "access_date": "2026-11-02"}, "6": {"id": 6, "author": "주히로시마 대한민국 총영사관", "date": "2025-04-25", "title": "공관 정부기관 등 사칭 보이스피싱 사례 및 예방 안내", "url": "https://www.mofa.go.kr/jp-osaka-ko/brd/m_26891/view.do?seq=1945472", "access_date": "2026-11-02"}, "7": {"id": 7, "author": "제주특별자치도 농업기술원", "date": "2025-12-17", "title": "도내 농업 관련 업체 노린 공공기관 사칭 보이스피싱 주의", "url": "https://agri.jeju.go.kr/files/board/88c69214-ab23-4fbc-9329-8d11000ec47b.pdf", "access_date": "2026-11-02"}, "8": {"id": 8, "author": "경찰청 국가수사본부", "date": "2024-10-24", "title": "기관사칭형 보이스피싱 60대 여성을 노린다", "url": "https://www.counterscam112.go.kr/pdf/bbs002/2/FILE_000000000000079/viewer.do", "access_date": "2026-11-02"}, "9": {"id": 9, "author": "금융위원회·금융감독원", "date": "2026-02-10", "title": "온 가족이 모인 설 명절 보이스피싱 예방 행동수칙을 기억하세요 보이스피싱 피해예방 10계명", "url": "https://www.fsc.go.kr/po010101/86250", "access_date": "2026-11-02"}, "10": {"id": 10, "author": "금융위원회", "date": "2026-10-06", "title": "최근 금융권 개인정보 유출사고에 따른 보이스피싱 스미싱 등 피해에 주의하세요", "url": "https://www.fsc.go.kr/no010101/87882", "access_date": "2026-11-02"}, "12": {"id": 12, "author": "금융위원회", "date": "2026-09-18", "title": "추석 명절 전후 보이스피싱 피해에 주의하세요", "url": "https://www.fsc.go.kr/no010101/87779", "access_date": "2026-11-02"}, "13": {"id": 13, "author": "금융위원회", "date": "2025-09-22", "title": "소비쿠폰 조회 신청 사칭 스미싱 소비자경보 상향", "url": "https://www.fsc.go.kr/no010101/85338?curPage=72&srchBeginDt=&srchCtgry=&srchEndDt=&srchKey=all&srchText=", "access_date": "2026-11-02"}, "14": {"id": 14, "author": "카카오", "date": "발표일 미표기", "title": "타인/기관 사칭 피싱 주의", "url": "https://talksafety.kakao.com/toolandguide/phishing/organization", "access_date": "2026-11-02"}, "15": {"id": 15, "author": "카카오", "date": "발표일 미표기", "title": "의심스러운 카카오톡 ID 추가 시 주의", "url": "https://talksafety.kakao.com/toolandguide/suspicious", "access_date": "2026-11-02"}};
'use strict';
const form=document.querySelector('#form');
const titles=['등기 수령을 위해 앱을 설치하래요','등기가 반송됐다며 링크를 보내요','종이 안내서의 번호로 연락하래요','여권이 무효라며 이메일을 요구해요','대사관의 후속 전화를 받으래요','기관 번호가 뜨는 전화가 와요','영사콜센터 번호를 믿어도 될까요','세관·경찰이라며 정보와 돈을 요구해요','납품 계약 전에 선입금을 요구해요','카드 배송에서 원격제어로 이어져요','카톡 친구 추가 뒤 검찰증과 앱 설치를 요구해요'];
const STEPS={
 chatstop:{title:'대화를 멈추고 추가 요구에 응하지 마세요',text:'친구 추가 뒤 검찰 신분증·공문·영장을 보내더라도 이미지나 프로필만으로 진위를 판단하지 마세요. 상대가 시키는 앱 설치·정보 전달·송금을 중단하세요. 친구 추가나 이미지 열람만 했다면 그것만으로 감염됐다고 단정하지 않습니다.',sources:[14,15]},
 document:{title:'받은 서류와 상대의 신원을 공식 경로로 확인하세요',text:'검찰증·공문·영장에 적힌 번호나 상대가 보낸 확인 링크를 재사용하지 마세요. 통화를 끝낸 뒤 기관 공식 홈페이지에서 직접 찾은 연락처로 문의하세요. 위조 문서가 전송되는 사칭 수법이 있습니다.',sources:[14,9]},
 chatreport:{title:'카카오톡의 신고·차단 기능을 이용하세요',text:'앱 설치·금융정보·신분증·현금 전달을 요구하는 사칭 상대는 채팅방 상단의 신고 또는 프로필의 차단 → 차단하고 신고 기능으로 신고하세요. 메뉴는 버전에 따라 다를 수 있습니다. 이미 감염이 의심되거나 돈을 보냈다면 기기 격리·피해 신고를 먼저 진행하세요.',sources:[14]},
 isolate:{title:'의심 기기의 통신부터 차단하세요',text:'상대 지시로 앱을 설치·원격제어한 뒤 악성앱 감염이 의심된다면 전원을 끄거나 비행기 모드로 전환하세요. 이 화면은 다른 안전한 기기에서 이어서 보세요. 단순한 정상 메신저 설치만으로 악성앱이라고 판단하지는 않습니다.',sources:[12,8]},
 safe:{title:'다른 안전한 전화로 신고·상담하세요',text:'감염 의심 휴대전화로 건 전화가 사기범에게 연결될 수 있습니다. 가족·지인의 안전한 전화 등 별도 수단으로 경찰 112에 상황을 알리세요. 방문이 필요하면 경찰서 등 공식 창구의 안내를 받으세요.',sources:[8,12,5]},
 cleanup:{title:'기기를 점검하고 악성앱 삭제·초기화 도움을 받으세요',text:'근처 이동통신사 등에서 악성앱 삭제·휴대전화 초기화에 필요한 도움을 받으세요. 삭제가 어렵다면 KISA 118에 상담하세요. 앱 하나를 지웠다는 이유만으로 안전이 회복됐다고 판단하지 마세요.',sources:[12,13]},
 freeze:{title:'즉시 경찰·금융회사에 지급정지를 요청하세요',text:'국내 계좌로 돈을 보냈다면 경찰 112 또는 거래 금융회사 공식 콜센터에 즉시 피해 사실을 알리고 지급정지를 요청하세요. 방문하거나 사례를 더 읽느라 요청을 미루지 마세요. 앱은 지급정지를 처리하지 않습니다.',sources:[10]},
 foreignmoney:{title:'지급 수단에 맞는 기관에 즉시 피해를 알리세요',text:'해외 송금·현금 전달은 국내 계좌 지급정지와 같은 절차가 적용된다고 가정할 수 없습니다. 국내 현금 피해는 경찰 112에 알리고, 이용한 금융회사의 공식 창구에 거래를 설명하고 가능한 조치를 확인하세요. 해외에서는 거주지 관할 경찰·해당 공관에도 알리세요. 회수·환급을 보장하지 않습니다.',sources:[6,10]},
 regioncheck:{title:'송금 경로를 공식 창구에 설명하고 가능한 조치를 확인하세요',text:'국내·해외 여부가 불확실해도 도움 요청을 미루지 마세요. 경찰이나 이용한 금융회사 공식 창구에 송금 경로를 설명하세요. 해외 거래라면 해당 금융회사와 현지 경찰·공관 경로도 확인하세요.',sources:[6,10]},
 stop:{title:'통화와 상대의 추가 지시를 중단하세요',text:'연락을 끊고 추가 송금·정보 전달·앱 설치에 응하지 마세요. 상대가 연결해 준 다른 담당자도 같은 사칭 흐름일 수 있습니다.',sources:[6,9]},
 info:{title:'노출된 정보에 맞는 보호 조치를 확인하세요',text:'추가 정보나 인증번호를 보내지 마세요. 국내에서 신분증·금융정보 등이 노출됐다면 금융회사 공식 창구에서 금융거래 안심차단서비스와 개인정보노출자 사고예방 시스템의 적용 여부를 확인하세요. 이메일 주소만 전달한 경우와 신분증·금융정보 노출은 구분해야 합니다.',sources:[10]},
 foreigninfo:{title:'관할 기관에 정보 노출을 알리고 후속 조치를 확인하세요',text:'여권 사진·금융정보 등을 전달했다면 추가 전송을 멈추고 관할 공관·거래 금융회사 공식 창구에 노출 내용을 설명하세요. 국내 명의도용 예방 제도를 해외 거래에 그대로 적용하지 마세요.',sources:[6,10]},
 linkdone:{title:'열어 본 페이지에서 더 진행하지 마세요',text:'추가 개인정보 입력·앱 설치·송금을 중단하세요. 링크를 열었다는 사실만으로 감염됐다고 단정하지는 않습니다. 설치나 정보 전달도 했다면 해당 항목을 함께 선택하세요.',sources:[5,13]},
 rejectapp:{title:'설치·원격제어 요청을 거절하세요',text:'상대가 제공한 앱이나 연결 코드를 사용하지 마세요. 설치를 이미 했다면 “앱 설치·원격제어를 했어요”를 선택해 설치 이후 대응을 확인하세요.',sources:[5,9]},
 rejectlink:{title:'받은 링크 대신 공식 경로에서 확인하세요',text:'불이익이나 반송을 이유로 받은 링크를 누르지 마세요. 확인할 일이 있다면 기관 홈페이지·공식 앱·대표 연락처를 직접 찾아 확인하세요.',sources:[5,12]},
 rejectinfo:{title:'개인정보·인증번호 요청에 응하지 마세요',text:'전화 상대에게 계좌정보·인증번호·신분증 사진 등을 전달하지 마세요. 이미 보냈다면 “정보를 전달했어요”를 선택하세요.',sources:[5,6]},
 rejectmoney:{title:'선입금·자산보호 명목의 송금을 거절하세요',text:'대출 보증료, 납품 계약, 수사·자산보호를 명분으로 요구하는 돈을 보내지 마세요. 이미 지급했다면 지급 방법을 선택해 피해 이후 안내를 확인하세요.',sources:[6,7,10]},
 court:{title:'법원 등기 사실을 법원 공식 연락처로 확인하세요',text:'문자·송달 안내서에 적힌 번호로 회신하지 말고 법원 공식 홈페이지에서 연락처를 직접 확인하세요. 해당 공개 안내는 개인정보 요구·앱 설치·링크 유도를 사칭 신호로 설명합니다.',sources:[5]},
 passport:{title:'여권 처리 여부를 공관에 직접 확인하세요',text:'여권 무효화·악용이라는 말만 믿고 이메일이나 여권 사진을 보내지 마세요. 통화를 끝낸 뒤 관할 공관 공식 홈페이지의 연락처나 이메일로 사실관계를 확인하세요.',sources:[6]},
 callback:{title:'예고된 후속 전화에 그대로 따르지 마세요',text:'대사관·영사관에서 다시 연락한다는 말을 믿고 지시를 이어가지 마세요. 먼저 통화를 끊고 공식 홈페이지에서 찾은 해당 공관에 직접 문의하세요.',sources:[6]},
 display:{title:'화면에 뜬 기관 번호만 믿지 마세요',text:'대검찰청·영사콜센터 번호처럼 표시돼도 신원이 확인된 것은 아닙니다. 통화를 끊고 공식 홈페이지에서 독립적으로 확인한 경로로 문의하세요.',sources:[6,8]},
 overseas:{title:'거주지 관할 경찰·해당 공관에 확인·신고하세요',text:'해외에서 기관 사칭 연락이나 피해를 겪었다면 관할 경찰 또는 해당 기관 공식 경로로 알리세요. 한국의 국번 없는 신고 번호는 해외에서 동일하게 연결된다고 가정하지 마세요.',sources:[6]},
 contract:{title:'납품 계약을 기관의 공식 담당 창구에 재확인하세요',text:'위조 공문·명함이나 소개받은 중간업체만 믿지 마세요. 해당 기관 홈페이지에서 찾은 공식 연락처로 담당자와 실제 계약·납품 요구 여부를 확인하세요.',sources:[7]},
 card:{title:'신청하지 않은 카드 배송은 카드사에 직접 확인하세요',text:'배송원이 알려 준 고객센터로 이동하거나 원격제어 코드를 입력하지 마세요. 통화를 끝내고 카드사 공식 홈페이지·앱에서 확인한 고객센터에 직접 문의하세요.',sources:[8,9]},
 verify:{title:'사칭된 기관의 공식 연락처로 별도 확인하세요',text:'상대가 보내준 번호·링크나 착신 표시를 재사용하지 말고 공식 홈페이지에서 연락 경로를 직접 찾으세요. 의심 상담은 국내 1394에서 받을 수 있습니다.',sources:[6,10]},
 unknown:{title:'실행 여부가 불확실하면 공식 상담으로 확인하세요',text:'모른다는 답을 “아무것도 하지 않음”으로 처리하지 않습니다. 국내에서는 1394 상담으로 상황을 설명하고, 실제 금전 피해가 확인되면 경찰·금융회사에 즉시 알리세요.',sources:[10]}
};
const CASE_PLANS={
 C01:['rejectapp','court','stop'],C02:['rejectlink','court','stop'],C03:['rejectinfo','court','stop'],
 C04:['rejectinfo','passport','overseas'],C05:['stop','callback','overseas'],C06:['stop','display','overseas'],C07:['stop','display','overseas'],
 C08:['stop','rejectmoney','rejectinfo','overseas'],C09:['rejectmoney','contract','stop'],C10:['stop','card','rejectapp'],C11:['chatstop','document','chatreport']
};
const CASE_REQUESTS={C01:['app'],C02:['link'],C03:['info'],C04:['info'],C05:['unknown'],C06:['unknown'],C07:['unknown'],C08:['info','money'],C09:['money'],C10:['app','link','info'],C11:['chat','document']};
function sourceLink(id){const s=SOURCES[id],a=document.createElement('a');a.href=s.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=s.author+' · '+s.date+' ↗';return a;}
function stepNode(key,index){const s=STEPS[key],a=document.createElement('article');a.className='guide'+(index===0?' priority':'');const h=document.createElement('h3');h.textContent=(index===0?'가장 먼저 · ':String(index+1)+'. ')+s.title;const p=document.createElement('p');p.textContent=s.text;a.append(h,p);s.sources.forEach(id=>a.append(sourceLink(id),document.createTextNode('  ')));return a;}
function evaluate(input){
 const valid=(a,keys)=>Array.isArray(a)?a.filter(v=>keys.includes(v)):[];
 const r=valid(input?.requests,['app','link','info','money','chat','document','unknown']),d=valid(input?.done,['none','link','app','info','transfer','othermoney','chat','document','unknown']);
 const region=input?.region,keys=[];
 const add=(...v)=>v.forEach(k=>{if(!keys.includes(k))keys.push(k);});
 if(d.includes('app'))add('isolate');
 if(d.includes('transfer'))add(region==='domestic'?'freeze':region==='foreign'?'foreignmoney':'regioncheck');
 if(d.includes('othermoney'))add('foreignmoney');
 if(d.includes('app'))add('safe');
 if(d.includes('info'))add(region==='domestic'?'info':region==='foreign'?'foreigninfo':'unknown');
 if(d.includes('app'))add('cleanup');
 if(d.includes('link'))add('linkdone');
 if((r.includes('chat')||d.includes('chat')||r.includes('document')||d.includes('document'))&&!d.some(v=>['app','transfer','othermoney','info'].includes(v)))add('chatstop');
 if(r.includes('document')||d.includes('document'))add('document');
 if(r.includes('chat')||d.includes('chat'))add('chatreport');
 // Once an action was performed, prioritise follow-up instead of telling the user merely to refuse it.
 if(input?.scenario==='C11'&&!d.some(v=>['app','transfer','othermoney','info'].includes(v)))add('chatstop');
 if(r.includes('app')&&!d.includes('app'))add('rejectapp');
 if(r.includes('link')&&!d.includes('link'))add('rejectlink');
 if(r.includes('info')&&!d.includes('info'))add('rejectinfo');
 if(r.includes('money')&&!d.includes('transfer')&&!d.includes('othermoney'))add('rejectmoney');
 const plan=CASE_PLANS[input?.scenario];
 if(plan)plan.filter(k=>!['rejectapp','rejectlink','rejectinfo','rejectmoney','stop'].includes(k)).forEach(k=>add(k));
 else if(input?.identity==='consulate')add('passport');
 if(region==='foreign')add('overseas');
 if(d.includes('unknown')||region==='unknown'||r.includes('unknown'))add('unknown');
 if(!keys.length)add('stop');
 if(!plan&&input?.identity!=='consulate')add('verify');
 return keys;
}
function setScenario(id){form.reset();form.elements.scenario.value=id;const i=Number(id.slice(1));form.elements.identity.value=i>=4&&i<=7?'consulate':'public';form.elements.region.value=i>=4&&i<=8?'foreign':'domestic';for(const v of CASE_REQUESTS[id]||[])form.querySelector('[name="request"][value="'+v+'"]').checked=true;form.querySelector('[name="done"][value="unknown"]').checked=true;document.querySelector('#result').hidden=true;}
CASES.forEach((c,i)=>{
 const option=document.createElement('option');option.value=c.id;option.textContent=titles[i];form.elements.scenario.append(option);
 const a=document.createElement('article');a.className='case-card';const tag=document.createElement('span');tag.className='tag';tag.textContent=c.kind;
 const h=document.createElement('h3');h.textContent=titles[i];const p=document.createElement('p');p.textContent=c.facts;
 const details=document.createElement('details'),su=document.createElement('summary');su.textContent='사례와 대응 순서 보기';details.append(su,p);
 const note=document.createElement('p');note.textContent='아직 요구에 응하지 않은 경우의 안내입니다. 이미 설치·전달·송금했다면 내 상황에서 실행한 행동을 선택하세요.';details.append(note);
 CASE_PLANS[c.id].forEach((k,j)=>details.append(stepNode(k,j)));
 details.append(sourceLink(c.source));
 const b=document.createElement('button');b.type='button';b.textContent='이 사례로 내 상황 확인 →';b.addEventListener('click',()=>{setScenario(c.id);document.querySelector('#check').scrollIntoView({behavior:'instant'});form.elements.scenario.focus({preventScroll:true});});a.append(tag,h,details,b);document.querySelector('#case-list').append(a);
});
Object.keys(STEPS).forEach((k,i)=>document.querySelector('#all-guidance').append(stepNode(k,i+1)));
form.addEventListener('change',e=>{
 if(e.target.name==='scenario'&&CASE_PLANS[e.target.value])setScenario(e.target.value);
 if(e.target.name==='done'&&e.target.value==='none'&&e.target.checked){form.querySelectorAll('[name="done"]').forEach(c=>{if(c.value!=='none')c.checked=false;});}
 else if(e.target.name==='done'&&e.target.checked)form.querySelector('[name="done"][value="none"]').checked=false;
 if(e.target.name==='done'&&e.target.checked&&e.target.value!=='unknown')form.querySelector('[name="done"][value="unknown"]').checked=false;
 if(e.target.name==='done'&&e.target.value==='unknown'&&e.target.checked)form.querySelectorAll('[name="done"]').forEach(c=>{if(c.value!=='unknown')c.checked=false;});
 document.querySelector('#result').hidden=true;
});
form.addEventListener('reset',()=>{document.querySelector('#error').textContent='';document.querySelector('#result').hidden=true;});
form.addEventListener('submit',e=>{
 e.preventDefault();const fd=new FormData(form),input={identity:fd.get('identity'),region:fd.get('region'),scenario:fd.get('scenario'),requests:fd.getAll('request'),done:fd.getAll('done')};
 if(!['public','consulate','other','unknown'].includes(input.identity)||!['domestic','foreign','unknown'].includes(input.region)||!input.requests.length||!input.done.length){document.querySelector('#error').textContent='각 질문에 답해 주세요. 모르는 항목은 “잘 모르겠어요”를 선택하세요.';return;}
 document.querySelector('#error').textContent='';const keys=evaluate(input);document.querySelector('#guidance').replaceChildren(...keys.map(stepNode));
 document.querySelector('#selection-summary').textContent='이미 한 행동을 먼저 반영한 대응 순서입니다. 복수 피해는 가능한 도움을 병행하세요. 순서는 공식 안내를 바탕으로 앱에서 구성했으며 기관이 정한 단일 절차는 아닙니다.';
 document.querySelector('#uncertain').textContent=input.done.includes('unknown')||input.requests.includes('unknown')||input.region==='unknown'?'불확실한 답은 피해가 없다는 뜻이 아닙니다. 공식 상담으로 실행 상태를 확인하세요.':'선택을 바꾸면 안내도 바뀝니다. 실제 조치는 해당 기관과 직접 진행하세요.';
 const result=document.querySelector('#result');result.hidden=false;result.focus({preventScroll:true});result.scrollIntoView({behavior:'instant'});
});
window.guideEvaluate=evaluate;
