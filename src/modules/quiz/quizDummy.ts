export const nonData: Quiz = {
    content: `퀴즈가 없습니다.`,
    items: [
        {
            item_content: ""
        },
        {
            item_content: ""
        },
        {
            item_content: ""
        },
        {
            item_content: ""
        }
    ],
    answer: 1
}
export const quizDummy: Quiz[] = [{'content': '**Python**에서 `list.append(x)` 메서드를 사용하면 어떤 작업을 수행할 수 있습니까?',
    'items': [{'item_content': '리스트의 마지막에 항목 x를 추가합니다.'},
        {'item_content': '리스트의 처음에 항목 x를 추가합니다.'},
        {'item_content': '리스트에서 항목 x를 삭제합니다.'},
        {'item_content': '리스트에서 모든 항목 x를 삭제합니다.'}],
    'answer': 0},
    {'content': '**Python**에서 다음 코드가 수행하는 작업은 무엇입니까?\n\n```python\nlist1 = [1, 2, 3]\nlist2 = [4, 5, 6]\nlist1.extend(list2)\n```',
        'items': [{'item_content': 'list1과 list2를 병합하여 새로운 리스트를 생성합니다.'},
            {'item_content': 'list2의 모든 항목을 list1의 끝에 추가합니다.'},
            {'item_content': 'list1의 모든 항목을 list2의 끝에 추가합니다.'},
            {'item_content': 'list2를 list1의 특정 위치에 삽입합니다.'}],
        'answer': 1},
    {'content': '**Python**에서 `list.insert(i, x)` 메서드는 어떤 작업을 수행합니까?',
        'items': [{'item_content': '리스트의 i번째 위치에 항목 x를 추가합니다.'},
            {'item_content': '리스트의 i번째 항목을 x로 바꿉니다.'},
            {'item_content': '리스트의 i번째 항목을 x로 바꾸고, 원래의 값을 반환합니다.'},
            {'item_content': '리스트의 i번째 항목 x를 삭제합니다.'}],
        'answer': 0},
    {'content': '**Python**에서 다음 코드가 수행하는 작업은 무엇입니까?\n\n```python\nlist1 = [1, 2, 3]\nlist2 = [4, 5, 6]\nfor item in list2:\n    list1.append(item)\n```',
        'items': [{'item_content': 'list2의 모든 항목을 list1의 끝에 추가합니다.'},
            {'item_content': 'list1의 모든 항목을 list2의 끝에 추가합니다.'},
            {'item_content': 'list1과 list2를 병합하여 새로운 리스트를 생성합니다.'},
            {'item_content': 'list2를 list1의 특정 위치에 삽입합니다.'}],
        'answer': 0},
    {'content': '**Python**에서 `list.append(x)`와 `list.extend(x)` 메서드를 사용하면 어떤 차이가 있습니까?',
        'items': [{'item_content': '`append`는 리스트의 끝에 항목 x를 추가하고, `extend`는 리스트의 끝에 iterable의 모든 항목을 추가합니다.'},
            {'item_content': '`append`는 리스트의 처음에 항목 x를 추가하고, `extend`는 리스트의 처음에 iterable의 모든 항목을 추가합니다.'},
            {'item_content': '`append`는 리스트에서 항목 x를 삭제하고, `extend`는 리스트에서 iterable의 모든 항목을 삭제합니다.'},
            {'item_content': '`append`와 `extend`는 동일한 작업을 수행합니다.'}],
        'answer': 0},
    {'content': '**Python**에서 다음 코드가 수행하는 작업은 무엇입니까?\n\n```python\nlist1 = [1, 2, 3]\nlist1.insert(0, 0)\n```',
        'items': [{'item_content': '리스트 list1의 첫 번째 위치에 0을 추가합니다.'},
            {'item_content': '리스트 list1의 마지막 위치에 0을 추가합니다.'},
            {'item_content': '리스트 list1에서 첫 번째 위치의 항목을 0으로 바꿉니다.'},
            {'item_content': '리스트 list1에서 첫 번째 위치의 항목을 삭제합니다.'}],
        'answer': 0},
    {'content': '**Python**에서 `list.remove(x)` 메서드는 어떤 작업을 수행합니까?',
        'items': [{'item_content': '리스트에서 첫 번째로 나타나는 항목 x를 삭제합니다.'},
            {'item_content': '리스트에서 마지막으로 나타나는 항목 x를 삭제합니다.'},
            {'item_content': '리스트에서 모든 항목 x를 삭제합니다.'},
            {'item_content': '리스트에서 항목 x를 찾아 그 인덱스를 반환합니다.'}],
        'answer': 0},
    {'content': '**Python**에서 다음 코드가 수행하는 작업은 무엇입니까?\n\n```python\nlist1 = [1, 2, 3, 2]\nlist1.remove(2)\n```',
        'items': [{'item_content': '리스트 list1에서 첫 번째로 나타나는 2를 삭제합니다.'},
            {'item_content': '리스트 list1에서 마지막으로 나타나는 2를 삭제합니다.'},
            {'item_content': '리스트 list1에서 모든 2를 삭제합니다.'},
            {'item_content': '리스트 list1에서 2를 찾아 그 인덱스를 반환합니다.'}],
        'answer': 0}]