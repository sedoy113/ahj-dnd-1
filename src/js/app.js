import Taskmanager from './Taskmanager';

const taskmanager = new Taskmanager(document.querySelector('.taskmanager'));
taskmanager.init();
taskmanager.tasks = [
  ['Dori me', 'Interimo adapare dori me', 'Ameno ameno latire', 'Latiremo', 'Dori me'],
  ['Ameno', 'Omenare imperavi ameno', 'Dimere Dimere matiro', 'Matiremo', 'Ameno'],
  ['Omenare imperavi emulari', 'Ameno', 'Omenare imperavi emulari'],
];
taskmanager.render();
