export default (Costs = {}, Ad = 0, Mn = 0) =>
    (Number(Costs.adulto || 0) * Ad) + (Number(Costs.menor || 0) * Mn)