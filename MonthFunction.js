function HowMonthsPerChapter(chapters){

    let totalChapters = 1100;
    let months = 0;

    while(chapters < totalChapters){
        chapters *= 2;
        months++;
    }


    return months
}

HowMonthsPerChapter(50)





//Figure how many months it will take me to finish one piece per Chapter rate
