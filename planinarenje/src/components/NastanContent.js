import React from 'react';



function NastanContent()
{
    return(

        <div style={{backgroundColor:'rgba(227, 228, 226, 1)', border:'0px 1px 0px 1px solid gray'}}>
            <div className="container" style={{backgroundColor:'#ffffff', border:'0px 1px 0px 1px solid gray'}}>
                <div className="row">
                    <div className="col-3 p-0">
                        <p className="naslov" style={{fontWeight:'bold', marginTop:'30px'}}>Датум на оддржување: 23.11.2019</p>            
                    </div>
                </div>
                <div className="row">
                    <div class="col-12">
                        <p className="p1" style={{textAlign:'justify'}}>Атрактивноста на турата е во врвот, кој има форма на пирамида. Љуботен важи за малку суров врв поради тоа што претставува еден вид "пристаниште" на Шара каде се прекршуваат сите ветришта. Љуботен е моќен, величествен и горд. И затоа Љ. секогаш ќе асоцира на Љуботен.
                        Во чест на 13 ноември – ден на град Скопје се искачува Љуботен, како планина која го чува овој град и е на грбот на симболот на град Скопје. Втора година по ред, од наредна е традиционална акција. Во организација на ПК iLoveHiking каде се приклучуваат и две друштва од Македонија и тоа ПК Тетекст од Тетово и ЗПСК Калин Камен од Крива Палнака, следи...
                                 1. РЕКРЕАТИВНА ТУРА
                                За рекреативците е предвидено искачување од Старо Село сѐ до вила Љуботен или планинарскиот дом Љуботен, каде што е дозволено мекнеење цел ден.
                                - Појдовна точка е Старо Село, кое се наоѓа на 700 мнв.
                                - До домот се пешачи неполни два часа.
                                - Патот по кој се оди е колски и за брзо време се влегува во шумски појас.
                                - Мекнеењето завршува во 15:30 часот во вилата, а потоа сите се спуштаме надолу.
                        -Тежина на турата - Лесно напорна.
                        </p>
                     </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="slik"> 
                            <img src={require('../SLIKI/s6.jpg')} style={{width:'100%'}}></img>
                        
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        
                        <p style={{textAlign:'justify'}}>


                        2. ПЛАНИНАРСКА ТУРА - ЛЕТНА ПАТЕКА
                        - Почетна точка е Старо Село (700 мнв).
                        - Пауза правиме кај планинарскиот дом Љуботен (1.622 мнв).
                        - Крајна точка е врв Љуботен (2.499 мнв)
                        - Патеката е маркирана. Се поминува низ шумски терен, а од домот до врвот се продолжува по пасишен и каменест терен. 
                        - Вода има само во првиот дел од патеката (над домот).
                        - Патеката во двата правци е со вкупна должина од 21 км (од селото до врвот и назад ) 
                        - Просечно време на искачување е 4 часа.
                        -Тежина на турата – Средно/тешка - Тешка. (во зависност од кондицијата) 


                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default NastanContent