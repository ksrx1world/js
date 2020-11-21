numb=50
upstep=3
slip=2
jump=0
count= 0;
for(i=0;i<=numb;++i){
    count= count+1;
    jump+=upstep;
    if (jump>=numb){
        console.log(count);
        return 0;
    }
    count = count +1;
    jump-=slip;
}