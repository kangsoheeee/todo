interface ItDodoItemContent {
  content: string;
}

interface ITodoItem extends ItDodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
