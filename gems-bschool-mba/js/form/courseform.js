function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'Certificate' )
		{
			document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control architects-select validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='Certificate Course in Culinary Arts'>Certificate Course in Culinary Arts</option>\
<option value='Certificate Course in Cookery, Bakery and Confectionary'>Certificate Course in Cookery, Bakery and Confectionary</option>\
<option value='Certificate Course in Food and Beverage Service'>Certificate Course in Food and Beverage Service</option>\
<option value='Certificate Course in Housekeeping Operations'>Certificate Course in Housekeeping Operations</option>\
</select>";
		}
 

		else if (typevalue == 'Diploma')
		{
		document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='Diploma in Fashion Design'>Diploma in Fashion Design</option>\
			<option value='Diploma in Textile Design'>Diploma in Textile Design</option>\
			<option value='Diploma in Interior Design'>Diploma in Interior Design</option>\
			<option value='Diploma in Graphic Design'>Diploma in Graphic Design</option>\
			<option value='Diploma in Film Technology'>Diploma in Film Technology</option>\
			<option value='Diploma in Animation and VFX'>Diploma in Animation and VFX</option>\
			<option value='Diploma in Home Science'>Diploma in Home Science</option>\
			<option value='Diploma in Performing Arts'>Diploma in Performing Arts</option>\
			<option value='Diploma in Pharmacy'>Diploma in Pharmacy</option>\
			<option value='PGDM (LSCM)'>PGDM (LSCM)</option>\
			<option value='PGDM (Business Analytics)'>PGDM (Business Analytics)</option>\
			<option value='PGDM in Computer Application'>PGDM in Computer Application</option>\
			<option value='PGDM(HR)'>PGDM(HR)</option>\
			<option value='Diploma in Hotel Operations'>Diploma in Hotel Operations</option>\
			<option value='Diploma In Law'>Diploma In Law</option>\
</select>";
		}


		else if (typevalue == 'Undergraduate')
		{
			document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='Bachelor of Fine Arts' >Bachelor of Fine Arts</option>\
			<option value='B. Des. Fashion Design'>B. Des. Fashion Design</option>\
			<option value='B. Des. Textile Design'>B. Des. Textile Design</option>\
			<option value='B. Des. Interior Design'>B. Des. Interior Design</option>\
			<option value='B. Des. Graphic Design'>B. Des. Graphic Design</option>\
			<option value='B. Sc. Fashion Design'>B. Sc. Fashion Design</option>\
			<option value='B. Sc. Textile Design'>B. Sc. Textile Design</option>\
			<option value='B. Sc. Interior Design'>B. Sc. Interior Design</option>\
			<option value='B. Sc. Graphic Design'>B. Sc. Graphic Design</option>\
			<option value='B.V.A. Film Technology'>B.V.A. Film Technology</option>\
			<option value='B.V.A. Animation and VFX'>B.V.A. Animation and VFX</option>\
			<option value='B.A. (General)'>B.A. (General)</option>\
			<option value='B.A. (Hons.) English'>B.A. (Hons.) English</option>\
			<option value='B.A. (Hons.) Hindi'>B.A. (Hons.) Hindi</option>\
			<option value='B.A. (Hons.) Marathi'>B.A. (Hons.) Marathi</option>\
			<option value='B.A. (Hons.) Sanskrit'>B.A. (Hons.) Sanskrit</option>\
			<option value='B.A. (Hons.) Public Administration'>B.A. (Hons.) Public Administration</option>\
			<option value='B.A. (Hons.) History'>B.A. (Hons.) History</option>\
			<option value='B.A. (Hons.) Political Science'>B.A. (Hons.) Political Science</option>\
			<option value='B.A. (Hons.) Geography'>B.A. (Hons.) Geography</option>\
			<option value='B.A. (Hons.) Economics'>B.A. (Hons.) Economics</option>\
			<option value='B.A. (Hons.) Psychology'>B.A. (Hons.) Psychology</option>\
			<option value='B. Sc. (Yoga)'>B. Sc. (Yoga)</option>\
			<option value='BA (J and MC)'>BA (J and MC)</option>\
			<option value='Bachelor of Library and Information Science'>Bachelor of Library and Information Science</option>\
			<option value='Bachelor of Social Work'>Bachelor of Social Work</option>\
			<option value='Bachelor in Pharmacy'>Bachelor in Pharmacy</option>\
			<option value='B. Pharm. Lateral Entry'>B. Pharm. Lateral Entry</option>\
			<option value='B.Com. (Hons.)'>B.Com. (Hons.)</option>\
			<option value='B.Com. (Accounting and Finance)'>B.Com. (Accounting and Finance)</option>\
			<option value='BBA'>BBA</option>\
			<option value='BMS'>BMS</option>\
			<option value='B. Sc. (Hospitality Studies)'>B. Sc. (Hospitality Studies)</option>\
			<option value='B.H.M'>B.H.M</option>\
			<option value='B. Tech. Civil Engineering'>B. Tech. Civil Engineering</option>\
			<option value='B. Tech. Mechanical Engineering'>B. Tech. Mechanical Engineering</option>\
			<option value='B. Tech. Computer Science and Engineering'>B. Tech. Computer Science and Engineering</option>\
			<option value='B. Tech. Information Technology'>B. Tech. Information Technology</option>\
			<option value='B. Tech. Electrical Engineering'>B. Tech. Electrical Engineering</option>\
			<option value='B. Tech. Electronics and Communications Engineering'>B. Tech. Electronics and Communications Engineering</option>\
			<option value='B. Tech. Mechatronics Engineering'>B. Tech. Mechatronics Engineering</option>\
			<option value='B. Tech. Biotechnology'>B. Tech. Biotechnology</option>\
			<option value='B. Tech. (CSE) Data Science with IBM'>B. Tech. (CSE) Data Science with IBM</option>\
			<option value='B. Tech. (CSE) Internet of Things with TCS iON'>B. Tech. (CSE) Internet of Things with TCS iON</option>\
			<option value='B. Tech. (CSE) Artificial Intelligence and Machine Learning with IBM'>B. Tech. (CSE) Artificial Intelligence and Machine Learning with IBM</option>\
			<option value='B. Tech. (CSE) Cloud Computing with TCS iON'>B. Tech. (CSE) Cloud Computing with TCS iON</option>\
			<option value='B. Tech. Civil Engineering (Lateral Entry)'>B. Tech. Civil Engineering (Lateral Entry)</option>\
			<option value='B. Tech. Mechanical Engineering (Lateral Entry)'>B. Tech. Mechanical Engineering (Lateral Entry)</option>\
			<option value='B. Tech. Computer Science and Engineering (Lateral Entry)'>B. Tech. Computer Science and Engineering (Lateral Entry)</option>\
			<option value='B. Tech. Information Technology (Lateral Entry)'>B. Tech. Information Technology (Lateral Entry)</option>\
			<option value='B. Tech. Electrical Engineering (Lateral Entry)'>B. Tech. Electrical Engineering (Lateral Entry)</option>\
			<option value='B. Tech. Electronics and Communications Engineering (Lateral Entry)'>B. Tech. Electronics and Communications Engineering (Lateral Entry)</option>\
			<option value='B. Tech. Mechatronics Engineering (Lateral Entry)'>B. Tech. Mechatronics Engineering (Lateral Entry)</option>\
			<option value='B. Tech. Biotechnology (Lateral Entry)'>B. Tech. Biotechnology (Lateral Entry)</option>\
			<option value='B. Tech. (CSE) Data Science with IBM (Lateral Entry)'>B. Tech. (CSE) Data Science with IBM (Lateral Entry)</option>\
			<option value='B. Tech. (CSE) Internet of Things with TCS iON (Lateral Entry)'>B. Tech. (CSE) Internet of Things with TCS iON (Lateral Entry)</option>\
			<option value='B. Tech. (CSE) Artificial Intelligence and Machine Learning with IBM (Lateral Entry)'>B. Tech. (CSE) Artificial Intelligence and Machine Learning with IBM (Lateral Entry)</option>\
			<option value='B. Tech. (CSE) Cloud Computing with TCS iON (Lateral Entry)'>B. Tech. (CSE) Cloud Computing with TCS iON (Lateral Entry)</option>\
			<option value='BCA'>BCA</option>\
			<option value='BCA Data Science and Information Security with TCS iON'>BCA Data Science and Information Security with TCS iON</option>\
			<option value='B.Sc.(Computer Science)'>B.Sc.(Computer Science)</option>\
			<option value='B.Sc (Information Technology)'>B.Sc (Information Technology)</option>\
			<option value='Bachelor of Architecture'>Bachelor of Architecture</option>\
			<option value='Bachelor of Planning'>Bachelor of Planning</option>\
			<option value='L.L.B.'>L.L.B.</option>\
			<option value='BA LL.B (Hons.)'>BA LL.B (Hons.)</option>\
			<option value='BBA LL.B'>BBA LL.B</option>\
			<option value='B. Sc. (Hons.) Physics'>B. Sc. (Hons.) Physics</option>\
			<option value='B. Sc. (Hons.) Mathematics'>B. Sc. (Hons.) Mathematics</option>\
			<option value='B. Sc. (Hons.) Statistics'>B. Sc. (Hons.) Statistics</option>\
			<option value='B. Sc. (Hons.) Chemistry'>B. Sc. (Hons.) Chemistry</option>\
			<option value='B. Sc. (Hons.) Botany'>B. Sc. (Hons.) Botany</option>\
			<option value='B. Sc. (Hons.) Zoology'>B. Sc. (Hons.) Zoology</option>\
			<option value='B. Sc. (Hons.) Biotechnology'>B. Sc. (Hons.) Biotechnology</option>\
				<option value='B. Sc. (Hons.) Microbiology'>B. Sc. (Hons.) Microbiology</option>\
			<option value='B. Sc. (Hons.) Bioinformatics'>B. Sc. (Hons.) Bioinformatics</option>\
			<option value='B. Sc. (Hons.) Biochemistry'>B. Sc. (Hons.) Biochemistry</option>\
				<option value='B. Sc. (Hons.) Geology'>B. Sc. (Hons.) Geology</option>\
			<option value='B. Sc. (Hons.) Psychology'>B. Sc. (Hons.) Psychology</option>\
</select>";
		}

		else if (typevalue == 'Postgraduate')
		{
			document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='Master of Fine Arts' >Master of Fine Arts</option>\
<option value='M. Des. Fashion Design' >M. Des. Fashion Design</option>\
<option value='M. Des. Textile Design'>M. Des. Textile Design</option>\
<option value='M. Des. Interior Design'>M. Des. Interior Design</option>\
<option value='M. Des. Graphic Design'>M. Des. Graphic Design</option>\
<option value='M.V.A. Film Technology'>M.V.A. Film Technology</option>\
<option value='M.V.A. Animation and VFX'>M.V.A. Animation and VFX</option>\
<option value='M.A. English'>M.A. English</option>\
<option value='M.A. Hindi'>M.A. Hindi</option>\
<option value='M.A. Marathi'>M.A. Marathi</option>\
<option value='M.A. Sanskrit'>M.A. Sanskrit</option>\
<option value='M.A. Public Administration'>M.A. Public Administration</option>\
<option value='M.A. History'>M.A. History</option>\
<option value='M.A. Political Science'>M.A. Political Science</option>\
<option value='M.A. Geography'>M.A. Geography</option>\
<option value='M.A. Education'>M.A. Education</option>\
<option value='M. Sc. (Yoga)'>M. Sc. (Yoga)</option>\
<option value='MA (J and MC)'>MA (J and MC)</option>\
<option value='Master of Library and Information Science'>Master of Library and Information Science</option>\
<option value='Master of Social Work'>Master of Social Work</option>\
<option value='M. Com.'>M. Com.</option>\
<option value='MBA Marketing'>MBA Marketing</option>\
<option value='MBA Finance'>MBA Finance</option>\
<option value='MBA HR'>MBA HR</option>\
<option value='MBA RUDM'>MBA RUDM</option>\
<option value='MBA IT'>MBA IT</option>\
<option value='MBA (Executive) Marketing'>MBA (Executive) Marketing</option>\
<option value='MBA (Executive) Finance'>MBA (Executive) Finance</option>\
<option value='MBA (Executive) HR'>MBA (Executive) HR</option>\
<option value='MBA (Executive) IT'>MBA (Executive) IT</option>\
<option value='M.H.M'>M.H.M</option>\
<option value='M. Tech. Civil Engineering (Structural Engineering)'>M. Tech. Civil Engineering (Structural Engineering)</option>\
<option value='M. Tech. Civil Engineering (Environmental Engineering)'>M. Tech. Civil Engineering (Environmental Engineering)</option>\
<option value='M. Tech. Civil Engineering (CTCM)'>M. Tech. Civil Engineering (CTCM)</option>\
<option value='M. Tech Civil Engineering (Transportation Engineering)'>M. Tech Civil Engineering (Transportation Engineering)</option>\
<option value='M. Tech. Mechanical Engineering (Thermal Engineering)'>M. Tech. Mechanical Engineering (Thermal Engineering)</option>\
<option value='M. Tech. Mechatronics Engineering (Automotive Technology)'>M. Tech. Mechatronics Engineering (Automotive Technology)</option>\
<option value='M. Tech. Computer Science and Engineering'>M. Tech. Computer Science and Engineering</option>\
<option value='M. Tech Information Technology'>M. Tech Information Technology</option>\
<option value='M. Tech Electrical Engineering'>M. Tech Electrical Engineering</option>\
<option value='M. Tech Electronics and Communication Engineering'>M. Tech Electronics and Communication Engineering</option>\
<option value='M. Tech Biotechnology'>M. Tech Biotechnology</option>\
<option value='Master of Computer Application'>Master of Computer Application</option>\
<option value='M.Sc. (Computer Science)'>M.Sc. (Computer Science)</option>\
<option value='M.Sc. (Information Technology)'>M.Sc. (Information Technology)</option>\
<option value='LL.M.'>LL.M.</option>\
<option value='LL.M. One Year'>LL.M. One Year</option>\
<option value='M.Sc. Physics'>M.Sc. Physics</option>\
<option value='M.Sc. Mathematics'>M.Sc. Mathematics</option>\
<option value='M.Sc. Statistics'>M.Sc. Statistics</option>\
<option value='M.Sc. Chemistry'>M.Sc. Chemistry</option>\
<option value='M.Sc. Botany'>M.Sc. Botany</option>\
<option value='M.Sc. Zoology'>M.Sc. Zoology</option>\
<option value='M.Sc. Biotechnology'>M.Sc. Biotechnology</option>\
<option value='M.Sc. Microbiology'>M.Sc. Microbiology</option>\
<option value='M.Sc. Bioinformatics'>M.Sc. Bioinformatics</option>\
<option value='M.Sc. Biochemistry'>M.Sc. Biochemistry</option>\
<option value='M.Sc. Geology'>M.Sc. Geology</option>\
<option value='M.Sc. Environmental Science'>M.Sc. Environmental Science</option>\
<option value='M.Sc. Medicinal Chemistry'>M.Sc. Medicinal Chemistry</option>\
<option value='PGDM (Business Analytics)'>PGDM (Business Analytics)</option>\
<option value='PGDM (LSCM)'>PGDM (LSCM)</option>\
<option value='Post-Graduate Diploma in Computer Application'>Post-Graduate Diploma in Computer Application</option>\
<option value='PGDM(HR)'>PGDM(HR)</option>\
<option value='M.A. Economics'>M.A. Economics</option>\
<option value='M.A. Psychology'>M.A. Psychology</option>\
<option value='M. Tech. Computer Science and Engineering (AI and ML)'>M. Tech. Computer Science and Engineering (AI and ML)</option>\
<option value='MCA'>MCA</option>\
<option value='MSC Psychology'>MSC Psychology</option>\
<option value='L.L.B.'>L.L.B.</option>\
<option value='Bachelor of Library and Information Science'>Bachelor of Library and Information Science</option>\
</select>";
		}
		
		
		else if (typevalue == 'Doctorate')
		{
			document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='Doctor of Philosophy in Offered Disciplines (Full Time)' >Doctor of Philosophy in Offered Disciplines (Full Time)</option>\
			<option value='Doctor of Philosophy in Offered Disciplines (Part Time)' >Doctor of Philosophy in Offered Disciplines (Part Time)</option>\
						<option value='Ph.D. Doctor of Philosophy'>Ph.D. Doctor of Philosophy</option>\
						<option value='Ph.D. Full (Engineering, Management, Law)'>Ph.D. Full (Engineering, Management, Law)</option>\
						<option value='Ph.D. Full(Arts, Humanity, Science, Commerce)'>Ph.D. Full(Arts, Humanity, Science, Commerce)</option>\
						<option value='Ph.D. Part (Engineering, Managementt, Law)'>Ph.D. Part (Engineering, Managementt, Law)</option>\
						<option value='Ph.D. Part (Arts, Humanity, Science, Commerce)'>Ph.D. Part (Arts, Humanity, Science, Commerce)</option>\
						<option value='Ph.D. in Biochemistry'>Ph.D. in Biochemistry</option>\
						<option value='Ph.D. in Biochemistry - Part Time'>Ph.D. in Biochemistry - Part Time</option>\
						<option value='Ph.D. in Bioinformatics'>Ph.D. in Bioinformatics</option>\
						<option value='Ph.D. in Bioinformatics - Part Time'>Ph.D. in Bioinformatics - Part Time</option>\
						<option value='Ph.D. in Biotechnology'>Ph.D. in Biotechnology</option>\
						<option value='Ph.D. in Biotechnology - Part Time'>Ph.D. in Biotechnology - Part Time</option>\
						<option value='Ph.D. in Botany'>Ph.D. in Botany</option>\
						<option value='Ph.D. in Botany - Part Time'>Ph.D. in Botany - Part Time</option>\
						<option value='Ph.D. in Chemistry'>Ph.D. in Chemistry</option>\
						<option value='Ph.D. in Chemistry - Part Time'>Ph.D. in Chemistry - Part Time</option>\
						<option value='Ph.D. in Civil Engieering'>Ph.D. in Civil Engieering</option>\
						<option value='Ph.D. in Civil Engineering -Part Time'>Ph.D. in Civil Engineering -Part Time</option>\
						<option value='Ph.D. in Commerce'>Ph.D. in Commerce</option>\
						<option value='Ph.D. in Commerce - Part Time'>Ph.D. in Commerce - Part Time</option>\
						<option value='Ph.D. in CSE'>Ph.D. in CSE</option>\
						<option value='Ph.D. in CSE - Part Time'>Ph.D. in CSE - Part Time</option>\
						<option value='Ph.D. in ECE'>Ph.D. in ECE</option>\
						<option value='Ph.D. in ECE - Part Time'>Ph.D. in ECE - Part Time</option>\
						<option value='Ph.D. in Electrical Engineering'>Ph.D. in Electrical Engineering</option>\
						<option value='Ph.D. in Electrical Engineering -Part Time'>Ph.D. in Electrical Engineering -Part Time</option>\
						<option value='Ph.D. in English'>Ph.D. in English</option>\
						<option value='Ph.D. in English - Part Time'>Ph.D. in English - Part Time</option>\
						<option value='Ph.D. in Environmental Science'>Ph.D. in Environmental Science</option>\
						<option value='Ph.D. in Environmental Science - Part Time'>Ph.D. in Environmental Science - Part Time</option>\
						<option value='Ph.D. in Geology'>Ph.D. in Geology</option>\
						<option value='Ph.D. in Geology - Part Time'>Ph.D. in Geology - Part Time</option>\
						<option value='Ph.D. in Hindi'>Ph.D. in Hindi</option>\
						<option value='Ph.D. in Hindi - Part Time'>Ph.D. in Hindi - Part Time</option>\
						<option value='Ph.D. in History'>Ph.D. in History</option>\
						<option value='Ph.D. in History - Part Time'>Ph.D. in History - Part Time</option>\
						<option value='Ph.D. in Journalism and Mass Communication'>Ph.D. in Journalism and Mass Communication</option>\
						<option value='Ph.D. in Journalism and Mass Communication - Part Time'>Ph.D. in Journalism and Mass Communication - Part Time</option>\
						<option value='Ph.D. in Law'>Ph.D. in Law</option>\
						<option value='Ph.D. in Law - Part Time'>Ph.D. in Law - Part Time</option>\
						<option value='Ph.D. in Library & Information Sciences'>Ph.D. in Library & Information Sciences</option>\
						<option value='Ph.D. in Library & Information Sciences - Part Time'>Ph.D. in Library & Information Sciences - Part Time</option>\
						<option value='Ph.D. in Management'>Ph.D. in Management</option>\
						<option value='Ph.D. in Management - Part Time'>Ph.D. in Management - Part Time</option>\
						<option value='Ph.D. in Marathi'>Ph.D. in Marathi</option>\
						<option value='Ph.D. in Marathi - Part Time'>Ph.D. in Marathi - Part Time</option>\
						<option value='Ph.D. in Mathematics'>Ph.D. in Mathematics</option>\
						<option value='Ph.D. in Mathematics - Part Time'>Ph.D. in Mathematics - Part Time</option>\
						<option value='Ph.D. in Mechanical Engieering'>Ph.D. in Mechanical Engieering</option>\
						<option value='Ph.D. in Mechanical Engineering -Part Time'>Ph.D. in Mechanical Engineering -Part Time</option>\
						<option value='Ph.D. in Performing Arts'>Ph.D. in Performing Arts</option>\
						<option value='Ph.D. in Physics'>Ph.D. in Physics</option>\
						<option value='Ph.D. in Physics - Part Time'>Ph.D. in Physics - Part Time</option>\
						<option value='Ph.D. in Psychology'>Ph.D. in Psychology</option>\
						<option value='Ph.D. in Psychology - Part Time'>Ph.D. in Psychology - Part Time</option>\
						<option value='Ph.D. in Public Administration'>Ph.D. in Public Administration</option>\
						<option value='Ph.D. in Public Administration - Part Time'>Ph.D. in Public Administration - Part Time</option>\
						<option value='Ph.D. in Social Work'>Ph.D. in Social Work</option>\
						<option value='Ph.D. in Social Work - Part Time'>Ph.D. in Social Work - Part Time</option>\
</select>";
		}
		
		
		else if (typevalue == 'Law')
		{
			document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='BA LLB (Hons)' >BA LLB (Hons)</option>\
			<option value='LLB (Hons)' >LLB (Hons)</option>\
</select>";
		}
		
		
		else if (typevalue == 'Arts & Physiology')
		{
			document.getElementById("branchid").innerHTML="<select name='Program' id='branchid' class='form-control validate[required]'><option value='' selected='selected'>Select Your Course*</option><option value='BA (Plain)' >BA (Plain)</option>\
			<option value='BA (Humanities)' >BA (Humanities)</option>\
			<option value='BA (Political Science)' >BA (Political Science)</option>\
			<option value='BA (Liberal Arts)' >BA (Liberal Arts)</option>\
			<option value='BA (Performing Arts)' >BA (Performing Arts)</option>\
			<option value='BA (Yoga Science)' >BA (Yoga Science)</option>\
			<option value='MA (English Literature)' >MA (English Literature)</option>\
</select>";
		}
 
 
 
	}