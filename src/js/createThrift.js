import { POST_THRIFT_URL } from './settings/api';
import { getToken } from './utils/storage';
import { checkLength, checkImgUrl } from "./utils/validation";

const addThriftForm = document.getElementById('addThriftForm');
const thriftTitle = document.getElementById('thriftTitle');
const errorThriftTitle = document.getElementById('errorThriftTitle');
const thriftDescription = document.getElementById('thriftDescription');
const errorThriftDescription = document.getElementById('errorThriftDescription');
const thriftImage = document.getElementById('thriftImageUrl');
const errorThriftImage = document.getElementById('errorThriftImageUrl');
const thriftTags = document.getElementById('thriftTags');
const endTime = document.getElementById('endTime');
const errorEndTime = document.getElementById('errorEndTime');
const errorMessageAddThrift = document.getElementById('errorMessageAddThrift');


addThriftForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let validInputAddThrift = false;
  if (checkLength(thriftTitle.value, 4)) {
    thriftTitle.classList.add('text-green-500', 'border-green-500');
    errorThriftTitle.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    thriftTitle.classList.add('text-red-500', 'border-red-500');
    errorThriftTitle.classList.remove('hidden');
  }

  if (checkLength(thriftDescription.value, 7)) {
    thriftDescription.classList.add('text-green-500', 'border-green-500');
    errorThriftDescription.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    thriftDescription.classList.add('text-red-500', 'border-red-500');
    errorThriftDescription.classList.remove('hidden');
  }

  if (checkImgUrl(thriftImage.value || thriftImage.value === '')) {
    thriftImage.classList.add('text-green-500', 'border-green-500');
    errorThriftImage.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    thriftImage.classList.add('text-red-500', 'border-red-500');
    errorThriftImage.classList.remove('hidden');
  }

  if (endTime.value) {
    endTime.classList.add('text-green-500', 'border-green-500');
    errorEndTime.classList.add('hidden');
    validInputAddThrift = true;
  } else {
    endTime.classList.add('text-red-500', 'border-red-500');
    errorEndTime.classList.remove('hidden');
  }


  if (validInputAddThrift) {
    const tags = [thriftTags.value];
    const thriftGallery = [thriftImage.value];

    const postData = {
      "title": thriftTitle.value,
      "description": thriftDescription.value,
      "tags": tags,
      "media": thriftGallery.length > 0 ? thriftGallery : null,
      "endsAt": endTime.value,
    };

    const accessToken = getToken();

    async function postThrift() {
      const response = await fetch(POST_THRIFT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        const postJSON = await response.json();
        console.log(postJSON);
        errorMessageAddThrift.innerHTML = 'Your thrift is listed!';
      } else {
        const errMessage = await response.json();
        errorMessageAddThrift.innerHTML = `${errMessage}`;
      }
    }
    postThrift().then();
  }
})
