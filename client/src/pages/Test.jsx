import React, {useState, useEffect} from 'react'
import Navbar from '../component/navbar';
import axios from 'axios';

export default function IntroTest() {
    const [selectedValue, setSelectedValue] = useState("");
    const [frequency, setFrequency] = useState({});
    const [maxKey, setMaxKey] = useState("");
    const [userID, setUserID] = useState("");
    const [learningStyle, setLearningStyle] = useState("");

    useEffect(() => {
        setUserID(localStorage.getItem("userID"));    
    }, []);
    // Define an onChange handler function
    function handleChange(e) {
        // Get the value of the radio button that was clicked
        const value = e.target.value;

        // Update the state with the selected value
        setSelectedValue(value);
    }

    function findSelection (field) {
        var radios = document.getElementsByName (field); // get all radio buttons with the same name
        var value; // declare a variable to store the value
        for (var i = 0; i < radios.length; i++) { // loop through all radio buttons
            if (radios [i].checked) { // if the radio button is checked
                value = radios [i].value; // get the value
                break; // exit the loop
            }
        }
        return value; // return the value
    }

    function countFrequency(array) {
        // create an empty object to store the frequency of each value
        var frequency = {};
        // loop through the array
        for (var i = 0; i < array.length; i++) {
          // get the current value
          var value = array[i];
          // if the value is already in the object, increment its count
          if (frequency[value]) {
            frequency[value]++;
          }
          // otherwise, set its count to 1
          else {
            frequency[value] = 1;
          }
        }
        // return the object with the frequency of each value
        return frequency;
    }

    function findMaxKey(array) {
        // initialize variables to store the max key and value and the second max key and value
        let maxKey = "";
        let maxValue = -Infinity;
        let secondMaxKey = "";
        let secondMaxValue = -Infinity;
      
        // loop through the array
        for (let i = 0; i < array.length; i++) {
          // get the current key and value
          let key = array[i][0];
          let value = array[i][1];
      
          // check if the current value is greater than the max value
          if (value > maxValue) {
            // update the second max key and value to be the previous max key and value
            secondMaxKey = maxKey;
            secondMaxValue = maxValue;
            // update the max key and value to be the current key and value
            maxKey = key;
            maxValue = value;
          } else if (value > secondMaxValue) {
            // check if the current value is greater than the second max value
            // update the second max key and value to be the current key and value
            secondMaxKey = key;
            secondMaxValue = value;
          }
        }
      
        // check if the max key is ""
        if (maxKey === "undefined" || maxKey === "") {
          // return the second max key
          return secondMaxKey;
        } else {
          // return the max key
          return maxKey;
        }
    }

    async function handleSubmit(event) {
        // function to handle the submit event of the form
        event.preventDefault(); // prevent the default behavior of the form
        console.log(selectedValue); // print the selected value to the console
        // same as before
        var array = []; // create an empty array to store the selected values
        for (var i = 1; i <= 15; i++) {
          // loop through the radio button groups
          var field = "radio-" + i; // get the name of the radio button group
          var value = findSelection(field); // get the selected value of the radio button group
          array.push(value); // add the value to the array
        }
        console.log(array);
        var frequencyObject = countFrequency(array); // get the frequency object of the array
        var frequencyArray = Object.entries(frequencyObject); // convert the frequency object to an array of arrays
        setFrequency(frequencyArray); // update the state variable with the frequency array 
        console.log(frequencyArray);
        let tempMaxKey = findMaxKey(frequencyArray);
        setMaxKey(findMaxKey(frequencyArray)); // call findMaxKey with frequencyArray instead of frequencyObject
        console.log("maxkey = ", tempMaxKey);
        let style = 0;
        switch(tempMaxKey) {
            case "Auditory":
              // code block
              setLearningStyle(1);
              style = 1;
              break;
            case "Visual":
              // code block
              setLearningStyle(2);
              style = 2;
              break;
            case "Kinesthetic":
              // code block
              setLearningStyle(3);
              style = 3;
              break;
            default:
          }
        console.log(learningStyle);

        try{
            const res = await axios.put("http://localhost:3001/auth/learningStyle",  
                {
                    _id : userID,
                    learningStyle: style
                })
            console.log(res.data.message);
            localStorage.setItem("learningStyle", style);
            console.log("submit trus dapet style: " ,style);
            // toast(res.data.message);
            //navigate("/rekomendasi");

        } catch (err) {
            console.error(err.response.data.message);
            // toast.error(err.response.data.message)
        }
    }
    
    return(
        <div>
        <Navbar/>
        <div className="justify-items-center w-full h-screen pl-[110px] pt-[120px]">
            <div className='flex flex-col items-center'>
                <div className="justify-center flex items-center text-center h-[30px] w-[250px] bg-blue rounded-full text-white">
                    TEST SEDANG BERJALAN
                </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div>
                {/* Pertanyaan 1 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 1
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat mengingat dengan baik dengan mendengarkan seorang guru. Hal yang diingat mencakup informasi, penjelasan dan diskusi.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input
                                    id="radio-1a" 
                                    type="radio" value="" onChange={handleChange} name="radio-1" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-1" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value=""
            onChange={handleChange} name="radio-1" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value=""
            onChange={handleChange} name="radio-1" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory"
            onChange={handleChange} name="radio-1" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory"
            onChange={handleChange} name="radio-1" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory"
            onChange={handleChange} name="radio-1" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>
                {/* Pertanyaan 2 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 2
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya lebih suka melihat informasi tertulis di papan tulis dan dilengkapi dengan alat bantu visual dan bacaan yang ditugaskan.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-2" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-2" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-2" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-2" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-2" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-2" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-2" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>
                {/* Pertanyaan 3 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 3
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya suka menulis sesuatu atau membuat catatan untuk tinjauan visual.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-3" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-3" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-3" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-3" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-3" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-3" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-3" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>
                {/* Pertanyaan 4 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 4
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya lebih suka menggunakan poster, model, atau praktik nyata dan aktivitas lain di kelas.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-4" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-4" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-4" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-4" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-4" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-4" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-4" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 5 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 5
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya memerlukan penjelasan tentang diagram, grafik, atau arah visual.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-5" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-5" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value=""
            onChange={handleChange} name="radio-5" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value=""
            onChange={handleChange} name="radio-5" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory"
            onChange={handleChange} name="radio-5" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory"
            onChange={handleChange} name="radio-5" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory"
            onChange={handleChange} name="radio-5" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 6 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 6
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya senang bekerja dengan tangan saya atau membuat sesuatu.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-6" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-6" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-6" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-6" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-6" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-6" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-6" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 7 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 7
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya terampil dan menikmati mengembangkan pembuatan grafik dan bagan.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-7" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-7" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-7" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-7" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-7" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-7" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-7" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 8 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 8
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat mengetahui apakah suara cocok saat disajikan dengan pasangan suara.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-8" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-8" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value=""
            onChange={handleChange} name="radio-8" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value=""
            onChange={handleChange} name="radio-8" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory"
            onChange={handleChange} name="radio-8" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory"
            onChange={handleChange} name="radio-8" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory"
            onChange={handleChange} name="radio-8" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 9 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 9
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat mengingat dengan baik dengan menulis beberapa kali.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-9" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-9" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-9" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-9" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-9" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-9" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-9" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 10 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 10
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat dengan mudah memahami dan mengikuti petunjuk di peta.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-10" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-10" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-10" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-10" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-10" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-10" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-10" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 11 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 11
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya melakukan yang terbaik dalam mata pelajaran akademik dengan mendengarkan ceramah dan kaset.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-11" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" 
            onChange={handleChange} name="radio-11" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" 
            onChange={handleChange} name="radio-11" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-11" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" 
            onChange={handleChange} name="radio-11" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory"
            onChange={handleChange} name="radio-11" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory"
            onChange={handleChange} name="radio-11" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 12 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 12
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya bermain dengan koin atau kunci di saku saya.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-12" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-12" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-12" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-12" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" name="radio-12" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" name="radio-12" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" name="radio-12" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 13 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 13
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya belajar mengeja lebih baik dengan mengulangi kata-kata dengan keras daripada dengan menulis kata-kata di atas kertas.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-13" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value=""
            onChange={handleChange} name="radio-13" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" 
            onChange={handleChange} name="radio-13" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" 
            onChange={handleChange} name="radio-13" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Auditory" 
            onChange={handleChange} name="radio-13" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Auditory" 
            onChange={handleChange} name="radio-13" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Auditory" 
            onChange={handleChange} name="radio-13" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 14 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 14
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya dapat memahami sebuah artikel berita lebih baik dengan membacanya di koran atau online daripada dengan mendengarkan laporan tentangnya di radio atau internet.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-14" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" name="radio-14" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" name="radio-14" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" name="radio-14" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Visual" name="radio-14" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Visual" name="radio-14" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Visual" name="radio-14" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div> 
                {/* Pertanyaan 15 */}
                <div className='flex flex-col items-center mt-5'>
                    <div className="w-[1100px] border-2 bg-[#C4DFF9] border-[#C4DFF9] p-3 font-semibold">
                        PERNYATAAN 15
                    </div>
                    <div className="w-[1100px] border-2 border-[#C4DFF9] p-3 mb-2">
                        Saya memegang benda di tangan saya selama periode belajar.
                    </div>
                    <div className="w-[1100px] bg-[#F8B200] p-3 font-semibold">
                        JAWABAN
                    </div>
                    <div className="w-[1100px] border-2 border-[#F8B200] p-3 mb-2">
                        <div class="flex justify-center items-center">
                            <label className='mx-4'>Tidak Setuju</label>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" 
            onChange={handleChange} name="radio-15" class="w-14 h-14 border-2 hover:[#377DC3] border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1a" type="radio" value="" 
            onChange={handleChange} name="radio-15" class="w-12 h-12 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1c" type="radio" value="" 
            onChange={handleChange} name="radio-15" class="w-10 h-10 border-2 border-[#377DC3] focus:bg-[#377DC3] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1d" type="radio" value="" 
            onChange={handleChange} name="radio-15" class="w-8 h-8 border-2 border-[#929292] focus:bg-[#929292] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1e" type="radio" value="Kinesthetic" 
            onChange={handleChange} name="radio-15" class="w-10 h-10 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1f" type="radio" value="Kinesthetic" 
            onChange={handleChange} name="radio-15" class="w-12 h-12 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <div class="flex items-center mx-4">
                                <input id="radio-1g" type="radio" value="Kinesthetic" 
            onChange={handleChange} name="radio-15" class="w-14 h-14 border-2 border-[#F8B200] focus:bg-[#F8B200] rounded-full"/>
                            </div>
                            <label className='mx-4'>Sangat Setuju</label>
                        </div>
                    </div>
                </div>         
            </div>
            <div className='flex flex-col items-center my-5'>
                    <button type="submit" className="bg-yellow w-[120px] px-3 py-2 rounded-xl font-muli text-lg" >
                        <a className='h-full w-full' href="/rekomendasi">Selesai Test   </a> 
                    </button>
            </div>
            </form>
        </div>
        </div>
    )
}