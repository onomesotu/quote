	/*******************jQuery for handling quotes****************/
	var inspiration = [
	 	["I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.", "Nelson Mandela"],
	 	["I never lose. I either win or learn.", "Nelson Mandela"],
	 	["Your playing small does not serve the world. Who are you not to be great?", "Nelson Mandela"], 
	 	["I believe anyone can conquer fear by doing the things he fears to do, provided he keeps doing them until he gets a record of successful experience behind him.", "Eleanor Roosevelt"],
	 	["Do one thing every day that scares you.", "Eleanor Roosevelt"],
	 	["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill"],
	 	["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
	 	["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"],
	 	["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"],
	 	["Start where you are. Use what you have. Do what you can.", "Arthur Ashe"]
	 ];

	 var love = [
	 	["Hate, it has caused a lot of problems in the world, but has not solved one yet.", "Maya Angelou"],
	 	["We have multiplied our possessions but reduced our values. We talk too much, love too seldom, and hate too often. We’ve learned how to make a living but not a life. We’ve added years to life, not life to years.", "George Carlin"],
	 	["Life is about making an impact, not making an income.", "Kevin Kruse"],
	 	["We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "Plato"],
	 	["We must be our own before we can be anothers.", "Ralph Waldo Emerson"],
	 	["Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", "Martin Luther King Jr."],
	 	["Love all, trust a few, do wrong to none.", "William Shakespeare"],
	 	["We accept the love we think we deserve.", "Stephen Chbosky"],
	 	["Kindness is more persuasive than force.", "Aesop"],
	 	["There is always some madness in love. But there is always some reason in madness.", "Friedrich Nietzsche"]
	 ];

	 var life = [
	 	["Hate, it has caused a lot of problems in the world, but has not solved one yet.", "Maya Angelou"],
	 	["We have multiplied our possessions but reduced our values. We talk too much, love too seldom, and hate too often. We’ve learned how to make a living but not a life. We’ve added years to life, not life to years.", "George Carlin"],
	 	["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
	 	["The mind is everything. What you think you become.", "Buddha"],
	 	["The two most important days in your life are the day you are born and the day you find out why.", "Mark Twain"],
	 	["When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "John Lennon"],
	 	["Our lives begin to end the day we become silent about things that matter.", "Martin Luther King Jr."],
	 	["Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.", "Dr. Seuss"],
	 	["This above all: to thine own self be true.", "William Shakespeare"],
	 	["Raise your words, not voice. It is rain that grows flowers, not thunder.", "Jalaluddin Rumi"],
	 	["It’s not the years in your life that count. It’s the life in your years.", "Abraham Lincoln"]
	 ];

	 /*This function generates random number which acts as the
	 quote array index and appends the quotes to the quotes div*/
	 function randomGenerator(array) { 
	 	var randomtext = Math.floor(Math.random() * array.length);
	 	return "<blockquote class=\"quotes\"><p>"+ array[randomtext][0] + 
	 	"</p><footer>" + array[randomtext][1] + "</footer></blockquote>";
	 }

	 /*I am using $(document) most times because of event propagationa
	most of the html elements in this webpage were added dynamically 
	so there was need to delegate event up the DOM tree*/
	var main = function() {
	/*Replacing the welcome div with the quote div*/
		$(document).on("click",".choice", function(event) {
			$("#intro").addClass("animated bounceOutDown");
			setTimeout(function(event) {
				$("#intro").replaceWith($("#main"));
				$("#main").removeClass("hidden").addClass("animated bounceInDown");
		}, 1000);	
	});

	/*Trying to use abstraction to help in generating quote 
	with respect to the choice of the user*/
	var addQuotes = function(a,b) {
		//a = array variables of saved quotes(inspiration, love and life)
		//b= is the class that is added to identify the category the quote belongs to
		$(".btn-group").after(randomGenerator(a));//randomly get another quote in the same category
		/*the code below adds a class ".ins" that helps identify which
		the type of quote the user clicked on*/
		$(".quotes").addClass(b);
		$("#twitter").attr("href", "https://twitter.com/intent/tweet?text=" + 
			encodeURIComponent($(".quotes").text()));
	};

	/*Using the random number function to generate the FIRST quote
	and append to the quote div depending on the type of quote selected*/
	$(document).on("click",".choice1", function(event){
		addQuotes(inspiration,"ins");
		$(".supporting button.intro1").addClass("active");  
	});
	$(document).on("click",".choice2", function(event){
		addQuotes(love,"lov");
		$(".supporting button.intro2").addClass("active");	  
	});
	$(document).on("click",".choice3", function(event){
		addQuotes(life,"lif");
		$(".supporting button.intro3").addClass("active");	  
	});

	/*Generating more quotes when the new quote button is clicked*/
	$(".supporting").on("click","a.newquotes", function() {	
		if($(".quotes").hasClass("ins")) {
			$("a.newquotes").siblings(".quotes").detach();
			addQuotes(inspiration,"ins");			  
		} else if ($(".quotes").hasClass("lov")) {
			$("a.newquotes").siblings(".quotes").detach();
			addQuotes(love,"lov");		  
		} else if($(".quotes").hasClass("lif")) {
			$("a.newquotes").siblings(".quotes").detach();
			addQuotes(life,"lif");			  
		}
	});

	/*This code is for the navigation from one quote category to another*/
	$(document).on("click",".supporting button", function (event) {
		$(".supporting button").removeClass("active");
		$(this).addClass("active");
		if($(this).hasClass("intro1")){
			$("a.newquotes").siblings(".quotes").detach();
			addQuotes(inspiration,"ins");			  
		}else if($(this).hasClass("intro2")){
			$("a.newquotes").siblings(".quotes").detach();
			addQuotes(love,"lov");		
		}else if($(this).hasClass("intro3")){
			$("a.newquotes").siblings(".quotes").detach();
			addQuotes(life,"lif");
		}
	});
	
	//refreshes the window in cache to get the intro page
	$(".supporting").on("click",".back", function() {
		location.reload();	
	});
	/********************************************************************/
	//This provides hover effect for the custom tweeter button
	$(".fa-twitter").hover(function() {
		$(this).toggleClass("shadow");
	});
}

$(document).ready(main);

