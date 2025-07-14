// 과제:
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearButton = document.getElementById("clearButton");

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();

    // 입력값이 비어있는지 확인
    if (taskText === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    // 새로운 리스트 아이템 생성
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");

    // 할 일 텍스트 추가
    const taskItem = document.createElement("span");
    taskItem.textContent = taskText;
    newTask.appendChild(taskItem);

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-button");

    // 삭제 버튼 이벤트 리스너
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(newTask);

        // 할 일 개수 업데이트
        updateTaskCount();
    });

    // 완료 상태 토글 이벤트 리스너
    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    // 요소 조립
    taskList.appendChild(newTask);
    newTask.appendChild(deleteBtn);

    // 중요도 확인
    const prioritySelect = document.getElementById("priority");
    if (prioritySelect.value === "high") {
        taskItem.style.color = "red";
    }

    // 입력창 초기화
    taskInput.value = "";

    // 중요도 초기화
    prioritySelect.value = "low";

    // 할 일 개수 업데이트
    updateTaskCount();
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    taskList.innerHTML = "";

    // 할 일 개수 업데이트
    updateTaskCount();
}

// 추가 버튼 클릭 이벤트 적용
addButton.addEventListener("click", addTask);

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.addEventListener("click", clearAllTasks);

// 할 일 개수 업데이트
function updateTaskCount() {
    const taskCount = document.getElementById("taskCount");
    taskCount.textContent = `현재 할 일: ${taskList.children.length}개`;
}
