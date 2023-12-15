import diffDates from 'diff-dates'


export function formateTime(t){
    const present = Date.now()
    const romanianRevolution = new Date(t)
    const time = diffDates(romanianRevolution, present, "minutes")

    let dif;
    let bg = '';
    let text;
    if(time < 0){
        dif = diffDates(present, romanianRevolution, "minutes")
        bg = 'text-red-400'
        if(dif < 60){
            text = <div className='flex items-center justify-end py-2'>
                {dif}
                {diffDates(present, romanianRevolution, "minutes")}
                <span className="ml-3">min ago</span>
            </div>
        }else{
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(present, romanianRevolution, "hours")}
                <span className="ml-3">hours ago</span>
            </div>
        }
    }else{
        dif = diffDates(romanianRevolution, present, "minutes")
        if(dif < 60){
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(romanianRevolution, present, "minutes")}
                <span className="ml-3">minutes</span>
            </div>
        }else{
            text = <div className='flex items-center justify-end py-2'>
                {diffDates(romanianRevolution, present, "hours")}
                <span className="ml-3">hours</span>
            </div>
        }
    }
    return{ bg, text }
}

export function Time(t){
    const present = Date.now()
    const romanianRevolution = new Date(t)

    let dif;
    let text;
    dif = diffDates(romanianRevolution, present, "minutes")
    if(dif < 60){
        text = `عزيزي العميل سيكون طلبك جاهزا خلال ${diffDates(romanianRevolution, present, "minutes")} دقيقة`
            
    }else{
        text = ` عزيزي العميل سيكون طلبك جاهزا خلال ${diffDates(romanianRevolution, present, "hours")} ساعة`
    }
    return text
}
