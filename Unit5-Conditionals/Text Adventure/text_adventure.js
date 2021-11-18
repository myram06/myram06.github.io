alert("You have been an elite athlete since you were 10 years old, and are a jack of all trades in three sports: Basketball, Track and Field, and Soccer. But you have decided to pursue only one in college. Once you do, you must figure out how you will commit full time to that sport.")

let basketball_soccer_trackandfield = prompt("First things first: do you (1) choose to play basketball, (2) track and field, or (3) soccer? Type 1, 2, or 3 to choose your sport.")
if(basketball_soccer_trackandfield == 1) {
    alert("You chose to play Basketball in college.")
} else if(basketball_soccer_trackandfield == 2) {
    alert("You chose to run Track and Field in college.")
} else {
    alert("You chose to play Soccer in college.")
}

if(basketball_soccer_trackandfield == 1) {
    let basketball_team = prompt("Now you must choose a team to rep: (1) The SMU Mustangs, (2) The LSU Tigers, or (3) The USC Trojans.")
    if(basketball_team == 1) {
        alert("You are now a Mustang!")
    } else if(basketball_team == 2) {
        alert("You are now a Tiger!")
    } else {
        alert("You are now a Trojan!")
    }
}


if(basketball_soccer_trackandfield == 3) {
    let soccer_team = prompt("Now you must choose a team to rep: (1) The SMU Mustangs, (2) The LSU Tigers, or (3) The USC Trojans.")
    if(soccer_team == 1) {
        alert("You are now a Mustang!")
    } else if(soccer_team == 2) {
        alert("You are now a Tiger!")
    } else {
        alert("You are now a Trojan!")
    }
}

if(basketball_soccer_trackandfield == 2) {
    let track_events = prompt("In Track and Field, you will now choose between (1) sprinting, (2) long distnace, or (3) field events.")
    if(track_events == 1) {
        alert("Sprinting is what you chose! You must now choose between the 100, 200 or 400 meter dashes.")
    } else if(track_events == 2) {
        alert("Long distance is what you chose! You must now choose between running the 800, 1600, or the 3200.")
    } else {
        alert("Field events are what you chose! You must now choose between doing long jump, triple jump, or high jump.")
    }
    if(track_events == 1) {
        let track_events2 = prompt("Choose between the (1) 100, (2) 200, or (3) 400.")
        if(track_events2 == 1) {
            alert("You now run the 100!")
        } else if(track_events2 == 2) {
            alert("You now run the 200!")
        } else {
            alert("You now run the 400!")
        }
    }
    if(track_events == 2) {
        let track_events3 = prompt("Choose between the (1) 800, (2) 1600, or (3), 3200.")
        if(track_events3 == 1) {
            alert("You now run the 800!")
        } else if(track_events == 2) {
            alert("You now run the 1600!")
        } else {
            alert("You now run the 3200!")
        }
    }
    if(track_events == 3) {
        let track_events4 = prompt("Choose between (1) long jump, (2) triple jump, or (3), high jump.")
        if(track_events4 == 1) {
            alert("You now do long jump!")
        } else if(track_events == 2) {
            alert("You now do triple jump!")
        } else {
            alert("You now do high jump!")
        }
    }
}   


if(basketball_soccer_trackandfield == 2) {
    let track_team = prompt("Now you must choose a team to rep: (1) The SMU Mustangs, (2) The LSU Tigers, or (3) The USC Trojans.")
    if(track_team == 1) {
        alert("You are now a Mustang!")
    } else if(soccer_team == 2) {
        alert("You are now a Tiger!")
    } else {
        alert("You are now a Trojan!")
    }
}

alert("The school year has started, and now you must decide if you want to practice outside training, from the training you get at school, for extra support.")

if(basketball_soccer_trackandfield >= 1) {
    let training = prompt("Do you want training outside of school training? Yes or no?")
    if(training == "yes") {
        alert("You were far ahead of the rest of your team in skill by the time the first semester came to and end :)")
    } else {
        alert("Your skill and technical traing dropped lower than anyone on your team and are now risking injury :|")
    }
}
