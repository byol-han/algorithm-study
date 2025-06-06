/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 리스트가 비어 있거나 노드가 하나뿐이면 사이클이 있을 수 없음
  if (!head || !head.next) return false;

  // 두 포인터 초기화: slow는 한 칸씩, fast는 두 칸씩 이동
  let slow = head;
  let fast = head.next;

  // fast와 slow가 만날 때까지 반복
  while (fast !== slow) {
    // fast가 끝에 도달하면 사이클이 없음
    if (!fast || !fast.next) return false;

    // slow는 한 칸 이동
    slow = slow.next;
    // fast는 두 칸 이동
    fast = fast.next.next;
  }

  // fast와 slow가 만났다면 사이클이 있음
  return true;
};

// 포인터 초기 위치가 같아서 메모리 접근이 줄어듦
// 루프 안에서 if (!fast || !fast.next) 같은 불필요한 조건 검사를 루프 바깥에서 한 번만 하면 됨
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
};

/*
항목	                             버전 ①	                                     버전 ②
초기 위치	              slow = head, fast = head.next	                slow = head, fast = head
루프 조건	                  while (fast !== slow)	                    while (fast && fast.next)
조건 검사 위치	              루프 안에서 null 체크	                          루프 시작할 때 null 체크
안정성	                     안전하지만 조금 복잡	                              더 깔끔하고 효율적
속도/성능	        비슷하거나 조금 느릴 수 있음 (조건을 더 자주 검사)	              일반적으로 더 빠르고 최적화됨
*/
