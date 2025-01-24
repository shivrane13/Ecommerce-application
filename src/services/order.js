import { supabase } from "./supabaseClient";

export async function getOrder(userId) {
  try {
    let { data: order, error } = await supabase
      .from("order")
      .select("*")
      .eq("userId", userId);
    console.log(order);
    return order;
  } catch (error) {
    console.log(error);
  }
}

export async function getOrderDetail(id) {
  try {
    let { data: order, error } = await supabase
      .from("order")
      .select("*")
      .eq("id", id);
    return order[0];
  } catch (error) {
    console.log(error);
  }
}

export async function addOrder(orderData) {
  try {
    const { data, error } = await supabase
      .from("order")
      .insert([orderData])
      .select();
    console.log(data);
    console.log(error);
  } catch (error) {
    console.log(error);
  }
}
