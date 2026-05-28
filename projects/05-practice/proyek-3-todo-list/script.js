/* ========================================
   Proyek 3: Aplikasi To-Do List — Script
   Konsep: DOM Manipulation, Event, Array Methods
   ======================================== */

// ---- State ----
let tasks = [];
let currentFilter = 'all';

// ---- DOM Elements ----
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');
const emptyState = document.getElementById('empty-state');
const appFooter = document.getElementById('app-footer');
const remainingCount = document.getElementById('remaining-count');
const taskSummary = document.getElementById('task-summary');
const btnClear = document.getElementById('btn-clear');
const filterBtns = document.querySelectorAll('.filter-btn');

// ---- Add Task ----
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);
    input.value = '';
    input.focus();
    renderTasks();
});

// ---- Toggle Task (selesai / belum) ----
function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

// ---- Delete Task ----
function deleteTask(id) {
    const taskEl = document.querySelector(`[data-id="${id}"]`);
    if (taskEl) {
        taskEl.classList.add('removing');
        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== id);
            renderTasks();
        }, 300);
    }
}

// ---- Clear Completed ----
btnClear.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
});

// ---- Filter ----
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// ---- Render Tasks ----
function renderTasks() {
    // Filter
    let filtered = tasks;
    if (currentFilter === 'active') {
        filtered = tasks.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filtered = tasks.filter(t => t.completed);
    }

    // Clear list
    taskList.innerHTML = '';

    // Build each task
    filtered.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item${task.completed ? ' completed' : ''}`;
        li.dataset.id = task.id;

        li.innerHTML = `
            <div class="task-checkbox" onclick="toggleTask(${task.id})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            </div>
            <span class="task-text">${escapeHtml(task.text)}</span>
            <button class="task-delete" onclick="deleteTask(${task.id})" aria-label="Hapus tugas">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        `;

        taskList.appendChild(li);
    });

    // Update UI states
    updateSummary();
}

// ---- Update Summary ----
function updateSummary() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;

    // Summary text
    if (total === 0) {
        taskSummary.textContent = 'Belum ada tugas';
    } else {
        taskSummary.textContent = `${completed} dari ${total} tugas selesai`;
    }

    // Remaining count
    remainingCount.textContent = `${remaining} tugas tersisa`;

    // Show/hide empty state
    const filtered = getFilteredTasks();
    emptyState.classList.toggle('visible', filtered.length === 0);

    // Show/hide footer
    appFooter.classList.toggle('visible', total > 0);
}

function getFilteredTasks() {
    if (currentFilter === 'active') return tasks.filter(t => !t.completed);
    if (currentFilter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
}

// ---- Helper: Escape HTML ----
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ---- Initial Render ----
renderTasks();
